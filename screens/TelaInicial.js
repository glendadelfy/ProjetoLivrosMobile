import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const TelaInicial = ({ navigation }) => {
  const [busca, setBusca] = useState('');
  const [livros, setLivros] = useState([]);

  const buscarLivros = async () => {
    try {
      const resposta = await fetch(`https://openlibrary.org/search.json?q=${busca}`);
      const dados = await resposta.json();
      setLivros(dados.docs);
    } catch (erro) {
      console.error('Erro ao buscar livros:', erro);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inclusão Social de Leitura</Text>
      <TextInput
        style={styles.input}
        placeholder="Busque um livro ou autor"
        value={busca}
        onChangeText={(texto) => setBusca(texto)}
      />
      <TouchableOpacity style={styles.botao} onPress={buscarLivros}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              style={styles.imagem}
              source={{
                uri: item.cover_i
                  ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
                  : 'https://via.placeholder.com/150',
              }}
            />
            <Text style={styles.nomeLivro}>{item.title}</Text>
            <Text style={styles.autor}>{item.author_name?.join(', ') || 'Autor Desconhecido'}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
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
  },
  botao: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  item: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  imagem: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  nomeLivro: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  autor: {
    fontSize: 14,
    color: '#555',
  },
});

export default TelaInicial;
