import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopHomeScreen from '../screens/shop/ShopHomeScreen';
import CategoryListScreen from '../screens/shop/CategoryListScreen';
import { COLORS } from '../theme/colors';

const Stack = createNativeStackNavigator();

export default function ShopStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.surface },
        headerTintColor: COLORS.textPrimary,
        headerTitleStyle: { fontWeight: '700', letterSpacing: 0.5 },
        contentStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen
        name="ShopHome"
        component={ShopHomeScreen}
        options={{ title: 'Item Shop' }}
      />
      <Stack.Screen
        name="CategoryList"
        component={CategoryListScreen}
        options={({ route }) => ({ title: route.params?.categoryName || 'Category' })}
      />
    </Stack.Navigator>
  );
}
