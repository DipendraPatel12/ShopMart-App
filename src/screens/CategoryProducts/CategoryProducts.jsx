import { FlatList, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import ProductRender from '../../components/ProductRender';
import Loading from '../../components/Loading';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import styles from './CategoryProducts.styles';

const CategoryProducts = ({ route }) => {
  const category = route?.params?.categoryName;
  const { categoryProduct, loading, filterByCategory } = useProducts();
  const { cartSuccess } = useCart();

  useEffect(() => {
    if (category) {
      filterByCategory(category);
    }
  }, [category, filterByCategory]);

  if (loading) return <Loading />;

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
        renderItem={({ item }) => <ProductRender item={item} />}
        initialNumToRender={6}
        maxToRenderPerBatch={8}
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
