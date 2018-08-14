import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const genres = {
  "genres": [
      {
          "id": 28,
          "name": "Action"
      },
      {
          "id": 12,
          "name": "Adventure"
      },
      {
          "id": 16,
          "name": "Animation"
      },
      {
          "id": 35,
          "name": "Comedy"
      },
      {
          "id": 80,
          "name": "Crime"
      },
      {
          "id": 99,
          "name": "Documentary"
      },
      {
          "id": 18,
          "name": "Drama"
      },
      {
          "id": 10751,
          "name": "Family"
      },
      {
          "id": 14,
          "name": "Fantasy"
      },
      {
          "id": 36,
          "name": "History"
      },
      {
          "id": 27,
          "name": "Horror"
      },
      {
          "id": 10402,
          "name": "Music"
      },
      {
          "id": 9648,
          "name": "Mystery"
      },
      {
          "id": 10749,
          "name": "Romance"
      },
      {
          "id": 878,
          "name": "Science Fiction"
      },
      {
          "id": 10770,
          "name": "TV Movie"
      },
      {
          "id": 53,
          "name": "Thriller"
      },
      {
          "id": 10752,
          "name": "War"
      },
      {
          "id": 37,
          "name": "Western"
      }
  ]
}

const styles = StyleSheet.create({
    list: {
        marginHorizontal: 20,
        marginBottom: 20,
        width: width - 40,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    listLeft: {
      width: 130,
      height: 180
    },
    listRight: {
      flex: 1,
      padding: 5,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 8,
      flexWrap: 'wrap',
      alignContent: 'flex-start',
    },
    categoryList: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    category: {
      borderColor: '#000',
      borderWidth: 1,
      padding: 2,
      fontSize: 10,
      borderRadius: 2,
      marginRight: 5,
    }
})
const List = props => (
    <TouchableOpacity style={styles.list} onPress={props.onPress}>
      <Image 
          style={styles.listLeft}
          source={{uri: IMAGE_PATH + props.poster_path}}
        />
        <View style={styles.listRight}>
          <Text style={styles.title}>{props.title}</Text>
          <View style={styles.categoryList}>
            {props.genre_ids.map(genre => (
              <Text 
              style={styles.category}
              key={genre}>
                {genres.genres.map((value) => {
                  if(value.id === genre) {
                    return value.name
                  }
                })}
              </Text>
            ))}
          </View>
        </View>
    </TouchableOpacity>
)

export default List