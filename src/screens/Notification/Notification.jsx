import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useNotification from '../../hooks/useNotification';
import { colors, moderateScale } from '../../constants';
import styles from './Notification.styles';

const Notification = ({ navigation }) => {
  const {
    items,
    unreadCount,
    markRead,
    markAllRead,
    remove,
    clearAll,
  } = useNotification();

  const handlePressItem = item => {
    if (!item.isRead) {
      markRead(item.id);
    }
    if (item.data?.screen && navigation) {
      navigation.navigate(item.data.screen, item.data.params);
    }
  };

  const formatDate = isoDate => {
    if (!isoDate) return '';
    const date = new Date(isoDate);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.itemCard, !item.isRead && styles.unreadCard]}
      onPress={() => handlePressItem(item)}
    >
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle} numberOfLines={1}>
          {item.title}
        </Text>
        {!item.isRead && <View style={styles.unreadDot} />}
      </View>

      <Text style={styles.itemBody} numberOfLines={3}>
        {item.body}
      </Text>

      <View style={styles.itemFooter}>
        <Text style={styles.itemDate}>{formatDate(item.date)}</Text>
        <TouchableOpacity
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          onPress={() => remove(item.id)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Notifications</Text>
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>

        {items.length > 0 && (
          <View style={styles.headerActions}>
            {unreadCount > 0 && (
              <TouchableOpacity onPress={markAllRead}>
                <Text style={styles.clearAllText}>Mark read</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={clearAll}>
              <Text style={styles.clearAllText}>Clear all</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {items.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome5
            name="bell-slash"
            size={moderateScale(48)}
            color={colors.textMuted}
          />
          <Text style={styles.emptyTitle}>No Notifications</Text>
          <Text style={styles.emptySubtitle}>
            You are all caught up! New alerts and order updates will appear here.
          </Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

export default Notification;
