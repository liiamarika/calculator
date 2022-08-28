import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

const [result, setResult] = useState(0);
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');


  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}> 
       <Text>Result: {result}</Text>
       <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
       keyboardType='numeric'
       value={num1}
       onChangeText={text => setNum1(text)} 
       />
       <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
       keyboardType='numeric'
       value={num2}
       onChangeText={text => setNum2(text)} 
       />
     </View>
     <View style={styles.buttonContainer}>
      <Button onPress={() => setResult(parseFloat(num1) + parseFloat(num2))} title="+"/>
      <Button onPress={() => setResult(num1 - num2)} title="-"/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 2,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 3,
    width: 100,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
