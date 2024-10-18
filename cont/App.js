import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function NavigationBar() {
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.text}>PHYSICAL EDUCATION</Text>
        <Image style={styles.searchIcon} source={require('./assets/search1.png')} />
      </View>
      <View style={styles.topLine} />
      <View style={styles.contentArea} />
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomLine} />
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.navText}>SPORT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.navText}>EXERCISE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.navText}>ABOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 45,
    paddingBottom: 3,
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
  topLine: {
    height: 2,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginTop: 8,
    marginHorizontal: '5%',
  },
  bottomLine: {
    height: 2,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginHorizontal: '5%',
  },
  contentArea: {
    flex: 1,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
