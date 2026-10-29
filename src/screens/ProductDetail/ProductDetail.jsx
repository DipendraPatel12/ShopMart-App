import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Loading from '../../components/Loading';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import useFavorites from '../../hooks/useFavorites';
import { AppImage } from '../../lib';
import { colors, moderateScale } from '../../constants';
import styles from './ProductDetail.styles';

const ProductDetail = ({ navigation, route }) => {
  const [showMore, setShowMore] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { currentProduct, loading, selectProduct } = useProducts();
  const { addToCart, cartSuccess } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const productId = route?.params?.productId || route?.params?.product?.id;

  useEffect(() => {
    if (productId) {
      selectProduct(productId);
    }
  }, [productId, selectProduct]);

  const decreaseProductQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const increaseProductQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  if (loading || !currentProduct?.id) return <Loading />;

  const isLiked = isFavorite(currentProduct.id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.imageContainer}>
          <AppImage
            source={currentProduct.image}
            style={styles.mainImage}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          style={styles.addToFavoriteBtnContainer}
          onPress={() => toggleFavorite(currentProduct)}
        >
          {isLiked ? (
            <FontAwesome5 name="heart" size={moderateScale(20)} color="red" solid />
          ) : (
            <FontAwesome5 name="heart" size={moderateScale(20)} color={colors.border} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.section}>
          <View style={styles.headerRow}>
            <Text style={styles.titleText}>
              {currentProduct?.title}
            </Text>
            <Text style={styles.priceLabel}>
              Price
            </Text>
          </View>
          <View style={styles.ratingPriceRow}>
            <Text style={styles.ratingText}>
              ⭐ {currentProduct?.rating?.rate || '4.5'}
            </Text>
            <Text style={styles.priceText}>
              ${currentProduct.price}
            </Text>
          </View>
        </View>

        {/* Color Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Color</Text>
          <View style={styles.colorOptionContainer}>
            <View style={styles.selectImageContainer}>
              <AppImage
                source={currentProduct.image}
                style={styles.thumbnailImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Size Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Size</Text>
          <View style={styles.sizeList}>
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <View key={size} style={styles.selectSizeBox}>
                <Text style={styles.sizeText}>{size}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quantity Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quantity</Text>
          <View style={styles.qtyRow}>
            <TouchableOpacity
              style={styles.decreaseBtn}
              onPress={decreaseProductQuantity}
            >
              <FontAwesome5 name="minus" size={moderateScale(12)} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.increaseBtn}
              onPress={increaseProductQuantity}
            >
              <FontAwesome5 name="plus" size={moderateScale(12)} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionMore}>
            {showMore
              ? currentProduct?.description
              : `${currentProduct?.description?.slice(0, 90)}... `}
            <Text
              style={styles.showMoreToggle}
              onPress={() => setShowMore(!showMore)}
            >
              {showMore ? ' show less' : ' show more'}
            </Text>
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionRowContainer}>
        <TouchableOpacity
          style={styles.addToCartBtn}
          onPress={() => addToCart(currentProduct, quantity)}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buyNowBtn}
          onPress={() => navigation.navigate('Success')}
        >
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      {cartSuccess && (
        <View style={styles.popUpCard}>
          <Text style={styles.popupText}>Product Added To Cart</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ProductDetail;
