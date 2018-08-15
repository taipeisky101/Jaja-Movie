import React, { Component } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  View
} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation';
import List from './List';
import { Constants } from 'expo';
import axios from 'axios';

/**
 * Styles
 */

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  categoryTitle: {
    fontSize: 26,
    padding: 10
  },
  headerHome: {
    backgroundColor: '#dbe9ff'
  },
  movieDetail: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  movieImage: {
    width: 130,
    height: 180,
    marginBottom: 10
  },
  categoryList: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  category: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 2,
    fontSize: 10,
    borderRadius: 2,
    marginRight: 5
  }
});

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

/**
 * Test Data
 */

export default class MovieList extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=4679f09b18b0eeea0593c6287ae8a4e1`
      )
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      });
  }

  render() {
    return (
      <MyApp
        screenProps={{
          movies: this.state.movies
        }}
      />
    );
  }
}

const genres = {
  genres: [
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 12,
      name: 'Adventure'
    },
    {
      id: 16,
      name: 'Animation'
    },
    {
      id: 35,
      name: 'Comedy'
    },
    {
      id: 80,
      name: 'Crime'
    },
    {
      id: 99,
      name: 'Documentary'
    },
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10751,
      name: 'Family'
    },
    {
      id: 14,
      name: 'Fantasy'
    },
    {
      id: 36,
      name: 'History'
    },
    {
      id: 27,
      name: 'Horror'
    },
    {
      id: 10402,
      name: 'Music'
    },
    {
      id: 9648,
      name: 'Mystery'
    },
    {
      id: 10749,
      name: 'Romance'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 10770,
      name: 'TV Movie'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'War'
    },
    {
      id: 37,
      name: 'Western'
    }
  ]
};

const data = {
  page: 1,
  total_results: 6068,
  total_pages: 304,
  results: [
    {
      vote_count: 1854,
      id: 19404,
      video: false,
      vote_average: 9.3,
      title: 'Dilwale Dulhania Le Jayenge',
      popularity: 10.865,
      poster_path: '/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg',
      original_language: 'hi',
      original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
      genre_ids: [35, 18, 10749],
      backdrop_path: '/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg',
      adult: false,
      overview:
        'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
      release_date: '1995-10-20'
    },
    {
      vote_count: 10693,
      id: 278,
      video: false,
      vote_average: 8.6,
      title: 'The Shawshank Redemption',
      popularity: 28.332,
      poster_path: '/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
      original_language: 'en',
      original_title: 'The Shawshank Redemption',
      genre_ids: [18, 80],
      backdrop_path: '/j9XKiZrVeViAixVRzCta7h1VU9W.jpg',
      adult: false,
      overview:
        'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
      release_date: '1994-09-23'
    },
    {
      vote_count: 8160,
      id: 238,
      video: false,
      vote_average: 8.6,
      title: 'The Godfather',
      popularity: 20.722,
      poster_path: '/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
      original_language: 'en',
      original_title: 'The Godfather',
      genre_ids: [18, 80],
      backdrop_path: '/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg',
      adult: false,
      overview:
        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
      release_date: '1972-03-14'
    },
    {
      vote_count: 2676,
      id: 372058,
      video: false,
      vote_average: 8.5,
      title: 'Your Name.',
      popularity: 20.557,
      poster_path: '/xq1Ugd62d23K2knRUx6xxuALTZB.jpg',
      original_language: 'ja',
      original_title: '君の名は。',
      genre_ids: [10749, 16, 18],
      backdrop_path: '/7OMAfDJikBxItZBIug0NJig5DHD.jpg',
      adult: false,
      overview:
        'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
      release_date: '2016-08-26'
    },
    {
      vote_count: 4721,
      id: 240,
      video: false,
      vote_average: 8.5,
      title: 'The Godfather: Part II',
      popularity: 15.767,
      poster_path: '/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg',
      original_language: 'en',
      original_title: 'The Godfather: Part II',
      genre_ids: [18, 80],
      backdrop_path: '/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg',
      adult: false,
      overview:
        'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
      release_date: '1974-12-20'
    },
    {
      vote_count: 5724,
      id: 129,
      video: false,
      vote_average: 8.5,
      title: 'Spirited Away',
      popularity: 23.618,
      poster_path: '/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg',
      original_language: 'ja',
      original_title: '千と千尋の神隠し',
      genre_ids: [16, 10751, 14],
      backdrop_path: '/djgM2d3e42p9GFQObg6lwK2SVw2.jpg',
      adult: false,
      overview:
        'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
      release_date: '2001-07-20'
    },
    {
      vote_count: 6210,
      id: 424,
      video: false,
      vote_average: 8.5,
      title: "Schindler's List",
      popularity: 20.31,
      poster_path: '/yPisjyLweCl1tbgwgtzBCNCBle.jpg',
      original_language: 'en',
      original_title: "Schindler's List",
      genre_ids: [18, 36, 10752],
      backdrop_path: '/cTNYRUTXkBgPH3wP3kmPUB5U6dA.jpg',
      adult: false,
      overview:
        'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
      release_date: '1993-12-15'
    },
    {
      vote_count: 6193,
      id: 497,
      video: false,
      vote_average: 8.4,
      title: 'The Green Mile',
      popularity: 21.855,
      poster_path: '/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg',
      original_language: 'en',
      original_title: 'The Green Mile',
      genre_ids: [14, 18, 80],
      backdrop_path: '/Rlt20sEbOQKPVjia7lUilFm49W.jpg',
      adult: false,
      overview:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cellblock's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      release_date: '1999-12-10'
    },
    {
      vote_count: 5565,
      id: 637,
      video: false,
      vote_average: 8.4,
      title: 'Life Is Beautiful',
      popularity: 14.125,
      poster_path: '/f7DImXDebOs148U4uPjI61iDvaK.jpg',
      original_language: 'it',
      original_title: 'La vita è bella',
      genre_ids: [35, 18],
      backdrop_path: '/bORe0eI72D874TMawOOFvqWS6Xe.jpg',
      adult: false,
      overview:
        'A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.',
      release_date: '1997-12-20'
    },
    {
      vote_count: 188,
      id: 14537,
      video: false,
      vote_average: 8.4,
      title: 'Harakiri',
      popularity: 8.964,
      poster_path: '/5konZnIbcAxZjP616Cz5o9bKEfW.jpg',
      original_language: 'ja',
      original_title: '切腹',
      genre_ids: [28, 18, 36],
      backdrop_path: '/dT51Ul1GN5HSOVokDnnCk54VkdA.jpg',
      adult: false,
      overview:
        "Peace in 17th-century Japan causes the Shogunate's breakup of warrior clans, throwing thousands of samurai out of work and into poverty. An honorable end to such fate under the samurai code is ritual suicide, or hara-kiri.",
      release_date: '1962-09-15'
    },
    {
      vote_count: 176,
      id: 12493,
      video: false,
      vote_average: 8.4,
      title: 'High and Low',
      popularity: 7.165,
      poster_path: '/tgNjemQPG96uIezpiUiXFcer5ga.jpg',
      original_language: 'ja',
      original_title: '天国と地獄',
      genre_ids: [80, 18, 9648, 53],
      backdrop_path: '/2xliq3zIrQPIWG66Fc0bgVoBUWc.jpg',
      adult: false,
      overview:
        "An executive of a shoe company becomes a victim of extortion when his chauffeur's son is kidnapped and held for ransom.",
      release_date: '1963-03-01'
    },
    {
      vote_count: 12085,
      id: 680,
      video: false,
      vote_average: 8.4,
      title: 'Pulp Fiction',
      popularity: 23.687,
      poster_path: '/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
      original_language: 'en',
      original_title: 'Pulp Fiction',
      genre_ids: [53, 80],
      backdrop_path: '/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg',
      adult: false,
      overview:
        "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      release_date: '1994-09-10'
    },
    {
      vote_count: 13230,
      id: 550,
      video: false,
      vote_average: 8.4,
      title: 'Fight Club',
      popularity: 24.67,
      poster_path: '/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
      original_language: 'en',
      original_title: 'Fight Club',
      genre_ids: [18],
      backdrop_path: '/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg',
      adult: false,
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      release_date: '1999-10-15'
    },
    {
      vote_count: 1715,
      id: 311,
      video: false,
      vote_average: 8.4,
      title: 'Once Upon a Time in America',
      popularity: 14.968,
      poster_path: '/fqP3Q7DWMFqW7mh11hWXbNwN9rz.jpg',
      original_language: 'en',
      original_title: 'Once Upon a Time in America',
      genre_ids: [18, 80],
      backdrop_path: '/vnT6HzjLSDrAweHn9xWykb8Ii6T.jpg',
      adult: false,
      overview:
        'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
      release_date: '1984-05-23'
    },
    {
      vote_count: 3695,
      id: 539,
      video: false,
      vote_average: 8.4,
      title: 'Psycho',
      popularity: 14.973,
      poster_path: '/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg',
      original_language: 'en',
      original_title: 'Psycho',
      genre_ids: [18, 27, 53],
      backdrop_path: '/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg',
      adult: false,
      overview:
        'When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.',
      release_date: '1960-06-16'
    },
    {
      vote_count: 15693,
      id: 155,
      video: false,
      vote_average: 8.4,
      title: 'The Dark Knight',
      popularity: 29.491,
      poster_path: '/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
      original_language: 'en',
      original_title: 'The Dark Knight',
      genre_ids: [18, 28, 80, 53],
      backdrop_path: '/hqkIcbrOHL86UncnHIsHVcVmzue.jpg',
      adult: false,
      overview:
        'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
      release_date: '2008-07-16'
    },
    {
      vote_count: 216,
      id: 18491,
      video: false,
      vote_average: 8.4,
      title: 'Neon Genesis Evangelion: The End of Evangelion',
      popularity: 8.574,
      poster_path: '/5JYzfyKBwReaQ41WFhqXgOZnPWV.jpg',
      original_language: 'ja',
      original_title: '新世紀エヴァンゲリオン劇場版 THE END OF EVANGELION',
      genre_ids: [18, 878, 16],
      backdrop_path: '/zCsHUIws5dy7xbwTntRnOQqaMTh.jpg',
      adult: false,
      overview:
        'The second of two theatrically released follow-ups to the Neon Genesis Evangelion series. Comprising of two alternate episodes which were first intended to take the place of episodes 25 and 26, this finale answers many of the questions surrounding the series, while also opening up some new possibilities',
      release_date: '1997-07-19'
    },
    {
      vote_count: 1503,
      id: 12477,
      video: false,
      vote_average: 8.4,
      title: 'Grave of the Fireflies',
      popularity: 0.01,
      poster_path: '/4u1vptE8aXuzb5zauZTmikyectV.jpg',
      original_language: 'ja',
      original_title: '火垂るの墓',
      genre_ids: [16, 18, 10752],
      backdrop_path: '/fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg',
      adult: false,
      overview:
        'In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.',
      release_date: '1988-04-16'
    },
    {
      vote_count: 6229,
      id: 244786,
      video: false,
      vote_average: 8.4,
      title: 'Whiplash',
      popularity: 27.869,
      poster_path: '/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg',
      original_language: 'en',
      original_title: 'Whiplash',
      genre_ids: [18],
      backdrop_path: '/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg',
      adult: false,
      overview:
        'Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.',
      release_date: '2014-10-10'
    },
    {
      vote_count: 414,
      id: 313106,
      video: false,
      vote_average: 8.4,
      title: 'Doctor Who: The Day of the Doctor',
      popularity: 6.436,
      poster_path: '/lQy2QVcacuH55k37K9Ox0gw3YpZ.jpg',
      original_language: 'en',
      original_title: 'Doctor Who: The Day of the Doctor',
      genre_ids: [878, 12],
      backdrop_path: '/8bxjRFqFztBoXdVEx6q2u66a0s1.jpg',
      adult: false,
      overview:
        "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion. All of reality is at stake as the Doctor's own dangerous past comes back to haunt him.",
      release_date: '2013-11-23'
    }
  ]
};

/**
 * Home
 */
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Movie List',
    headerStyle: styles.headerHome,
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Image
          style={{ width: 40, height: 30 }}
          resizeMode={'contain'}
          source={require('./menu.png')}
        />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <View style={styles.view1}>
        <FlatList
          renderItem={({ item }) => (
            <List
              {...item}
              onPress={() => this.props.navigation.navigate('Detail', item)}
            />
          )}
          data={this.props.screenProps.movies}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Detail',
    headerStyle: styles.headerHome
  });

  render() {
    const navigate = this.props.navigation.state.params;
    console.log(this.props.navigation.state.params);
    return (
      <View style={styles.movieDetail}>
        <Text style={styles.movieTitle}>{navigate.title}</Text>
        <Image
          style={styles.movieImage}
          source={{ uri: IMAGE_PATH + navigate.poster_path }}
        />
        <View style={styles.categoryList}>
          {navigate.genre_ids.map(genre => (
            <Text style={styles.category} key={genre}>
              {genres.genres.map(value => {
                if (value.id === genre) {
                  return value.name;
                }
              })}
            </Text>
          ))}
        </View>
        <Text>{navigate.overview}</Text>
      </View>
    );
  }
}

/**
 * Define Stack Structure
 */

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen }
});

/**
 * Drawer
 */

const MyApp = createDrawerNavigator(
  {
    HomeStack: { screen: HomeStack }
  },
  {
    drawerWidth: 300,
    contentComponent: props => (
      <ScrollView>
        <View style={{ paddingTop: Constants.statusBarHeight }}>
          <Text style={styles.categoryTitle}>Category</Text>
        </View>
        <DrawerItems {...props} />
      </ScrollView>
    )
  }
);
