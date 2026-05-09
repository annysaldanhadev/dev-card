import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sucesso() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.checkCircle}>
          <Text style={styles.checkIcon}>✓</Text>
        </View>
        <Text style={styles.title}>Cartão criado com sucesso!</Text>
        <Text style={styles.subtitle}>O seu DevCard profissional está pronto.</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Voltar ao início</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 30 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  checkCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#E8F5E9', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  checkIcon: { fontSize: 40, color: '#4CAF50' },
  title: { fontSize: 22, fontWeight: '800', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 10 },
  button: { backgroundColor: '#0158BC', height: 55, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '700' }
});