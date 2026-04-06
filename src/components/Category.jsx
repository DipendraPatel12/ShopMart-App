import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  const { categories } = useSelector(state => state.product);
  const allCategories = ['All', ...categories];
  // const categories = [
  //   'All',
  //   'shoes',
  //   'bag',
  //   'clothes',
  //   'Acessories',
  //   'Electoronics',
  // ];
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.categoryText}>Category</Text>

      <FlatList
        data={allCategories}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ marginLeft: 20, marginTop: 10, height: 25 }}>
            <TouchableOpacity
              style={
                item === 'All' ? styles.highlightAllTextBg : styles.categoryCard
              }
              onPress={() => {
                if (item === 'All') return;
                navigation.navigate('CategoryProduct', {
                  category: item === 'All' ? null : item,
                  categoryName: item,
                });
              }}
            >
              <Text
                style={
                  item === 'All'
                    ? styles.highlightAllText
                    : styles.categoryTextNames
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
  highlightAllTextBg: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 2,
  },
  highlightAllText: {
    color: 'white',
    fontSize: 10,
    padding: 5,
  },
});
