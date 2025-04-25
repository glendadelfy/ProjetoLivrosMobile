import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelaDetalhes = ({ route }) => {
  // Obtendo o parâmetro "livro" enviado pela navegação
  const livro = route?.params?.livro;

  // Caso não receba os dados do livro, mostrar mensagem
  if (!livro) {
    return (
      <View style={styles.container}>
        <Text style={styles.erro}>Erro: Nenhum livro foi fornecido.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Exibindo o título do livro */}
      <Text style={styles.titulo}>Título do Livro: {livro.title}</Text>
      
      {/* Exibindo o nome do autor */}
      <Text style={styles.autor}>Autor: {livro.authors?.[0]?.name || 'Autor desconhecido'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFF7E5', // Fundo suave para harmonizar com o laranja médio
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333', // Laranja médio mais escuro para o título
    },
    autor: {
      fontSize: 18,
      color: '#333', // Laranja vibrante para o autor
      marginBottom: 10,
    },
    erro: {
      fontSize: 18,
      color: '#FF6347', // Tom vermelho-alaranjado para mensagem de erro
      textAlign: 'center',
    },
  });
  
export default TelaDetalhes;
