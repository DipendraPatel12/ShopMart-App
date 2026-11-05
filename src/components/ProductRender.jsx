import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useCart from '../hooks/useCart';
import useFavorites from '../hooks/useFavorites';
import { colors, scale } from '../constants';
import { AppImage, AppIcon } from '../lib';
import styles from './ProductRender.styles';

const ProductRender = ({ item }) => {
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const isLiked = isFavorite(item?.id);

  return (
    <View style={styles.productContainer}>
      <TouchableOpacity
        style={styles.productCard}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('ProductDetail', {
            productId: item?.id,
            product: item,
          });
        }}
      >
        <View style={styles.favoriteButtonPosition}>
          <TouchableOpacity
            style={styles.addToFavoriteBtnContainer}
            onPress={() => toggleFavorite(item)}
          >
            {isLiked ? (
              <AppIcon
                name="heart"
                size={scale(16)}
                color={colors.heartRed}
                solid
              />
            ) : (
              <AppIcon
                name="heart"
                size={scale(16)}
                color={colors.border}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.productInnerCard}>
          <AppImage
            source={item?.image}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.productTextContainer}>
          <Text style={styles.productText} numberOfLines={1}>
            {item?.title}
          </Text>
          <Text style={styles.ratingText}>
            ⭐ {item?.rating?.rate || '4.0'}
          </Text>
        </View>

        <View style={styles.productPriceAndAddbtn}>
          <Text style={styles.priceText}>
            ${item?.price}
          </Text>
          <TouchableOpacity
            style={styles.addToCartBtn}
            onPress={() => addToCart(item)}
          >
            <AppIcon name="plus" size={scale(10)} color={colors.white} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ProductRender);
