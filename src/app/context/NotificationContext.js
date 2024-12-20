import React, { createContext, useContext, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Создаем контекст
const NotificationContext = createContext();

// Провайдер уведомлений
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Добавить уведомление
  const addNotification = (message, severity = 'info', duration = 3000) => {
    const id = Math.random().toString(36).substring(2, 9); // Уникальный ID для уведомления
    setNotifications((prev) => [...prev, { id, message, severity, duration }]);

    // Удаляем уведомление через duration
    setTimeout(() => {
      removeNotification(id);
    }, duration);
  };

  // Удалить уведомление
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}

      {/* Отображение уведомлений */}
      {notifications.map((notification) => (
        <Snackbar
          key={notification.id}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={true}
        >
          <Alert severity={notification.severity} sx={{ width: '100%' }}>
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </NotificationContext.Provider>
  );
};

// Хук для использования уведомлений
export const useNotification = () => {
  return useContext(NotificationContext);
};
