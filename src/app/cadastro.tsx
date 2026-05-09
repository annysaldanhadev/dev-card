import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();
  const [form, setForm] = useState({ nome: '', cargo: '', empresa: '', anos: '', tecnologia: '', cor: '#0158BC' });

  const handleGerar = () => {
    if (form.nome.length < 3 || !form.cargo || !form.anos || !form.tecnologia) {
      alert("Preencha os campos obrigatórios."); return;
    }
    router.push({ pathname: '/preview', params: { ...form } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.logoMini}>DEV <Text style={{fontWeight: '300'}}>CARD</Text></Text>
        <Text style={styles.title}>Construa sua{"\n"}Identidade:</Text>
        <Text style={styles.desc}>Crie um cartão digital profissional para demonstrar sua especialidade.</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome Completo *</Text>
          <TextInput style={styles.input} placeholder="Seu nome" onChangeText={(v) => setForm({...form, nome: v})} />

          <Text style={styles.label}>Cargo *</Text>
          <TextInput style={styles.input} placeholder="Ex: Desenvolvedor iOS" onChangeText={(v) => setForm({...form, cargo: v})} />

          <View style={styles.row}>
            <View style={{flex:1, marginRight:10}}>
              <Text style={styles.label}>Anos Exp. *</Text>
              <TextInput style={styles.input} keyboardType="numeric" placeholder="0" onChangeText={(v) => setForm({...form, anos: v})} />
            </View>
            <View style={{flex:1.5}}>
              <Text style={styles.label}>Tecnologia *</Text>
              <TextInput style={styles.input} placeholder="React Native" onChangeText={(v) => setForm({...form, tecnologia: v})} />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.mainButton} onPress={handleGerar}>
          <Text style={styles.mainButtonText}>Gerar Cartão  ✨</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 24 },
  logoMini: { color: '#0158BC', fontSize: 18, fontWeight: '900', marginBottom: 32 },
  title: { fontSize: 32, fontWeight: '800', color: '#1A1A1A', lineHeight: 38 },
  desc: { fontSize: 14, color: '#666', marginTop: 12, marginBottom: 32, lineHeight: 20 },
  formGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: '#1A1A1A', marginBottom: 8 },
  input: { backgroundColor: '#F5F5F5', height: 52, borderRadius: 12, paddingHorizontal: 16, marginBottom: 20, fontSize: 16 },
  row: { flexDirection: 'row' },
  mainButton: { backgroundColor: '#0158BC', height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  mainButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' }
});