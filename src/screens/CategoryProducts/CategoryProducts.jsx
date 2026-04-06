import { FlatList, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryProduct,
  getCategoryRelatedData,
} from '../../redux/slices/productSlice';
import ProductRender from '../../components/ProductRender';
import Loading from '../../components/Loading';
const CategoryProducts = ({ route }) => {
  const dispatch = useDispatch();
  const category = route?.params?.categoryName;

  useEffect(() => {
    dispatch(getCategoryRelatedData(category));
  }, [category]);
  const { loading, categoryProduct } = useSelector(state => state.product);
  const { cart_success } = useSelector(state => state.cart);
  if (loading) return <Loading></Loading>;
  console.warn(categoryProduct);

  if (categoryProduct.length === 0) {
    return (
      <View style={styles.noDataCard}>
        <Text style={{ alignSelf: 'center' }}> No Data Available !</Text>
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
      />
      {cart_success && (
        <View style={styles.popUpCard}>
          <Text style={styles.popUpText}>Product Added To Cart</Text>
        </View>
      )}
    </View>
  );
};

export default CategoryProducts;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  sliderContainer: {
    width: 393,
    height: 200,
    padding: 20,
    borderRadius: 50,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sliderCard: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 350,
    height: 160,
    marginRight: 3,
  },
  sliderImageStyle: { width: 350, height: 160, borderRadius: 20 },
  categoryText: { fontWeight: 500, marginLeft: 20 },
  productMainContainer: { paddingHorizontal: 20, marginTop: 20 },
  productContainer: { marginRight: 12, marginBottom: 10 },
  productCard: {
    width: 170,
    height: 230,
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 20,
    alignItems: 'center',
  },
  productInnerCard: {
    width: 140,
    height: 140,
    backgroundColor: '#ECEFF1',
    marginTop: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryCard: {
    backgroundColor: '#CFD8DC',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 2,
  },
  categoryTextNames: {
    color: 'black',
    fontSize: 10,
    padding: 5,
  },
  productTextContainer: {
    width: '90%',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  productText: { color: '#78909C', fontWeight: 500 },
  productPriceAndAddbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 10,

    paddingRight: 10,
  },
  addToCartBtn: {
    backgroundColor: '#42A5F5',
    padding: 10,
    borderRadius: 50,
    elevation: 1,
    width: 30,
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
    padding: 10,
    position: 'absolute',
    borderRadius: 20,
    elevation: 10,
    bottom: 80,
    left: 60,
  },
  popUpText: {
    textAlign: 'center',
    fontWeight: 400,
  },
});
