import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Cart = () => {
  const productsArray = [
    { title: 'sdf', price: 23, rating: { rate: 2.1 } },
    { title: 'sdf', price: 23, rating: { rate: 2.1 } },
    { title: 'sdf', price: 23, rating: { rate: 2.1 } },
    { title: 'sdf', price: 23, rating: { rate: 2.1 } },
    { title: 'sdf', price: 23, rating: { rate: 2.1 } },
    { title: 'sdf', price: 23, rating: { rate: 2.1 } },
    { title: 'sdf', price: 23, rating: { rate: 2.1 } },
  ];

  const { width } = Dimensions.get('window');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-evenly',
      }}
    >
      <View style={{ height: 350 }}>
        <FlatList
          data={productsArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20, marginLeft: 2 }}>
              <View
                style={{
                  width: 350,
                  height: 100,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  padding: 10,

                  elevation: 2,
                  flexDirection: 'row',
                  gap: 10,
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 80,
                    justifyContent: 'center',
                    backgroundColor: '#ECEFF1',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={require('../../assets/images/splash1.png')}
                    style={{ width: 90, height: 90 }}
                  ></Image>
                </View>

                <View
                  style={{
                    width: 200,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <View style={{ justifyContent: 'center', gap: 5 }}>
                    <Text style={{ fontWeight: 2000 }}>{item.title}</Text>
                    <Text style={{ color: 'grey', fontWeight: 500 }}>
                      Quantity: 2
                    </Text>
                    <Text style={{ fontWeight: 800 }}>$ {item.price}</Text>
                  </View>

                  <View style={{ justifyContent: 'space-between' }}>
                    <TouchableOpacity
                      style={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#64B5F6',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <FontAwesome5 name="plus" size={17} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#CFD8DC',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <FontAwesome5 name="minus" size={17} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        ></FlatList>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          width: width - 40,
          height: 180,
          borderWidth: 2,
          borderRadius: 20,
          borderStyle: 'dashed',
          borderColor: '#42A5F5',
          backgroundColor: '#E3F2FD',
          padding: 20,
          gap: 30,
        }}
      >
        <Text style={{ textAlign: 'center', fontWeight: 500, fontSize: 18 }}>
          Order Details
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ color: '#90A4AE', fontWeight: 800 }}>
              Total items
            </Text>
            <Text style={{ color: '#90A4AE', fontWeight: 800 }}>
              Shipping Charges
            </Text>
            <Text style={{ color: '#90A4AE', fontWeight: 800 }}>Total tax</Text>
            <Text style={{ color: '#64B5F6', fontWeight: 800, fontSize: 20 }}>
              Grand Total
            </Text>
          </View>
          <View>
            <Text style={{ color: '#90A4AE', fontWeight: 800 }}>3</Text>
            <Text style={{ color: '#90A4AE', fontWeight: 800 }}>10</Text>
            <Text style={{ color: '#90A4AE', fontWeight: 800 }}>45</Text>
            <Text style={{ color: '#64B5F6', fontWeight: 800, fontSize: 20 }}>
              $ 452
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#2196F3',
          width: width - 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}
        activeOpacity={0.7}
      >
        <Text
          style={{ color: 'white', fontWeight: 800, padding: 20, fontSize: 20 }}
        >
          Proceed to Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
