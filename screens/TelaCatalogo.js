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
    backgroundColor: '#FFF7E5', // Fundo com tom suave para combinar com laranja
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Laranja mais escuro para destaque no título
  },
  item: {
    backgroundColor: '#FFE4B5', // Fundo dos itens com tom pastel de laranja
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
    borderRadius: 5,
  },
  nomeLivro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4500', // Tom de laranja vibrante para o nome do livro
  },
  autor: {
    fontSize: 14,
    color: '#555', // Mantém o tom neutro para o autor
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#FFA500', // Laranja médio para o botão
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF', // Texto branco no botão para contraste
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default TelaCatalogo;
