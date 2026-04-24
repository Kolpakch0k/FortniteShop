import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity,
} from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import GradientButton from '../../components/GradientButton';
import { COLORS } from '../../theme/colors';

export default function AuthScreen() {
  const [mode, setMode]       = useState('signin'); // 'signin' | 'register'
  const [email, setEmail]     = useState('');
  const [password, setPass]   = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const validate = () => {
    if (!email.trim() || !password) {
      setError('Please fill in all fields');
      return false;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      setError('Please enter a valid email');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    setError(null);
    return true;
  };

  const onSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      if (mode === 'signin') {
        await signInWithEmailAndPassword(auth, email.trim(), password);
      } else {
        await createUserWithEmailAndPassword(auth, email.trim(), password);
      }
    } catch (e) {
      setError(e?.message || 'Authentication error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: COLORS.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>{mode === 'signin' ? 'WELCOME BACK' : 'CREATE ACCOUNT'}</Text>
        <Text style={styles.subtitle}>
          {mode === 'signin' ? 'Sign in to access the shop' : 'Join the battle royale'}
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPass}
            placeholder="••••••••"
            placeholderTextColor="#666"
            secureTextEntry
            style={styles.input}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <GradientButton
            title={mode === 'signin' ? 'SIGN IN' : 'REGISTER'}
            onPress={onSubmit}
            loading={loading}
            style={{ marginTop: 20 }}
          />

          <TouchableOpacity
            onPress={() => { setError(null); setMode(mode === 'signin' ? 'register' : 'signin'); }}
            style={{ marginTop: 18, alignItems: 'center' }}
          >
            <Text style={styles.toggle}>
              {mode === 'signin'
                ? "Don't have an account? Register"
                : 'Already registered? Sign in'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingTop: 40 },
  title: {
    color: COLORS.textPrimary,
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 2,
  },
  subtitle: { color: COLORS.textSecondary, marginTop: 6, marginBottom: 24 },
  form: {
    backgroundColor: '#141420',
    borderRadius: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2a1a40',
    shadowColor: COLORS.primary,
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  label: { color: COLORS.textSecondary, fontSize: 12, marginBottom: 6, letterSpacing: 1 },
  input: {
    backgroundColor: '#0D0D12',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#2a1a40',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    marginBottom: 14,
  },
  error: { color: COLORS.danger, marginTop: 6, fontSize: 13 },
  toggle: { color: COLORS.primaryAlt, fontWeight: '700' },
});
