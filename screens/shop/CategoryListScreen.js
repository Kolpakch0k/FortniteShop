import React, { useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemCard from '../../components/ItemCard';
import { getItemsByCategory } from '../../data/items';
import { COLORS } from '../../theme/colors';

export default function CategoryListScreen({ route }) {
  const { categoryId, categoryName } = route.params;
  const items = useMemo(() => getItemsByCategory(categoryId), [categoryId]);

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{categoryName.toUpperCase()}</Text>
        <Text style={styles.subtitle}>{items.length} items available</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ItemCard item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { paddingHorizontal: 12, paddingTop: 12, paddingBottom: 4 },
  title: {
    color: COLORS.textPrimary,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2,
  },
  subtitle: { color: COLORS.textSecondary, fontSize: 13, marginTop: 2 },
  list: { padding: 6, paddingBottom: 24 },
});
