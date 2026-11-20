import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { AppIcon } from '../lib';
import { colors, moderateScale } from '../constants';
import styles from './HomeHeaderRight.styles';

const HomeHeaderRight = () => {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <View style={styles.container}>
      {searchBar ? (
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search here..."
            placeholderTextColor={colors.textGrey}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.searchInput}
          />
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setSearchBar(false)}
          >
            <AppIcon
              name="window-close"
              size={moderateScale(18)}
              color={colors.textGrey}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.actionIconBtn}
          onPress={() => setSearchBar(true)}
        >
          <AppIcon
            name="search"
            size={moderateScale(18)}
            color={colors.textGrey}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeHeaderRight;
