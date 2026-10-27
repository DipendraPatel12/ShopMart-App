import { FlatList, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProductRender from '../../components/ProductRender';
import useFavorites from '../../hooks/useFavorites';
import useCart from '../../hooks/useCart';

const Favorite = () => {
  const { favoriteProducts } = useFavorites();
  const { cartSuccess } = useCart();

  if (favoriteProducts.length === 0) {
    return (
      <View style={styles.noFavoriteCard}>
        <FontAwesome5 name="heart" size={60} color="#CFD8DC" />
        <Text style={styles.emptyText}>No Favorites Yet!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteProducts}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        keyExtractor={item => item?.id?.toString() || Math.random().toString()}
        renderItem={({ item }) => <ProductRender item={item} />}
        initialNumToRender={6}
        maxToRenderPerBatch={8}
      />

      {cartSuccess && (
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
    alignItems: 'center',
    gap: 15,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#78909C',
  },
  cartSuccess: {
    backgroundColor: 'white',
    width: 250,
    padding: 12,
    position: 'absolute',
    borderRadius: 20,
    elevation: 10,
    bottom: 80,
    alignSelf: 'center',
  },
  cartSuccessText: {
    textAlign: 'center',
    fontWeight: '500',
  },
});
