import { Text, View } from 'react-native';
import React from 'react';
import styles from './Notification.styles';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.subtitle}>You have no new notifications.</Text>
    </View>
  );
};

export default Notification;
