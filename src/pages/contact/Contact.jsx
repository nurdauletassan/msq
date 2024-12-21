import React from 'react';

function Contact() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '30px',
        fontFamily: 'Arial, sans-serif',
        padding: '40px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '30px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div
            style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '18px',
              borderRadius: '50%',
              fontSize: '10px',
            }}
          >
            📞
          </div>
          <h3 style={{ marginLeft: '15px', fontSize: '20px', color: '#333' }}>
            <strong>Call To Us</strong>
          </h3>
        </div>
        <p st7yle={{ color: '#555', marginBottom: '10px' }}>We are available 9:00 – 22:00 AST, 7 days a week.</p>
        <p style={{ fontWeight: 'bold', color: '#333' }}>Phone: +7 775 778 93 71</p>
        <hr style={{ margin: '20px 0', border: '0.5px solid #ddd' }} />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
          <div
            style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '18px',
              borderRadius: '50%',
              fontSize: '10px',
            }}
          >
            📧
          </div>
          <h3 style={{ marginLeft: '15px', fontSize: '20px', color: '#333' }}>
            <strong>Write To Us</strong>
          </h3>
        </div>
        <p style={{ color: '#555', marginBottom: '10px' }}>Fill out our form and we will contact you within 9:00 – 22:00 AST hours.</p>
        <p style={{ color: '#333', marginBottom: '20px' }}>
          Emails: <strong>support@msq.kz</strong>
        </p>
      </div>

      <div
        style={{
          flex: 2,
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '30px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <input
              type="text"
              placeholder="Your Name *"
              style={{
                flex: 1,
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
                transition: 'font-size 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.fontSize = '18px')}
              onMouseOut={(e) => (e.target.style.fontSize = '16px')}
            />
            <input
              type="email"
              placeholder="Your Email *"
              style={{
                flex: 1,
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
                transition: 'font-size 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.fontSize = '18px')}
              onMouseOut={(e) => (e.target.style.fontSize = '16px')}
            />
            <input
              type="text"
              placeholder="Your Phone *"
              style={{
                flex: 1,
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
                transition: 'font-size 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.fontSize = '18px')}
              onMouseOut={(e) => (e.target.style.fontSize = '16px')}
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="6"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              resize: 'none',
              transition: 'font-size 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.fontSize = '18px')}
            onMouseOut={(e) => (e.target.style.fontSize = '16px')}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#333')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#000')}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
