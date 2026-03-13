import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Category = () => {
  const categories = [
    'All',
    'shoes',
    'bag',
    'clothes',
    'Acessories',
    'Electoronics',
  ];
  return (
    <View>
      <Text style={styles.categoryText}>Category</Text>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={{ marginLeft: 20, marginTop: 10, height: 25 }}>
            <TouchableOpacity
              style={styles.categoryCard}
              onPress={() => {
                navigation.navigate('CategoryProduct', {
                  categoryName: item,
                });
              }}
            >
              <Text style={styles.categoryTextNames}>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: { fontWeight: 500, marginLeft: 20 },
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
});
