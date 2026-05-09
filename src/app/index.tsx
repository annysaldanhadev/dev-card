import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoTextBold}>DEV <Text style={styles.logoTextLight}>CARD</Text></Text>
        </View>
        <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/cadastro')}>
          <Text style={styles.buttonText}>Criar meu cartão  →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoBadge: { backgroundColor: '#0158BC', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 },
  logoTextBold: { color: '#fff', fontSize: 32, fontWeight: '900', letterSpacing: -1 },
  logoTextLight: { fontWeight: '300' },
  subtitle: { fontSize: 16, color: '#666', marginTop: 16, fontWeight: '500' },
  footer: { paddingHorizontal: 24, paddingBottom: 40 },
  button: { backgroundColor: '#0158BC', height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});