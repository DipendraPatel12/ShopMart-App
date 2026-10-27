import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Loading from '../../components/Loading';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import useFavorites from '../../hooks/useFavorites';
import { AppImage } from '../../lib';

const ProductDetail = ({ navigation, route }) => {
  const [showMore, setShowMore] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { width } = Dimensions.get('window');
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
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          width: width,
          ...styles.carouselContainer,
        }}
      >
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
            <FontAwesome5 name="heart" size={22} color="red" solid />
          ) : (
            <FontAwesome5 name="heart" size={22} color="#B0BEC5" />
          )}
        </TouchableOpacity>
      </View>

      <View style={{ gap: 15, paddingVertical: 10 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ color: 'grey', fontWeight: '500', flex: 1 }}>
              {currentProduct?.title}
            </Text>
            <Text style={{ color: 'grey', fontWeight: '500', marginLeft: 10 }}>
              Price
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}
          >
            <Text style={{ color: 'grey', fontWeight: '500' }}>
              ⭐ {currentProduct?.rating?.rate || '4.5'}
            </Text>
            <Text style={{ color: '#42A5F5', fontWeight: 'bold', fontSize: 18 }}>
              ${currentProduct.price}
            </Text>
          </View>
        </View>

        {/* Color Selection */}
        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <Text style={{ fontWeight: '500' }}>Select Color</Text>
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <View style={styles.selectImageContainer}>
              <AppImage
                source={currentProduct.image}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Size Selection */}
        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <Text style={{ fontWeight: '500' }}>Select Size</Text>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <View key={size} style={styles.selectSizeBox}>
                <Text style={styles.sizeText}>{size}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quantity Selection */}
        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <Text style={{ fontWeight: '500' }}>Quantity</Text>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.decreaseBtn}
              onPress={decreaseProductQuantity}
            >
              <FontAwesome5 name="minus" size={14} color="white" />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.increaseBtn}
              onPress={increaseProductQuantity}
            >
              <FontAwesome5 name="plus" size={14} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <Text style={{ color: 'black', fontWeight: '500' }}>Description</Text>
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
          style={[styles.actionBtn, { width: width / 2.3 }]}
          onPress={() => addToCart(currentProduct, quantity)}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.actionBtn,
            { width: width / 2.3, backgroundColor: '#42A5F5' },
          ]}
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

const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEFF1',
    height: 300,
    position: 'relative',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '100%',
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  addToFavoriteBtnContainer: {
    position: 'absolute',
    top: 20,
    right: 40,
    backgroundColor: '#ECEFF1',
    padding: 8,
    borderRadius: 8,
    elevation: 4,
  },
  selectImageContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#CFD8DC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectSizeBox: {
    width: 40,
    height: 40,
    backgroundColor: '#CFD8DC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    color: '#78909C',
    fontSize: 14,
    fontWeight: '600',
  },
  decreaseBtn: {
    width: 35,
    height: 35,
    backgroundColor: '#CFD8DC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  increaseBtn: {
    width: 35,
    height: 35,
    backgroundColor: '#64B5F6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    width: 35,
    height: 35,
    backgroundColor: '#CFD8DC',
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: '600',
  },
  descriptionMore: {
    color: 'grey',
    fontWeight: '400',
    lineHeight: 20,
  },
  showMoreToggle: {
    color: '#1E88E5',
    fontWeight: '700',
  },
  actionRowContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  actionBtn: {
    height: 50,
    borderWidth: 1,
    borderColor: '#42A5F5',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#42A5F5',
    fontWeight: '600',
    fontSize: 16,
  },
  buyNowText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  popUpCard: {
    backgroundColor: 'white',
    width: 250,
    padding: 12,
    position: 'absolute',
    borderRadius: 20,
    elevation: 10,
    bottom: 80,
    alignSelf: 'center',
  },
  popupText: {
    textAlign: 'center',
    fontWeight: '500',
  },
});
