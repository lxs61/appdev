import React from 'react';
import { Image, ScrollView, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const individualImages = [
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
];

const pairImages = [
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
];

const teamImages = [
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
  require('./assets/box.jpg'),
];

const renderHorizontalImages = (images) => (
  <FlatList
    horizontal
    data={images}
    renderItem={({ item }) => <Image source={item} style={styles.image} />}
    keyExtractor={(item, index) => index.toString()}
    showsHorizontalScrollIndicator={false}
  />
);

export default function NavigationBar({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.text}>SPORTS</Text>
      </View>
      <View style={styles.topLine} />

      <ScrollView style={styles.contentArea}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>INDIVIDUAL</Text>
          {renderHorizontalImages(individualImages)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PAIR</Text>
          {renderHorizontalImages(pairImages)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TEAM</Text>
          {renderHorizontalImages(teamImages)}
        </View>

        <View style={styles.extraSpace} />
      </ScrollView>

      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomLine} />
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => console.log('Sport pressed')}>
            <View style={styles.sportTextContainer}>
              <Text style={styles.navText}>SPORT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Exercise pressed')}>
            <Text style={styles.navText}>EXERCISE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('About pressed')}>
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 45,
    paddingBottom: 3,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  topLine: {
    height: 2,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginTop: 8,
    marginHorizontal: '5%',
  },
  contentArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red', 
  },
  image: {
    width: 107,
    height: 172,
    marginRight: 10,
    borderRadius: 10,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  bottomLine: {
    height: 2,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginHorizontal: '5%',
  },
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sportTextContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)', 
    padding: 10,
    borderRadius: 5,
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  extraSpace: {
    height: 100, 
  },
});
