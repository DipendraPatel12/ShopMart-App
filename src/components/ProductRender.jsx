import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, cartSuccessReset } from '../redux/slices/cartSlice';
import Loading from './Loading';

const ProductRender = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.product);

  const handleAddToCart = item => {
    const data = {
      id: item?.id,
      title: item?.title,
      image: item?.images?.[0],
      price: item?.price,
    };
    dispatch(addProduct(data));

    setTimeout(() => {
      dispatch(cartSuccessReset(false));
    }, 1000);
  };

  if (loading) return <Loading></Loading>;

  return (
    <View style={styles.productContainer}>
      <TouchableOpacity
        style={styles.productCard}
        onPress={() => {
          navigation.navigate('ProductDetail', { product: item });
        }}
      >
        <View style={styles.productInnerCard}>
          <Image
            source={{ uri: `${item?.images?.[0]}` }}
            style={{ width: 120, height: 120 }}
            resizeMode="cover"
          ></Image>
        </View>
        <View style={styles.productTextContainer}>
          <Text style={styles.productText}>{item?.title?.slice(0, 10)}</Text>
          <Text style={{ color: '#78909C', fontWeight: 500 }}>5.2</Text>
        </View>

        <View style={styles.productPriceAndAddbtn}>
          <Text style={{ fontSize: 13, fontWeight: 500 }}>${item?.price}</Text>
          <TouchableOpacity
            style={styles.addToCartBtn}
            onPress={() => {
              handleAddToCart(item);
            }}
          >
            <FontAwesome5 name="plus" size={10} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <View></View>
    </View>
  );
};

export default ProductRender;

const styles = StyleSheet.create({
  productContainer: { marginTop: 20 },
  productCard: {
    width: 170,
    height: 230,
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 20,
    alignItems: 'center',
  },
  productInnerCard: {
    width: 140,
    height: 140,
    backgroundColor: '#ECEFF1',
    marginTop: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  productTextContainer: {
    width: '90%',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  productText: { color: '#78909C', fontWeight: 500 },
  productPriceAndAddbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 10,

    paddingRight: 10,
  },
  addToCartBtn: {
    backgroundColor: '#42A5F5',
    padding: 10,
    borderRadius: 50,
    elevation: 1,
    width: 30,
  },
});
