import { FlatList, View } from 'react-native';
import React from 'react';
import { useEffect } from 'react';

import ProductRender from '../../components/ProductRender';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productSlice';
import Loading from '../../components/Loading';

const Favorite = ({ navigation }) => {
  const dispatch = useDispatch();
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
    dispatch(getProducts());
  }, []);

  const { loading, error, products } = useSelector(state => state.product);

  if (loading) return <Loading></Loading>;
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductRender item={item} />}
      />
    </View>
  );
};

export default Favorite;
