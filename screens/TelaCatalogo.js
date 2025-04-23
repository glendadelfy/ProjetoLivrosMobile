import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TelaCatalogo = ({ navigation }) => {
  const [livros, setLivros] = useState([]);

  // Função para buscar livros por categoria (exemplo: audiolivros)
  const buscarLivros = async () => {
    try {
      const resposta = await fetch('https://openlibrary.org/subjects/audiobooks.json?limit=10');
      const dados = await resposta.json();
      setLivros(dados.works);
    } catch (erro) {
      console.error('Erro ao buscar livros:', erro);
    }
  };

  useEffect(() => {
    buscarLivros();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Livros</Text>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              style={styles.imagem}
              source={{
                uri: item.cover_id
                  ? `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`
                  : 'https://via.placeholder.com/150',
              }}
            />
            <Text style={styles.nomeLivro}>{item.title}</Text>
            <Text style={styles.autor}>
              {item.authors?.[0]?.name || 'Autor desconhecido'}
            </Text>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate('Detalhes', { livro: item })}
            >
              <Text style={styles.textoBotao}>Detalhes</Text>
            </TouchableOpacity>
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
    textAlign: 'center',
    marginBottom: 20,
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
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TelaCatalogo;
