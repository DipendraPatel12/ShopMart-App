import { FlatList, View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Slider from '../../components/Slider';
import Category from '../../components/Category';
import ProductRender from '../../components/ProductRender';
import Loading from '../../components/Loading';
import useProducts from '../../hooks/useProducts';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
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
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <>
            <Slider />
            <Category />
          </>
        }
        renderItem={({ item }) => <ProductRender item={item} />}
        initialNumToRender={6}
        maxToRenderPerBatch={8}
        windowSize={5}
        removeClippedSubviews={true}
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
