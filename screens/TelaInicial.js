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
      {/* Adicionando o texto sobre a importância da leitura */}
      <Text style={styles.textoImportancia}>
      Este aplicativo foi criado para promover a inclusão social através da leitura, tornando o acesso aos livros mais fácil e acessível para todos. Com ele, você pode descobrir obras de diversos autores, explorar catálogos, buscar livros específicos e encontrar histórias que enriquecem a mente e a alma
      </Text>
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
    backgroundColor: '#FFF7E5', // Fundo com tom suave para combinar com laranja
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000', // Laranja médio no título
  },
  textoImportancia: {
    fontSize: 16,
    textAlign: 'justify', // Alinha o texto para melhor legibilidade
    color: '#333', // Um tom neutro para contraste
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFB347', // Bordas com tom claro de laranja
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFF5E0', // Fundo do input com tom suave
  },
  botao: {
    backgroundColor: '#FFA500', // Laranja médio
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: '#FFF', // Texto branco no botão para contraste
    fontWeight: 'bold',
    fontSize: 16,
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
    color: '#FF8C00', // Nome do livro em laranja médio
  },
  autor: {
    fontSize: 14,
    color: '#555', // Tom neutro para o autor
  },
});


export default TelaInicial;
