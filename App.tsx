import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView  } from 'react-native';


export default function App() {
  const age  = 20;
  let licenseyears = 5;
  let feedback = '';
  if (age >= 18)
    if (licenseyears >= 3){

      feedback ='You are qaulified, safe driver.'
    }
    else
    {
    feedback = 'You are allowed to drive, YAY!'
    } else 
    {
    feedback = 'You are not allowed to drive yet.'
    } 


    let drivingRank = '';
    switch (licenseyears) {
      case 0:
      drivingRank = 'Newbie driver';
      break;
      case 1:
        drivingRank = 'Rookie with 1 year driving experience';
      break;
      case 2:
        drivingRank = 'Intermediate driver';
      break;
      case 3:
      case 4:
        drivingRank = 'Experiences driver';
      break;
      default:
        drivingRank = 'Veteran driver with many years of experience';    
    }


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={[styles.response, {fontSize:48, color:'yellow', marginBottom:35}]}>Driving License Checker</Text>
      <Image source={{uri:'https://images.pexels.com/photos/451590/pexels-photo-451590.jpeg',}}
      style = {styles.Image}/>
      <Text style={styles.response}>Age: {age}</Text>
      <Text style={styles.response}>License Years: {licenseyears}</Text>
      <Text style={[styles.response, {fontSize:48, color:'green', marginBottom:35}]}>
        {feedback}
        {/*This is the message that will be displayed to the user */}
      </Text>

      <Text style={[styles.response, {fontSize:48, color:'red', marginBottom:35}]}>
        {drivingRank}
        {/*This is the message that will be displayed to the user */}
      </Text>

    </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'slategrey',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  response: {
    fontSize: 28,
    color:'black',
    fontWeight: 'bold',
    marginTop: 30, 

  },

  Image:{
    width:800,
    height:500,
    resizeMode:'contain'
  },

  content: {
    width: '100%',
    alignItems: 'center',
  },

});
