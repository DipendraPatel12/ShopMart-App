import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useProducts from '../hooks/useProducts';
import { AppList } from '../lib';
import styles from './Category.styles';

const Category = () => {
  const navigation = useNavigation();
  const { categories } = useProducts();
  const allCategories = ['All', ...categories];

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Category</Text>

      <AppList
        data={allCategories}
        keyExtractor={item => item}
        horizontal
        estimatedItemSize={80}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
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
