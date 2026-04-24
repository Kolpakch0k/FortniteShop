// components/ItemCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const COLORS = {
  primary: '#8A2BE2',    
  accent: '#FFD700',    
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0C0',
  background: '#0D0D12',
  cardBg: '#16161D',
};

export default function ItemCard({ item, onPress }) {
  const isVaulted = item.rarity?.toLowerCase() === 'vaulted';

  return (
    <Pressable 
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]} 
      onPress={onPress}
      android_ripple={{ color: '#8A2BE233' }}
    >
      <LinearGradient
        colors={['#1b1030', '#111118']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.imageWrapper}>
          {/* 🔥 ИСПРАВЛЕННЫЙ <Image> — все пропсы ВНУТРИ тега */}
          <Image 
            source={typeof item.image === 'string' ? { uri: item.image } : item.image}
            style={styles.image}
            resizeMode="cover"
            onLoad={() => console.log('✅ Загружено:', item.name)}
            onError={(e) => console.log('❌ Ошибка загрузки:', item.name, e.nativeEvent.error)}
          />
          
          <View style={[
            styles.badge, 
            { backgroundColor: isVaulted ? '#4a1740' : '#2a1a40' }
          ]}>
            <Text style={[
              styles.badgeText, 
              { color: isVaulted ? '#ff79c6' : '#bfa2ff' }
            ]}>
              {item.rarity}
            </Text>
          </View>
        </View>

        <Text numberOfLines={2} style={styles.name}>
          {item.name}
        </Text>

        <View style={styles.priceRow}>
          <View style={styles.vbucksIcon} />
          <Text style={styles.price}>{item.price.toLocaleString()}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2a1a40',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    transform: [{ scale: 1 }],
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  gradient: {
    flex: 1,
    borderRadius: 11,
    padding: 10,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 1, 
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primary,
    overflow: 'hidden',
    backgroundColor: '#1a1a2e',
    position: 'relative',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  image: {
    width: '100%',  // 👈 Важно: строка с %, а не число
    height: 140,
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.primary,
    zIndex: 1,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  name: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 4,
    minHeight: 36, 
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  vbucksIcon: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.accent,
    marginRight: 6,
    shadowColor: COLORS.accent,
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 3,
  },
  price: {
    color: COLORS.accent,
    fontWeight: '800',
    fontSize: 14,
  },
});