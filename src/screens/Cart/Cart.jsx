import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useCart from '../../hooks/useCart';
import { AppImage } from '../../lib';

const Cart = ({ navigation }) => {
  const { cart, totalItems, totalPrice, increaseQty, decreaseQty } = useCart();
  const { width } = Dimensions.get('window');

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <FontAwesome5 name="shopping-bag" size={60} color="#CFD8DC" />
        <Text style={styles.emptyText}>Your Cart is Empty!</Text>
      </View>
    );
  }

  const shippingCharges = 10;
  const totalTax = 45;
  const grandTotal = (totalPrice + shippingCharges + totalTax).toFixed(2);

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1 }}>
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
                    style={{ width: 70, height: 70, borderRadius: 10 }}
                    resizeMode="contain"
                  />
                </View>

                <View style={styles.cardDetailContainer}>
                  <View style={{ justifyContent: 'center', gap: 4, flex: 1 }}>
                    <Text
                      style={{ fontWeight: '600', fontSize: 14 }}
                      numberOfLines={1}
                    >
                      {item?.title}
                    </Text>
                    <Text style={{ color: 'grey', fontWeight: '500' }}>
                      Quantity: {item?.quantity}
                    </Text>
                    <Text style={{ fontWeight: 'bold', color: '#1E88E5' }}>
                      ${item?.total?.toFixed(2)}
                    </Text>
                  </View>

                  <View style={styles.qtyControlContainer}>
                    <TouchableOpacity
                      style={styles.increaseBtn}
                      onPress={() => increaseQty(item?.id)}
                    >
                      <FontAwesome5 name="plus" size={14} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.decreaseBtn}
                      onPress={() => decreaseQty(item?.id)}
                    >
                      <FontAwesome5 name="minus" size={14} color="white" />
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
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.orderDetailText}>{totalItems || 0}</Text>
            <Text style={styles.orderDetailText}>${shippingCharges}</Text>
            <Text style={styles.orderDetailText}>${totalTax}</Text>
            <Text style={styles.grandTotalText}>${grandTotal}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.paymentBtn, { width: width - 40 }]}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Success')}
      >
        <Text style={styles.paymentBtnText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#78909C',
  },
  cardWrapper: {
    marginBottom: 15,
  },
  cardContainer: {
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    flexDirection: 'row',
    gap: 12,
  },
  cardImageContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#ECEFF1',
    alignItems: 'center',
    borderRadius: 12,
  },
  cardDetailContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  qtyControlContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  increaseBtn: {
    width: 28,
    height: 28,
    backgroundColor: '#64B5F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decreaseBtn: {
    width: 28,
    height: 28,
    backgroundColor: '#CFD8DC',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderDetailContainer: {
    borderWidth: 1.5,
    borderRadius: 16,
    borderStyle: 'dashed',
    borderColor: '#42A5F5',
    backgroundColor: '#E3F2FD',
    padding: 16,
    marginVertical: 15,
    gap: 10,
  },
  orderTitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    color: '#1E88E5',
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderDetailText: {
    color: '#78909C',
    fontWeight: '500',
    marginBottom: 4,
  },
  grandTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263238',
    marginTop: 4,
  },
  paymentBtn: {
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    alignSelf: 'center',
    paddingVertical: 16,
    marginBottom: 10,
  },
  paymentBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
