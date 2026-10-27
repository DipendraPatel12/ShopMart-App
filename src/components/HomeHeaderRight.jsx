import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { colors, moderateScale } from '../constants';
import styles from './HomeHeaderRight.styles';

const HomeHeaderRight = () => {
  const [searchBar, setSearchBar] = useState(false);
  const navigation = useNavigation();

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
            <FontAwesome5
              name="window-close"
              size={moderateScale(18)}
              color={colors.textGrey}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={styles.actionIconBtn}
            onPress={() => setSearchBar(true)}
          >
            <FontAwesome5
              name="search"
              size={moderateScale(18)}
              color={colors.textGrey}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bellBtn}
            onPress={() => navigation.navigate('Notification')}
          >
            <FontAwesome5
              name="bell"
              size={moderateScale(18)}
              color={colors.textGrey}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default HomeHeaderRight;
