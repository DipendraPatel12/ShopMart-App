import { FlatList, StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import Category from '../../components/Category';
import ProductRender from '../../components/ProductRender';
import Loading from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts } from '../../redux/slices/productSlice';
import { getUserProfile } from '../../redux/slices/authSlice';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const { loading, products } = useSelector(state => state.product);
  const { cart_success } = useSelector(state => state.cart);
  // const productsArray = [
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  // ];

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  if (loading) return <Loading></Loading>;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <>
            <Slider />
            <Category />
          </>
        }
        renderItem={({ item }) => <ProductRender item={item} />}
      />
      {cart_success && (
        <View style={styles.popUpCard}>
          <Text style={styles.popUpText}>Product Added To Cart</Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', position: 'relative' },
  popUpCard: {
    backgroundColor: 'white',
    width: 250,
    padding: 10,
    position: 'absolute',
    borderRadius: 20,
    elevation: 10,
    bottom: 80,
    left: 60,
  },
  popUpText: {
    textAlign: 'center',
    fontWeight: 400,
  },
});
