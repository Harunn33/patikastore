import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import Card from './components/card';
import products from './products.json';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..." />
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Card product={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  title: {
    color: '#881088',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default App;
