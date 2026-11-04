import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { AppImage } from '../../lib';
import useNotification from '../../hooks/useNotification';
import styles from './Success.styles';

const Success = ({ navigation }) => {
  const { sendNotification } = useNotification();

  useEffect(() => {
    sendNotification({
      title: 'Order Placed Successfully! 🛍️',
      body: 'Thank you for shopping with us! Your order has been placed and is being processed.',
      data: { screen: 'Success' },
    });
  }, [sendNotification]);
  return (
    <View style={styles.mainContainer}>
      <AppImage
        source={require('../../assets/images/payment.jpg')}
        style={styles.illustration}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Thank You</Text>
        <Text style={styles.headingText}>For Shopping!!!</Text>
        <Text style={styles.subText}>
          Your Order has been placed
        </Text>
        <Text style={styles.subText}>successfully</Text>
      </View>

      <TouchableOpacity
        style={styles.continueBtn}
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate('MainTabs');
        }}
      >
        <Text style={styles.continueText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;
