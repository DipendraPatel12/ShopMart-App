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

const ProductDetail = ({ navigation, route }) => {
  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();

  const { width } = Dimensions.get('window');

  // console.warn('product', route.params);
  // console.warn('w', width);
  const { product, loading } = useSelector(state => state.product);
  console.warn(route?.params?.product?.id);

  useEffect(() => {
    const id = route?.params?.product?.id;

    if (id) {
      dispatch(singleProduct(id));
    }
  }, [route?.params]);

  if (loading) return <Loading></Loading>;

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#CFD8DC',
          width: width,
          height: 280,
          position: 'relative',
        }}
      >
        <Image
          source={{ uri: `${product?.images?.[0]}` }}
          style={{ width: width - 10, height: 200 }}
          resizeMode="contain"
        ></Image>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 20,
            right: 40,
            backgroundColor: '#ECEFF1',
            padding: 5,
            borderRadius: 5,
            elevation: 5,
          }}
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
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#CFD8DC',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
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
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#CFD8DC',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#78909C', fontSize: 15 }}>S</Text>
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#CFD8DC',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#78909C', fontSize: 15 }}>M</Text>
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#CFD8DC',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#78909C', fontSize: 15 }}>L</Text>
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#CFD8DC',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#78909C', fontSize: 15 }}>XL</Text>
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#CFD8DC',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#78909C', fontSize: 15 }}>XXL</Text>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <Text style={{ fontWeight: 500 }}>Quantity</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#CFD8DC',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
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
              01
            </Text>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#64B5F6',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FontAwesome5 name="plus" size={17} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, gap: 5 }}>
          <Text style={{ color: 'black', fontWeight: 500 }}>Description</Text>
          <Text
            style={{
              color: 'grey',
              fontWeight: 500,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
                <Text
                  style={{
                    textAlignVertical: 'center',
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    color: 'grey',
                    fontWeight: 800,
                  }}
                >
                  show less
                </Text>
              </TouchableOpacity>
            ) : null}
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            width: width / 2.5,
            height: 50,
            borderWidth: 1,
            borderColor: '#42A5F5',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#42A5F5', fontWeight: 500, fontSize: 18 }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width / 2.5,
            height: 50,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#42A5F5',
            elevation: 1,
          }}
          onPress={() => {
            navigation.navigate('Success');
          }}
        >
          <Text style={{ color: 'white', fontWeight: 500, fontSize: 18 }}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
