import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useProducts from '../../hooks/useProducts';
import CategorySkeleton from '../categorySkeleton/CategorySkeleton';
import { ROUTES } from '../../constants';
import styles from './Category.styles';

const Category = () => {
  const navigation = useNavigation();
  const { categories, loading } = useProducts();

  if (loading && categories.length === 0) {
    return <CategorySkeleton />;
  }

  const allCategories = ['All', ...categories];

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Category</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {allCategories.map(item => (
          <View key={item} style={styles.itemWrapper}>
            <TouchableOpacity
              style={
                item === 'All' ? styles.highlightAllTextBg : styles.categoryCard
              }
              onPress={() => {
                if (item === 'All') return;
                navigation.navigate(ROUTES.CATEGORY_PRODUCT, {
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
        ))}
      </ScrollView>
    </View>
  );
};

export default Category;
