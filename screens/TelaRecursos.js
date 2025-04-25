import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import livroImagem from '../src/images/livros-leitura.jpeg'; // Importando a imagem local
import livroImagemB from '../src/images/livros-online-images.jpeg'; // Importando a imagem local

const TelaRecursos = () => {
  const abrirLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir link:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recursos Educativos</Text>
      <View style={styles.recurso}>
        <Image
          style={styles.imagem}
          source={livroImagem} // Usando a imagem local
        />
        <Text style={styles.texto}>Iniciativa de Leitura Inclusiva</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => abrirLink('https://redeleiturainclusiva.org.br/')}
        >
          <Text style={styles.textoBotao}>Acessar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recurso}>
      <Image
          style={styles.imagem}
          source={livroImagemB} // Usando a imagem local
        />
        <Text style={styles.texto}>Livros Gratuitos Online</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => abrirLink('https://openlibrary.org/')}
        >
          <Text style={styles.textoBotao}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E5', // Fundo suave para combinar com o laranja médio
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Laranja médio escuro para destacar o título
  },
  recurso: {
    backgroundColor: '#FFE4B5', // Fundo dos recursos com tom pastel de laranja
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333', // Laranja vibrante para os textos dos recursos
  },
  botao: {
    backgroundColor: '#FFA500', // Laranja médio para os botões
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#FFF', // Texto branco para contraste
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TelaRecursos;
