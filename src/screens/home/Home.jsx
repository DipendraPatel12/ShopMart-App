import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Slider from '../../components/slider/Slider';
import Category from '../../components/category/Category';
import ProductRender from '../../components/productRender/ProductRender';
import Loading from '../../components/loading/Loading';
import useProducts from '../../hooks/useProducts';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { AppList } from '../../lib';
import styles from './Home.styles';

const Home = () => {
  const { products, loading, fetchProducts } = useProducts();
  const { fetchProfile } = useAuth();
  const { cartSuccess } = useCart();

  useEffect(() => {
    fetchProfile();
    fetchProducts();
  }, [fetchProfile, fetchProducts]);

  if (loading && products.length === 0) return <Loading />;

  return (
    <View style={styles.container}>
      <AppList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={240}
        ListHeaderComponent={
          <>
            <Slider />
            <Category />
          </>
        }
        renderItem={({ item }) => <ProductRender item={item} />}
      />

      {cartSuccess && (
        <View style={styles.popUpCard}>
          <Text style={styles.popUpText}>Product Added To Cart</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
