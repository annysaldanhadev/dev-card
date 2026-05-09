import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Preview() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const cardColor = (params.corSelecionada as string) || '#0158BC';

  const anosNum = parseInt(params.anos as string);
  let nivel = "Júnior";
  let badgeColor = "rgba(255,255,255,0.3)"; 

  if (anosNum >= 6) { nivel = "Sênior"; badgeColor = "#FFD700"; }
  else if (anosNum >= 3) { nivel = "Pleno"; badgeColor = "#4CAF50"; }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Seu Cartão</Text>

      <View style={[styles.card, { backgroundColor: cardColor }]}>
        <View style={styles.avatar}>
          <Text style={[styles.avatarText, {color: cardColor}]}>{params.nome?.[0]}</Text>
        </View>
        <Text style={styles.name}>{params.nome}</Text>
        <Text style={styles.job}>{params.cargo}</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.techLabel}>Especialista em</Text>
        <Text style={styles.techValue}>{params.tecnologia}</Text>

        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={styles.badgeText}>{nivel}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnMain} onPress={() => router.replace('/sucesso')}>
          <Text style={styles.btnMainText}>Finalizar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSub} onPress={() => router.back()}>
          <Text style={styles.btnSubText}>Editar dados</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 25 },
  headerTitle: { fontSize: 22, fontWeight: '700', marginBottom: 20 },
  card: { borderRadius: 20, padding: 30, alignItems: 'center' },
  avatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { fontSize: 28, fontWeight: '900' },
  name: { fontSize: 22, fontWeight: '800', color: '#fff' },
  job: { fontSize: 14, color: '#eee' },
  divider: { width: '100%', height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginVertical: 20 },
  techLabel: { color: '#eee', fontSize: 12 },
  techValue: { color: '#fff', fontSize: 18, fontWeight: '700', marginBottom: 10 },
  badge: { paddingHorizontal: 15, paddingVertical: 4, borderRadius: 10 },
  badgeText: { color: '#fff', fontWeight: '800', fontSize: 12 },
  footer: { marginTop: 'auto', gap: 10 },
  btnMain: { backgroundColor: '#0158BC', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  btnMainText: { color: '#fff', fontWeight: '700' },
  btnSub: { height: 50, justifyContent: 'center', alignItems: 'center' },
  btnSubText: { color: '#0158BC', fontWeight: '600' }
});