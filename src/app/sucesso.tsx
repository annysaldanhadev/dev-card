import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, Share } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Sucesso() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { nome, cargo, foto, tecnologia, empresa } = params;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Confira meu novo DevCard profissional! Nome: ${nome} - ${cargo}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoTextBold}>DEV <Text style={styles.logoTextLight}>CARD</Text></Text>
          </View>
        </View>

        <Text style={styles.title}>Cartão criado com sucesso!</Text>
        <Text style={styles.subtitle}>
          Seu novo DevCard profissional já está pronto para ser compartilhado com o mundo. [cite: 122]
        </Text>

        <View style={styles.miniCard}>
          <View style={styles.cardHeader}>
            <View style={styles.avatarWrapper}>
              {foto ? (
                <Image source={{ uri: foto as string }} style={styles.avatar} />
              ) : (
                <View style={[styles.avatar, styles.placeholderAvatar]}>
                  <Text style={styles.placeholderText}>{nome?.[0] || '?'}</Text>
                </View>
              )}
            </View>
            
            <View style={styles.cardInfo}>
              <View style={styles.socialIcons}>
                <Text style={styles.tinyIcon}>📁</Text>
                <Text style={styles.tinyIcon}>📸</Text>
                <Text style={styles.tinyIcon}>🌐</Text>
              </View>
              <Text style={styles.cardName}>{nome || "Seu Nome"}</Text>
              <Text style={styles.cardJob}>{cargo || "Developer"}</Text>
              {empresa ? <Text style={styles.cardCompany}>{empresa}</Text> : null}
            </View>
          </View>

          <View style={styles.badgeRow}>
            <View style={styles.chip}><Text style={styles.chipText}>Senior</Text></View>
            <View style={styles.chip}><Text style={styles.chipText}>{tecnologia || 'React'}</Text></View>
          </View>
        </View>

        <View style={{ height: 60 }} />

        <View style={styles.footer}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => router.replace('/')}>
            <Text style={styles.buttonText}>⊕  Criar outro cartão</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={handleShare}>
            <Text style={styles.secondaryButtonText}>🔗  Compartilhar Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { flex: 1, padding: 24, alignItems: 'center' },
  header: { marginBottom: 30, marginTop: 10 },
  logoBadge: { backgroundColor: '#0158BC', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  logoTextBold: { color: '#fff', fontSize: 22, fontWeight: '900' },
  logoTextLight: { fontWeight: '300' },
  
  title: { fontSize: 24, fontWeight: '800', color: '#1A1A1A', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 12, marginBottom: 32 },
  
  miniCard: {
    backgroundColor: '#013D82', 
    width: '100%',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatarWrapper: { width: 70, height: 70, borderRadius: 35, overflow: 'hidden', borderWidth: 2, borderColor: '#fff' },
  avatar: { width: '100%', height: '100%' },
  placeholderAvatar: { backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  placeholderText: { fontSize: 24, fontWeight: '900', color: '#013D82' },
  
  cardInfo: { marginLeft: 16, flex: 1 },
  socialIcons: { flexDirection: 'row', gap: 6, marginBottom: 4 },
  tinyIcon: { fontSize: 12, color: '#fff', opacity: 0.8 },
  cardName: { color: '#fff', fontSize: 20, fontWeight: '800' },
  cardJob: { color: '#B0C4DE', fontSize: 13 },
  cardCompany: { color: '#B0C4DE', fontSize: 11, opacity: 0.7 },
  
  badgeRow: { flexDirection: 'row', gap: 8 },
  chip: { backgroundColor: 'rgba(255,255,255,0.15)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  chipText: { color: '#fff', fontSize: 11, fontWeight: '600' },
  
  footer: { width: '100%', gap: 12 },
  primaryButton: { backgroundColor: '#0158BC', height: 56, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  secondaryButton: { height: 56, borderRadius: 12, borderWidth: 1, borderColor: '#DDD', justifyContent: 'center', alignItems: 'center' },
  secondaryButtonText: { color: '#0158BC', fontSize: 16, fontWeight: '600' }
});