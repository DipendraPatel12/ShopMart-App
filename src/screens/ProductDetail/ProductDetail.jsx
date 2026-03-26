import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { singleProduct } from '../../redux/slices/productSlice';
import Loading from '../../components/Loading';
import { resetSuccess, addFavorite } from '../../redux/slices/favoriteProduct';
import { addProduct, cartSuccessReset } from '../../redux/slices/cartSlice';

const ProductDetail = ({ navigation, route }) => {
  const [showMore, setShowMore] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { width } = Dimensions.get('screen');

  // console.warn('product', route.params);
  // console.warn('w', width);
  const { product, loading } = useSelector(state => state.product);
  const { success } = useSelector(state => state.favorite);
  const { cart_success } = useSelector(state => state.cart);
  console.warn(route?.params?.product?.id);

  useEffect(() => {
    const id = route?.params?.product?.id;

    if (id) {
      dispatch(singleProduct(id));
    }
  }, [route?.params]);

  const addToFavorite = () => {
    dispatch(
      addFavorite({
        id: product?.id,
        title: product?.title,
        images: product?.images,
        rating: 5.2,
        price: product?.price,
      }),
    );

    setTimeout(() => {
      dispatch(resetSuccess());
    }, 1000);
  };

  const handleAddToCart = item => {
    const data = {
      id: item?.id,
      title: item?.title,
      image: item?.images?.[0],
      price: item?.price,
      quantity,
    };
    dispatch(addProduct(data));

    setTimeout(() => {
      dispatch(cartSuccessReset());
    }, 500);
  };

  const decreaseProductQuantity = () => {
    if (quantity == 1) {
      return;
    }
    setQuantity(prev => prev - 1);
  };

  const increaseProductQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  if (loading) return <Loading></Loading>;

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          width: width,
          ...styles.carouselContainer,
        }}
      >
        <FlatList
          data={product?.images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ justifyContent: 'center' }}>
              <Image
                source={{ uri: item }}
                style={{ width: width, height: 250 }}
                resizeMode="contain"
              ></Image>
            </View>
          )}
        ></FlatList>

        <TouchableOpacity
          style={styles.addToFavoriteBtnContainer}
          onPress={() => addToFavorite(product)}
        >
          <FontAwesome5 name="heart" size={22} color={'#B0BEC5'} />
        </TouchableOpacity>
      </View>

      <View style={{ gap: 5 }}>
        <View style={{ padding: 20 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ color: 'grey', fontWeight: 500 }}>
              {product?.title?.slice(0, 30)}..
            </Text>
            <Text style={{ color: 'grey', fontWeight: 500 }}>Price</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ color: 'grey', fontWeight: 500 }}>⭐3.5</Text>
            <Text style={{ color: '#42A5F5', fontWeight: 900, fontSize: 18 }}>
              ${product.price}
            </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <Text style={{ fontWeight: 500 }}>Select Color</Text>

          <FlatList
            data={product.images}
            horizontal
            keyExtractor={index => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <View style={styles.selectImageContainer}>
                  <Image
                    source={{ uri: `${item}` }}
                    style={{ width: 30, height: 30 }}
                  ></Image>
                </View>
              </View>
            )}
          ></FlatList>
        </View>

        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <Text style={{ fontWeight: 500 }}>Select Size</Text>

          <View style={{ flexDirection: 'row', gap: 20 }}>
            <View style={styles.selectSizeBox}>
              <Text style={styles.sizeText}>S</Text>
            </View>
            <View style={styles.selectSizeBox}>
              <Text style={styles.sizeText}>M</Text>
            </View>
            <View style={styles.selectSizeBox}>
              <Text style={styles.sizeText}>L</Text>
            </View>
            <View style={styles.selectSizeBox}>
              <Text style={styles.sizeText}>XL</Text>
            </View>
            <View style={styles.selectSizeBox}>
              <Text style={styles.sizeText}>XXL</Text>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <Text style={{ fontWeight: 500 }}>Quantity</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity
              style={styles.decreaseBtn}
              onPress={() => decreaseProductQuantity()}
            >
              <FontAwesome5 name="minus" size={17} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#CFD8DC',
                borderRadius: 10,

                textAlignVertical: 'center',
                textAlign: 'center',
              }}
            >
              {quantity}
            </Text>
            <TouchableOpacity
              style={styles.increaseBtn}
              onPress={() => increaseProductQuantity()}
            >
              <FontAwesome5 name="plus" size={17} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <Text style={{ color: 'black', fontWeight: 500 }}>Description</Text>
          <Text style={styles.descriptionMore}>
            {showMore
              ? `${product?.description} `
              : `${product?.description?.slice(0, 90)}....   `}

            {showMore === false ? (
              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  setShowMore(!showMore);
                }}
              >
                <Text
                  style={{
                    color: 'grey',
                    fontWeight: 800,
                  }}
                >
                  show more
                </Text>
              </TouchableOpacity>
            ) : null}
            {showMore ? (
              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  setShowMore(!showMore);
                }}
              >
                <Text style={styles.showLessText}>show less</Text>
              </TouchableOpacity>
            ) : null}
          </Text>
        </View>
      </View>

      <View style={styles.actionRowContainer}>
        <TouchableOpacity
          style={{
            width: width / 2.5,
            ...styles.actionBtn,
          }}
          onPress={() => handleAddToCart(product)}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width / 2.5,
            backgroundColor: '#42A5F5',
            ...styles.actionBtn,
          }}
          onPress={() => {
            navigation.navigate('Success');
          }}
        >
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      {success && (
        <View style={styles.popUpCard}>
          <Text style={styles.popupText}>Product Added To addFavorite</Text>
        </View>
      )}

      {cart_success && (
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
    backgroundColor: '#CFD8DC',
    height: 280,
    position: 'relative',
  },
  addToFavoriteBtnContainer: {
    position: 'absolute',
    top: 20,
    right: 40,
    backgroundColor: '#ECEFF1',
    padding: 5,
    borderRadius: 5,
    elevation: 5,
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
    fontSize: 15,
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
  descriptionMore: {
    color: 'grey',
    fontWeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showLessText: {
    textAlignVertical: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'grey',
    fontWeight: 800,
  },
  actionRowContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionBtn: {
    height: 50,
    borderWidth: 1,
    borderColor: '#42A5F5',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#42A5F5',
    fontWeight: 500,
    fontSize: 18,
  },
  buyNowText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 18,
  },
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
  popupText: {
    textAlign: 'center',
    fontWeight: 400,
  },
});
