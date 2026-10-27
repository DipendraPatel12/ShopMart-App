import { FlatList, Text, View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import ProductRender from '../../components/ProductRender';
import Loading from '../../components/Loading';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

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
        <Text style={{ alignSelf: 'center', color: 'grey', fontSize: 16 }}>
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
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  noDataCard: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  popUpCard: {
    backgroundColor: 'white',
    width: 250,
    padding: 12,
    position: 'absolute',
    borderRadius: 20,
    elevation: 10,
    bottom: 80,
    alignSelf: 'center',
  },
  popUpText: {
    textAlign: 'center',
    fontWeight: '500',
  },
});
