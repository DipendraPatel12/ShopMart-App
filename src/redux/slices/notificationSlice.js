import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  unreadCount: 0,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      const { id, title, body, data = {} } = action.payload;
      const newNotification = {
        id: id || Date.now().toString(),
        title,
        body,
        data,
        date: new Date().toISOString(),
        isRead: false,
      };
      state.items.unshift(newNotification);
      state.unreadCount += 1;
    },

    markAsRead: (state, action) => {
      const notificationId = action.payload;
      const item = state.items.find(n => n.id === notificationId);
      if (item && !item.isRead) {
        item.isRead = true;
        state.unreadCount = Math.max(0, state.unreadCount - 1);
      }
    },

    markAllAsRead: state => {
      state.items.forEach(n => {
        n.isRead = true;
      });
      state.unreadCount = 0;
    },

    removeNotification: (state, action) => {
      const notificationId = action.payload;
      const index = state.items.findIndex(n => n.id === notificationId);
      if (index !== -1) {
        if (!state.items[index].isRead) {
          state.unreadCount = Math.max(0, state.unreadCount - 1);
        }
        state.items.splice(index, 1);
      }
    },

    clearNotifications: state => {
      state.items = [];
      state.unreadCount = 0;
    },
  },
});

export const {
  addNotification,
  markAsRead,
  markAllAsRead,
  removeNotification,
  clearNotifications,
} = notificationSlice.actions;

export default notificationSlice.reducer;
