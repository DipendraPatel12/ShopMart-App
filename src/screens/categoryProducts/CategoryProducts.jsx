import { Text, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import ProductRender from '../../components/productRender/ProductRender';
import ProductSkeleton from '../../components/productSkeleton/ProductSkeleton';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import styles from './CategoryProducts.styles';

const SKELETON_ITEMS = [1, 2, 3, 4, 5, 6];

const CategoryProducts = ({ route }) => {
  const category = route?.params?.categoryName;
  const { categoryProduct, loading, filterByCategory } = useProducts();
  const { cartSuccess } = useCart();

  useEffect(() => {
    if (category) {
      filterByCategory(category);
    }
  }, [category, filterByCategory]);

  const isInitialLoading = loading && categoryProduct.length === 0;

  if (isInitialLoading) {
    return (
      <View style={styles.container}>
        <FlatList
          data={SKELETON_ITEMS}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          keyExtractor={item => `cat-skeleton-${item}`}
          showsVerticalScrollIndicator={false}
          renderItem={() => <ProductSkeleton />}
        />
      </View>
    );
  }

  if (categoryProduct.length === 0) {
    return (
      <View style={styles.noDataCard}>
        <Text style={styles.noDataText}>
          No Products Available in this Category!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryProduct}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
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

export default CategoryProducts;
