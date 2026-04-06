import { FlatList, View, Text, StyleSheet } from 'react-native';
import React from 'react';

import ProductRender from '../../components/ProductRender';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const { favoriteProducts } = useSelector(state => state.favorite);
  const { cart_success } = useSelector(state => state.cart);
  console.warn(favoriteProducts);
  if (favoriteProducts.length === 0)
    return (
      <View style={styles.noFavoriteCard}>
        <Text style={{ alignSelf: 'center' }}> No Favorites !</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteProducts}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        keyExtractor={item => item?.id?.toString()}
        renderItem={({ item }) => <ProductRender item={item} />}
      />

      {cart_success && (
        <View style={styles.cartSuccess}>
          <Text style={styles.cartSuccessText}>Product Added To Cart</Text>
        </View>
      )}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  noFavoriteCard: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  cartSuccess: {
    backgroundColor: 'white',
    width: 250,
    padding: 10,
    position: 'absolute',
    borderRadius: 20,
    elevation: 10,
    bottom: 80,
    left: 60,
  },
  cartSuccessText: {
    textAlign: 'center',
    fontWeight: 400,
  },
});
