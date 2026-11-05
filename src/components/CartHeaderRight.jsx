import React from 'react';
import { TouchableOpacity } from 'react-native';
import useCart from '../hooks/useCart';
import { AppIcon } from '../lib';
import { colors, moderateScale } from '../constants';
import styles from './CartHeaderRight.styles';

const CartHeaderRight = () => {
  const { clearCartItems } = useCart();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={clearCartItems}
    >
      <AppIcon
        name="trash"
        size={moderateScale(16)}
        color={colors.textGrey}
      />
    </TouchableOpacity>
  );
};

export default CartHeaderRight;
