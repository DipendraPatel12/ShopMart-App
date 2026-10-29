import { FlatList, View, Text } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProductRender from '../../components/ProductRender';
import useFavorites from '../../hooks/useFavorites';
import useCart from '../../hooks/useCart';
import { colors, moderateScale } from '../../constants';
import styles from './Favorite.styles';

const Favorite = () => {
  const { favoriteProducts } = useFavorites();
  const { cartSuccess } = useCart();

  if (favoriteProducts.length === 0) {
    return (
      <View style={styles.noFavoriteCard}>
        <FontAwesome5 name="heart" size={moderateScale(60)} color={colors.border} />
        <Text style={styles.emptyText}>No Favorites Yet!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteProducts}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
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
