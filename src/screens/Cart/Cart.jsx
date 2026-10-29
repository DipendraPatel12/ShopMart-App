import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useCart from '../../hooks/useCart';
import { AppImage } from '../../lib';
import { colors, moderateScale } from '../../constants';
import styles from './Cart.styles';

const Cart = ({ navigation }) => {
  const { cart, totalItems, totalPrice, increaseQty, decreaseQty } = useCart();

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <FontAwesome5 name="shopping-bag" size={moderateScale(60)} color={colors.border} />
        <Text style={styles.emptyText}>Your Cart is Empty!</Text>
      </View>
    );
  }

  const shippingCharges = 10;
  const totalTax = 45;
  const grandTotal = (totalPrice + shippingCharges + totalTax).toFixed(2);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        <FlatList
          data={cart}
          keyExtractor={item => item?.id?.toString() || Math.random().toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <View style={styles.cardContainer}>
                <View style={styles.cardImageContainer}>
                  <AppImage
                    source={item?.image}
                    style={styles.productImage}
                    resizeMode="contain"
                  />
                </View>

                <View style={styles.cardDetailContainer}>
                  <View style={styles.productInfo}>
                    <Text style={styles.productTitle} numberOfLines={1}>
                      {item?.title}
                    </Text>
                    <Text style={styles.productQuantity}>
                      Quantity: {item?.quantity}
                    </Text>
                    <Text style={styles.productPrice}>
                      ${item?.total?.toFixed(2)}
                    </Text>
                  </View>

                  <View style={styles.qtyControlContainer}>
                    <TouchableOpacity
                      style={styles.increaseBtn}
                      onPress={() => increaseQty(item?.id)}
                    >
                      <FontAwesome5 name="plus" size={moderateScale(12)} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.decreaseBtn}
                      onPress={() => decreaseQty(item?.id)}
                    >
                      <FontAwesome5 name="minus" size={moderateScale(12)} color={colors.white} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      {/* Order Summary */}
      <View style={styles.orderDetailContainer}>
        <Text style={styles.orderTitle}>Order Details</Text>
        <View style={styles.orderRow}>
          <View>
            <Text style={styles.orderDetailText}>Total items</Text>
            <Text style={styles.orderDetailText}>Shipping Charges</Text>
            <Text style={styles.orderDetailText}>Total tax</Text>
            <Text style={styles.grandTotalText}>Grand Total</Text>
          </View>
          <View style={styles.orderSummaryValues}>
            <Text style={styles.orderDetailText}>{totalItems || 0}</Text>
            <Text style={styles.orderDetailText}>${shippingCharges}</Text>
            <Text style={styles.orderDetailText}>${totalTax}</Text>
            <Text style={styles.grandTotalText}>${grandTotal}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.paymentBtn}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Success')}
      >
        <Text style={styles.paymentBtnText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
