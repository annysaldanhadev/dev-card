import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Preview() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const fotoUri = params.foto as string;
  const { nome, cargo, empresa, tecnologia, linkedin, instagram, github } = params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoTextBold}>DEV <Text style={styles.logoTextLight}>CARD</Text></Text>
          </View>
        </View>

        <Text style={styles.title}>Preview do seu DevCard</Text>

        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <View style={styles.imageWrapper}>
              {fotoUri ? (
                <Image source={{ uri: fotoUri }} style={styles.profileImage} />
              ) : (
                <View style={styles.imagePlaceholder}>
                  <Text style={styles.placeholderText}>{nome?.[0] || '?'}</Text>
                </View>
              )}
            </View>

            <View style={styles.socialRow}>
              {linkedin ? <View style={styles.socialIcon}><Text style={styles.iconText}>in</Text></View> : null}
              {instagram ? <View style={styles.socialIcon}><Text style={styles.iconText}>ig</Text></View> : null}
              {github ? <View style={styles.socialIcon}><Text style={styles.iconText}>git</Text></View> : null}
            </View>
          </View>
        </View>

        {/* Botões de Ação */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.saveButton} 
            onPress={() => router.replace('/sucesso')}
          >
            <Text style={styles.saveButtonText}>✓  Salvar cartão</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.editButton} 
            onPress={() => router.back()}
          >
            <Text style={styles.editButtonText}>✎  Editar cartão</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 24, alignItems: 'center' },
  header: { marginBottom: 20 },
  logoBadge: { backgroundColor: '#0158BC', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  logoTextBold: { color: '#fff', fontSize: 20, fontWeight: '900' },
  logoTextLight: { fontWeight: '300' },
  title: { fontSize: 22, fontWeight: '700', color: '#1A1A1A', marginBottom: 24 },
  
  cardContainer: {
    width: '100%',
    padding: 2,
    borderWidth: 1,
    borderColor: '#0158BC',
    borderStyle: 'dotted',
    borderRadius: 20,
    marginBottom: 30,
  },
  cardContent: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    height: 380,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    marginBottom: 20,
  },
  profileImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  imagePlaceholder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  placeholderText: { fontSize: 60, fontWeight: '800', color: '#0158BC' },

  socialRow: { flexDirection: 'row', gap: 12, marginBottom: 10 },
  socialIcon: { 
    width: 44, 
    height: 44, 
    backgroundColor: '#0158BC', 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  iconText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },

  footer: { width: '100%', gap: 12 },
  saveButton: { 
    backgroundColor: '#0158BC', 
    height: 56, 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  editButton: { 
    backgroundColor: '#F8F8F8', 
    height: 56, 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  editButtonText: { color: '#0158BC', fontSize: 16, fontWeight: '600' },
});