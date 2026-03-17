import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { useEffect } from 'react';

import styles from './CategoryProductsStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProduct } from '../../redux/slices/productSlice';
import ProductRender from '../../components/ProductRender';
import Loading from '../../components/Loading';
const CategoryProducts = ({ route }) => {
  const dispatch = useDispatch();
  const id = route?.params?.category?.id;

  useEffect(() => {
    dispatch(getCategoryProduct(id));
  }, [id]);
  const { loading, categoryProduct } = useSelector(state => state.product);

  if (loading) return <Loading></Loading>;
  console.warn(categoryProduct);
  return (
    <View style={styles.container}>
      <FlatList
        data={categoryProduct}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductRender item={item} />}
      />
    </View>
  );
};

export default CategoryProducts;
