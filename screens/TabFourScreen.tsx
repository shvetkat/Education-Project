// import * as React from 'react';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { Svg } from 'react-native-svg';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFourScreen() {

    const [name, setName] = useState('name');

  return (
    <View style={styles.container}>
      <Svg>
        <Image source={require('./Group1.svg')}/>
      </Svg>
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
    marginLeft: 30,
    marginRight: 30,
    width: '80%',
  },
  askName: {
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 130,
  },
  nameInput: {
    backgroundColor: 'lightgray',
    width: 250,
    height: 40,
    borderRadius: 15,
    padding: 10,
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
