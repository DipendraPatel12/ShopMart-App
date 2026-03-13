import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import Category from '../../components/Category';
import ProductRender from '../../components/ProductRender';

const Home = ({ navigation }) => {
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
        ListHeaderComponent={
          <>
            <Slider />
            <Category />
          </>
        }
        renderItem={({ item }) => (
          <ProductRender item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
});
