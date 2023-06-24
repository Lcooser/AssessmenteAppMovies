import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieDetailsScreen from './MovieDetailsScreen';

// Componente Movie
const Movie = ({ movie }) => {
  const { title, cinema, startTime, director, image } = movie;

  return (
    <View style={styles.movieContainer}>
      <Image source={{ uri: image }} style={styles.poster} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>Cinema: {cinema}</Text>
      <Text style={styles.info}>Hora de Início: {startTime}</Text>
      <Text style={styles.info}>Diretor: {director}</Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  poster: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 3,
  },
});
// Componente HomeScreen
const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([
    {
      id: '1',
      title: 'Vingadores: Ultimato',
      cinema: 'Cinema A',
      startTime: '18:00',
      director: 'Anthony Russo, Joe Russo',
      image: 'https://picfiles.alphacoders.com/458/thumb-458644.jpg',
    },
    {
      id: '2',
      title: 'Pantera Negra',
      cinema: 'Cinema B',
      startTime: '20:30',
      director: 'Ryan Coogler',
      image: 'https://img.elo7.com.br/product/zoom/1D1DA32/poster-marvel-pantera-negra-lo003-tamanho-90-x-0-cm-quadro-pantera-negra.jpg',
    },
    {
      id: '3',
      title: 'Jurassic Park',
      cinema: 'Cinema C',
      startTime: '19:45',
      director: 'Steven Spielberg',
      image: 'https://www.shutterstock.com/image-vector/jurassic-world-dianosaur-amazing-t-600w-2183499281.jpg',
    },
    {
      id: '4',
      title: 'Matrix',
      cinema: 'Cinema D',
      startTime: '21:00',
      director: 'Lana Wachowski, Lilly Wachowski',
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/BJZJ6XQDENOQ5EPCCZLTK42OYM.jpg',
    },
    {
      id: '5',
      title: 'Interestelar',
      cinema: 'Cinema E',
      startTime: '17:30',
      director: 'Christopher Nolan',
      image: 'https://i0.wp.com/jornal.usp.br/wp-content/uploads/2022/05/CineCiencia-Interestelar-.png?fit=800%2C420&ssl=1',
    },
    {
      id: '6',
      title: 'O Rei Leão',
      cinema: 'Cinema F',
      startTime: '20:00',
      director: 'Jon Favreau',
      image: 'https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg',
    },
  ]);

  const renderMovie = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}>
        <Movie movie={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// Aplicativo
const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Informações dos Filmes' }} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ title: 'Detalhes do Filme' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
