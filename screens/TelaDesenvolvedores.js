import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const TelaDesenvolvedores = () => {
  const abrirLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir link:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre os Desenvolvedores</Text>
      <View style={styles.card}>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQE6gys8N4n7gg/profile-displayphoto-shrink_400_400/B4DZV9q9s6G8Ak-/0/1741570170297?e=1750896000&v=beta&t=E-NjpSQOjVBTHubU0j9UUqn3gp-UtmhLL0UYIWVGxjE' }} // Substitua pelo link de uma foto do desenvolvedor
        />
        <Text style={styles.nome}>Glenda Delfy</Text>
        <Text style={styles.funcao}>Desenvolvedora Frontend</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => abrirLink('https://www.linkedin.com/in/glenda-delfy-60b3a7202/')} // Link para perfil ou portfólio
        >
          <Text style={styles.textoBotao}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQE6gys8N4n7gg/profile-displayphoto-shrink_400_400/B4DZV9q9s6G8Ak-/0/1741570170297?e=1750896000&v=beta&t=E-NjpSQOjVBTHubU0j9UUqn3gp-UtmhLL0UYIWVGxjE' }} // Substitua pelo link de uma foto de outro desenvolvedor
        />
        <Text style={styles.nome}>Glenda Delfy</Text>
        <Text style={styles.funcao}>Desenvolvedor Backend</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => abrirLink('https://github.com/glendadelfy')} // Link para perfil ou portfólio
        >
          <Text style={styles.textoBotao}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E5', // Fundo suave para harmonizar com o laranja médio
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Laranja médio escuro para destacar o título
  },
  card: {
    backgroundColor: '#FFE4B5', // Fundo do cartão com tom pastel de laranja
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
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Laranja vibrante para o nome
  },
  funcao: {
    fontSize: 16,
    color: '#FF8C00', // Laranja médio escuro para a função
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#FFA500', // Laranja médio para o botão
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#FFF', // Texto branco no botão para contraste
    fontWeight: 'bold',
    fontSize: 16,
  },
});


export default TelaDesenvolvedores;
