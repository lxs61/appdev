/*************  ✨ Codeium Command 🌟  *************/
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function NavigationBar() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <Text style={styles.text}>PHYSICAL EDUCATION</Text>
      <Image style={styles.searchIcon} source={require('./assets/search1.png')} />
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 0,
    padding: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 31, 
  },
  searchIcon: {
    width: 29,
    height: 29,
    resizeMode: 'contain',
    marginLeft: 35,
  },
  line: {
    position: 'absolute',
    bottom: 0,
    left: 6,
    right: 16,
    height: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(128, 128, 128, 0.2)',
    width: '96%',
    marginHorizontal: '5%',
  },
});

/******  c9d40ff8-cc0d-466c-bc79-d45945c5b995  *******/