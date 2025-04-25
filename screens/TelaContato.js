import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const TelaContato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarFormulario = () => {
    if (nome && email && mensagem) {
      Alert.alert('Obrigado!', 'Sua mensagem foi enviada com sucesso.');
      setNome('');
      setEmail('');
      setMensagem('');
    } else {
      Alert.alert('Erro!', 'Preencha todos os campos antes de enviar.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fale Conosco</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Digite sua mensagem. Avalie o App!"
        value={mensagem}
        onChangeText={(text) => setMensagem(text)}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.botao} onPress={enviarFormulario}>
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E5', // Fundo suave para harmonizar com o laranja
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Laranja médio escuro para destaque no título
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFB347', // Laranja claro nas bordas do input
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF5E0', // Fundo do input com tom suave
    color: '#333', // Texto escuro para legibilidade
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#FFB347', // Mantendo o tom claro
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF5E0', // Mesmo fundo do input normal
    color: '#333',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#FFA500', // Laranja médio no botão de enviar
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF', // Texto branco para contraste
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default TelaContato;
