import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

export default function AddInfo() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [image, setImage] = useState<string | null>(null);
  const [links, setLinks] = useState({ linkedin: '', instagram: '', github: '' });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleNext = () => {
    router.push({
      pathname: '/preview',
      params: { ...params, ...links, foto: image }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
           <Text style={styles.logoTextBold}>DEV <Text style={styles.logoTextLight}>CARD</Text></Text>
        </View>

        <Text style={styles.title}>Adicione uma foto de perfil</Text>

        <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <View style={styles.uploadPlaceholder}>
              <Text style={styles.cameraIcon}>📷</Text>
              <Text style={styles.uploadText}>Clique para adicionar foto</Text>
            </View>
          )}
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Links Sociais</Text>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Linkedin</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Seu perfil" 
            onChangeText={(v) => setLinks({...links, linkedin: v})}
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Instagram</Text>
          <TextInput 
            style={styles.input} 
            placeholder="@usuario" 
            onChangeText={(v) => setLinks({...links, instagram: v})}
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Github</Text>
          <TextInput 
            style={styles.input} 
            placeholder="usuario-git" 
            onChangeText={(v) => setLinks({...links, github: v})}
          />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Ver Preview do Card  →</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 24, alignItems: 'center' },
  header: { marginBottom: 30, width: '100%', alignItems: 'center' },
  logoTextBold: { color: '#0158BC', fontSize: 24, fontWeight: '900' },
  logoTextLight: { fontWeight: '300' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
  uploadArea: {
    width: '100%',
    height: 350,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#DDD',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    overflow: 'hidden'
  },
  uploadPlaceholder: { alignItems: 'center' },
  cameraIcon: { fontSize: 50, marginBottom: 10, opacity: 0.4 },
  uploadText: { color: '#999', fontSize: 14 },
  previewImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  sectionTitle: { fontSize: 24, fontWeight: '800', alignSelf: 'flex-start', marginBottom: 20 },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: '100%' },
  label: { flex: 1, fontSize: 16, fontWeight: '600' },
  input: { flex: 2, backgroundColor: '#F0F0F0', height: 45, borderRadius: 12, paddingHorizontal: 15 },
  nextButton: { backgroundColor: '#0158BC', width: '100%', height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  nextButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' }
});