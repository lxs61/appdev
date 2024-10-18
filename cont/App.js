import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function NavigationBar() {
  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topNav}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.text}>PHYSICAL EDUCATION</Text>
        <Image style={styles.searchIcon} source={require('./assets/search1.png')} />
      </View>
      {/* Line for top navigation */}
      <View style={styles.topLine} />

      {/* Content Area */}
      <View style={styles.contentArea}>
        {/* Place for your main content */}
      </View>

      {/* Bottom Navigation Bar Container */}
      <View style={styles.bottomNavContainer}>
        {/* Line for bottom navigation */}
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
    flex: 1, // Ensures the container takes full height
    backgroundColor: 'white',
  },
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 45,  // Margin at the top of the top navigation bar
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
  
  // Line styles for top navigation
  topLine: {
    height: 2,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginTop: 8, // Space between top navigation and line
    marginHorizontal: '5%', // Ensure space at the sides
  },
  
  /* Line for Bottom Navigation */
  bottomLine: {
    height: 2,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginHorizontal: '5%', // Ensure space at the sides
  },

  /* Content Area */
  contentArea: {
    flex: 1, // Allows the content area to take up the available space between top and bottom navs
  },

  /* Bottom Navigation Bar Container */
  bottomNavContainer: {
    position: 'absolute', // Position it at the bottom
    bottom: 0, // Align to the bottom
    left: 0, // Align to the left edge
    right: 0, // Align to the right edge
    backgroundColor: 'white', // Ensure the background is white
  },
  
  /* Bottom Navigation Bar Styles */
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
