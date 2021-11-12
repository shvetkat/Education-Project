import { Fontisto } from '@expo/vector-icons';
import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.hiName}>Hi Uzma!</Text>
      <Text style={styles.hiNameParagraph}>Let us help make your study life easier</Text>
      <Pressable style={styles.enterEmail}>
        <Text style={styles.buttonText}>Enter email address</Text>
      </Pressable>
      <Pressable style={styles.enterEmail}>
        <Text style={styles.buttonText}>Enter password</Text>
      </Pressable>
      <Pressable style={styles.enterEmail}>
        <Text style={styles.buttonText}>Confirm password</Text>
      </Pressable>
      <Text style={styles.orText}>or</Text>
      <Pressable style={styles.enterEmail}>
        <Text style={styles.buttonText}>Sign up with Google</Text>
      </Pressable>
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
  hiName: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '600',
    marginTop: 45,
    width: '80%',
  },
  hiNameParagraph: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 30,
    width: '80%',
  },
  enterEmail: {
      backgroundColor: '#EEEDED',
      width: '80%',
      height: '7%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '4%',
      borderRadius: 30,
  },
  buttonText: {
      color: 'black',
      fontFamily: 'Avenir',
      fontWeight: '700',
      fontSize: 15,
  },
  orText: {
      color: 'black',
      margin: '4%',
      fontSize: 20,
      fontWeight: '600',
      marginBottom: '8%',
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
