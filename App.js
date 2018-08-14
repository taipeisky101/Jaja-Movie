import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

fetchData = async () => {
  const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4679f09b18b0eeea0593c6287ae8a4e1&language=en-US&page=1");
  const json = await response.json();
  this.setState({ data: json.results });
};

  render() {
    return <View style={styles.container}>
        <FlatList data={this.state.data} keyExtractor={(x, i) => i} renderItem={({ item }) => <Text>
              {item.id} {item.title}
            </Text>} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
