import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ProductRender = ({ item, navigation }) => {
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity
        style={styles.productCard}
        onPress={() => {
          navigation.navigate('ProductDetail', { product: item });
        }}
      >
        <View style={styles.productInnerCard}>
          <Image
            source={{ uri: `${item?.image}` }}
            style={{ width: 120, height: 120 }}
            resizeMode="cover"
          ></Image>
        </View>
        <View style={styles.productTextContainer}>
          <Text style={styles.productText}>{item.title.slice(0, 10)}</Text>
          <Text style={{ color: '#78909C', fontWeight: 500 }}>
            {item.rating.rate}
          </Text>
        </View>

        <View style={styles.productPriceAndAddbtn}>
          <Text style={{ fontSize: 13, fontWeight: 500 }}>${item.price}</Text>
          <TouchableOpacity style={styles.addToCartBtn}>
            <FontAwesome5 name="plus" size={10} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductRender;

const styles = StyleSheet.create({
  productContainer: { marginTop: 20 },
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
});
