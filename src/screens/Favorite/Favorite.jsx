import { View, Text } from 'react-native';
import React from 'react';
import ProductRender from '../../components/ProductRender';
import useFavorites from '../../hooks/useFavorites';
import useCart from '../../hooks/useCart';
import { AppIcon, AppList } from '../../lib';
import { colors, moderateScale } from '../../constants';
import styles from './Favorite.styles';

const Favorite = () => {
  const { favoriteProducts } = useFavorites();
  const { cartSuccess } = useCart();

  if (favoriteProducts.length === 0) {
    return (
      <View style={styles.noFavoriteCard}>
        <AppIcon name="heart" size={moderateScale(60)} color={colors.border} />
        <Text style={styles.emptyText}>No Favorites Yet!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppList
        data={favoriteProducts}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={item => String(item.id)}
        estimatedItemSize={240}
        renderItem={({ item }) => <ProductRender item={item} />}
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
