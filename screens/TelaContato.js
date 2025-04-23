import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

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
        placeholder="Digite sua mensagem"
        value={mensagem}
        onChangeText={(text) => setMensagem(text)}
        multiline
        numberOfLines={4}
      />
      <Button title="Enviar" onPress={enviarFormulario} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default TelaContato;
