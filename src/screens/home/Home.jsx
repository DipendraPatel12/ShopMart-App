import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import Slider from '../../components/slider/Slider';
import SliderSkeleton from '../../components/sliderSkeleton/SliderSkeleton';
import Category from '../../components/category/Category';
import CategorySkeleton from '../../components/categorySkeleton/CategorySkeleton';
import ProductRender from '../../components/productRender/ProductRender';
import ProductSkeleton from '../../components/productSkeleton/ProductSkeleton';
import useProducts from '../../hooks/useProducts';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import styles from './Home.styles';

const SKELETON_ITEMS = [1, 2, 3, 4, 5, 6];

const Home = () => {
  const { products, loading, error, fetchProducts } = useProducts();
  const { fetchProfile } = useAuth();
  const { cartSuccess } = useCart();

  useEffect(() => {
    fetchProfile();
    fetchProducts();
  }, [fetchProfile, fetchProducts]);

  const isInitialLoading = loading || (products.length === 0 && !error);

  return (
    <View style={styles.container}>
      <FlatList
        data={isInitialLoading ? SKELETON_ITEMS : products}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={item =>
          isInitialLoading ? `skeleton-${item}` : item.id.toString()
        }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          isInitialLoading ? (
            <>
              <SliderSkeleton />
              <CategorySkeleton />
            </>
          ) : (
            <>
              <Slider />
              <Category />
            </>
          )
        }
        renderItem={({ item }) =>
          isInitialLoading ? <ProductSkeleton /> : <ProductRender item={item} />
        }
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
