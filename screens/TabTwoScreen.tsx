import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First tell us what's your name?</Text>
      <Pressable style={styles.nextNameButton}>
        <Text style={styles.nextFormat}>next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginTop: 65,
    width: '80%',
  },
  nextNameButton: {
    backgroundColor: '#C8E6EC',
    width: '75%',
    alignItems: 'center',
    height: '9%',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
  },
  nextFormat: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,

  }
});
