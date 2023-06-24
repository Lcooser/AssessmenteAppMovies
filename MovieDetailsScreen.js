import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const MovieDetailsScreen = ({ route }) => {
  const { movieId } = route.params;

  // Define os detalhes do filme com base no ID recebido
  const getMovieDetails = (id) => {
    const movies = {
      '1': {
        title: 'Vingadores: Ultimato',
        cinema: 'Cinema A',
        startTime: '18:00',
        director: 'Anthony Russo, Joe Russo',
        image: 'https://picfiles.alphacoders.com/458/thumb-458644.jpg',
        type: 'Ação',
        releaseYear: '2019',
        ageRating: '12',
      },
      '2': {
        title: 'Pantera Negra',
        cinema: 'Cinema B',
        startTime: '20:30',
        director: 'Ryan Coogler',
        image: 'https://img.elo7.com.br/product/zoom/1D1DA32/poster-marvel-pantera-negra-lo003-tamanho-90-x-0-cm-quadro-pantera-negra.jpg',
        type: 'Ação',
        releaseYear: '2018',
        ageRating: '12',
      },
      '3': {
        title: 'Jurassic Park',
        cinema: 'Cinema C',
        startTime: '19:45',
        director: 'Steven Spielberg',
        image: 'https://www.shutterstock.com/image-vector/jurassic-world-dianosaur-amazing-t-600w-2183499281.jpg',
        type: 'Aventura',
        releaseYear: '1993',
        ageRating: '10',
      },
      '4': {
        title: 'Matrix',
        cinema: 'Cinema D',
        startTime: '21:00',
        director: 'Lana Wachowski, Lilly Wachowski',
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/BJZJ6XQDENOQ5EPCCZLTK42OYM.jpg',
        type: 'Ficção Científica',
        releaseYear: '1999',
        ageRating: '14',
      },
      '5': {
        title: 'Interestelar',
        cinema: 'Cinema E',
        startTime: '17:30',
        director: 'Christopher Nolan',
        image: 'https://i0.wp.com/jornal.usp.br/wp-content/uploads/2022/05/CineCiencia-Interestelar-.png?fit=800%2C420&ssl=1',
        type: 'Ficção Científica',
        releaseYear: '2014',
        ageRating: '14',
      },
      '6': {
        title: 'O Rei Leão',
        cinema: 'Cinema F',
        startTime: '20:00',
        director: 'Jon Favreau',
        image: 'https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg',
        type: 'Animação',
        releaseYear: '2019',
        ageRating: 'Livre',
      },
    };

    return movies[id] || null;
  };

  const movieDetails = getMovieDetails(movieId);

  if (!movieDetails) {
    return (
      <View style={styles.container}>
        <Text>Filme não encontrado.</Text>
      </View>
    );
  }


  const { title, cinema, startTime, director, image, type, releaseYear, ageRating } = movieDetails;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.poster} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>Cinema: {cinema}</Text>
      <Text style={styles.info}>Hora de Início: {startTime}</Text>
      <Text style={styles.info}>Diretor: {director}</Text>
      <Text style={styles.info}>Gênero: {type}</Text>
      <Text style={styles.info}>Ano de Lançamento: {releaseYear}</Text>
      <Text style={styles.info}>Classificação: {ageRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: '#000000',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  info: {
    fontSize: 16,
    marginBottom: 3,
    color: '#ffffff',
  },
});

export default MovieDetailsScreen;