import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Box, Button, Typography, Modal, TextField } from '@mui/material';

const PaymentModal = ({ open, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage('Stripe is not properly loaded.');
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');
    setPaymentSuccess(false);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setErrorMessage('Card element is not available.');
      setIsProcessing(false);
      return;
    }

    try {
      const { token, error } = await stripe.createToken(cardElement);

      if (error) {
        setErrorMessage(error.message);
        setIsProcessing(false);
        return;
      }

      console.log('Token created successfully:', token);

      // Simulate payment success (you would send the token to the backend in production)
      setTimeout(() => {
        setPaymentSuccess(true);
        setIsProcessing(false);
        console.log('Payment successful!');
      }, 2000);
    } catch (err) {
      setErrorMessage('An error occurred while processing the payment.');
      console.error(err);
      setIsProcessing(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="payment-modal-title"
      aria-describedby="payment-modal-description"
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: 'white',
          maxWidth: 400,
          margin: 'auto',
          mt: '10%',
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Typography id="payment-modal-title" variant="h6" gutterBottom>
          Payment Details
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
            type="email"
          />
          <Box sx={{ mt: 2 }}>
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </Box>
          {errorMessage && (
            <Typography color="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
          )}

          {paymentSuccess && (
            <Typography color="success.main" sx={{ mt: 2 }}>
              Payment successful! 🎉
            </Typography>
          )}

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={onClose}
              variant="outlined"
              color="primary"
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isProcessing || !email || !stripe}
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
