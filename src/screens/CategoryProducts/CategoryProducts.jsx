import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './CategoryProductsStyles';
const CategoryProducts = ({ navigation }) => {
  const [products, setProduct] = useState([]);
  //   const productsArray = [
  //     { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //     { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //     { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //     { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //     { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //     { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //     { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   ];

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json(); 
        console.warn('data', data);
        setProduct(data);
      } catch (error) {
        console.warn(error);
      }
    };

    getAllProducts();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.productMainContainer}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <TouchableOpacity
                style={styles.productCard}
                onPress={() => {
                  navigation.navigate('ProductDetail', { product: item });
                }}
              >
                <View style={styles.productInnerCard}>
                  <Image
                    source={{ uri: `${item?.image}` }}
                    style={{ width: 120, height: 120 }}
                    resizeMode="cover"
                  ></Image>
                </View>
                <View style={styles.productTextContainer}>
                  <Text style={styles.productText}>
                    {item.title.slice(0, 10)}
                  </Text>
                  <Text style={{ color: '#78909C', fontWeight: 500 }}>
                    {item.rating.rate}
                  </Text>
                </View>

                <View style={styles.productPriceAndAddbtn}>
                  <Text style={{ fontSize: 13, fontWeight: 500 }}>
                    ${item.price}
                  </Text>
                  <TouchableOpacity style={styles.addToCartBtn}>
                    <FontAwesome5 name="plus" size={10} color="white" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default CategoryProducts;
