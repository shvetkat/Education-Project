import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Uzma.</Text>
      <Text style={styles.middleText}>How would you like to study today?</Text>
      <Pressable style={styles.button1}>
        <Text style={styles.textInP1Button}>I'm studying alone</Text>
      </Pressable>
      <Pressable style={styles.button2}>
        <Text style={styles.textInP1Button}>I'm studying in a group</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 45,
    color: 'black',
    width: '90%',
    marginLeft: 25,
    marginTop: 65,
    marginBottom: 45,
  },
  middleText: {
    fontSize:25,
    color: 'black',
    width: '70%',
    marginLeft: 25,
    marginBottom: 45,
  },
  button1: {
    backgroundColor: '#B9CAB3',
    height: 120,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  button2: {
    backgroundColor: '#E2EEDD',
    height: 120,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 45,
  },
  textInP1Button: {
    color: 'black',
    fontSize: 20,
  }
});
