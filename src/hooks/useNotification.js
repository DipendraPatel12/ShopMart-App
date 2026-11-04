import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  addNotification,
  markAsRead,
  markAllAsRead,
  removeNotification,
  clearNotifications,
} from '../redux/slices/notificationSlice';
import { AppNotification } from '../lib';

export const useNotification = () => {
  const dispatch = useDispatch();
  const { items, unreadCount } = useSelector(state => state.notification);

  const sendNotification = useCallback(
    async ({ title, body, data = {} }) => {
      // 1. Show OS native notification banner
      const notificationId = await AppNotification.display({
        title,
        body,
        data,
      });

      // 2. Save in Redux store for the in-app notification center
      dispatch(
        addNotification({
          id: notificationId || Date.now().toString(),
          title,
          body,
          data,
        }),
      );

      return notificationId;
    },
    [dispatch],
  );

  const markRead = useCallback(
    id => {
      dispatch(markAsRead(id));
    },
    [dispatch],
  );

  const markAllRead = useCallback(() => {
    dispatch(markAllAsRead());
  }, [dispatch]);

  const remove = useCallback(
    id => {
      dispatch(removeNotification(id));
    },
    [dispatch],
  );

  const clearAll = useCallback(() => {
    dispatch(clearNotifications());
  }, [dispatch]);

  return {
    items,
    unreadCount,
    sendNotification,
    markRead,
    markAllRead,
    remove,
    clearAll,
  };
};

export default useNotification;
