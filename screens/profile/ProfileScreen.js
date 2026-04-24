import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import AuthScreen from './AuthScreen';
import GradientButton from '../../components/GradientButton';
import { COLORS } from '../../theme/colors';

const AVATAR_PLACEHOLDER =
  'https://via.placeholder.com/200x200/1a1a2e/8A2BE2?text=USER'; // TODO: Replace avatar placeholder

export default function ProfileScreen() {
  const [user, setUser]         = useState(null);
  const [initializing, setInit] = useState(true);
  const [signingOut, setSO]     = useState(false);

  useEffect(() => {
    // Subscribe once on mount; unsubscribe on unmount to avoid memory leaks
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (initializing) setInit(false);
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = async () => {
    try {
      setSO(true);
      await signOut(auth);
    } catch (e) {
      // no-op
    } finally {
      setSO(false);
    }
  };

  if (initializing) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={COLORS.primaryAlt} />
      </View>
    );
  }

  if (!user) return <AuthScreen />;

  return (
    <SafeAreaView edges={['left','right']} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatarWrap}>
          <Image source={{ uri: AVATAR_PLACEHOLDER }} style={styles.avatar} />
        </View>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.uid}>UID: {user.uid.slice(0, 10)}…</Text>

        <View style={styles.dashboard}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>OWNED</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statNumber, { color: COLORS.accent }]}>13,500</Text>
            <Text style={styles.statLabel}>V-BUCKS</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>LEVEL</Text>
          </View>
        </View>

        <GradientButton
          title="SIGN OUT"
          onPress={handleSignOut}
          loading={signingOut}
          style={{ marginTop: 28, alignSelf: 'stretch' }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 18 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.background },
  card: {
    backgroundColor: '#141420',
    borderRadius: 16,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a1a40',
    shadowColor: COLORS.primary,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  avatarWrap: {
    width: 110, height: 110, borderRadius: 55,
    borderWidth: 2, borderColor: COLORS.primary,
    overflow: 'hidden',
    shadowColor: COLORS.primary,
    shadowOpacity: 0.9,
    shadowRadius: 14,
  },
  avatar: { width: '100%', height: '100%' },
  email: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '800',
    marginTop: 14,
  },
  uid: { color: COLORS.textSecondary, fontSize: 12, marginTop: 4 },
  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 24,
  },
  statBox: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#0D0D12',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a1a40',
  },
  statNumber: { color: '#fff', fontSize: 18, fontWeight: '900' },
  statLabel: { color: COLORS.textSecondary, fontSize: 11, marginTop: 2, letterSpacing: 1 },
});
