import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const Card = ({product}) => {
  const [stock, setStock] = useState('');
  const inStock = () => {
    if (product.inStock == false) {
      setStock('STOKTA YOK');
    } else {
      setStock('');
    }
  };
  useEffect(() => {
    inStock();
  });
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: product.imgURL,
        }}
      />
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.stock}>{stock}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#eceff1',
    borderRadius: 8,
    height: Dimensions.get('window').height * 0.4,
    justifyContent: 'space-evenly',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 4,
  },
  image: {
    height: 170,
    borderRadius: 8,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  price: {
    color: '#808080',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stock: {
    color: '#ff0000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
