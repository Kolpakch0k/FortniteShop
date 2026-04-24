import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator';

console.log('=== FIREBASE CHECK ===');
console.log('API Key:', process.env.EXPO_PUBLIC_FIREBASE_API_KEY);
console.log('Auth Domain:', process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN);
console.log('App ID:', process.env.EXPO_PUBLIC_FIREBASE_APP_ID);
console.log('=====================');

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: '#8A2BE2',
            background: '#0D0D12',
            card: '#111118',
            text: '#FFFFFF',
            border: '#1a1a2e',
            notification: '#9B30FF',
          },
        }}
      >
        <StatusBar style="light" />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
