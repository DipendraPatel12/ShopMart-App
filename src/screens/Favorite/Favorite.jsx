import { FlatList, View } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';

import ProductRender from '../../components/ProductRender';

const Favorite = ({ navigation }) => {
  const [products, setProduct] = useState([]);
  // const productsArray = [
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  //   { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  // ];

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
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductRender item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Favorite;
