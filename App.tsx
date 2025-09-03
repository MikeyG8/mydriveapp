import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';


export default function App() {
  const age  = 18;
  let licenseyears = 0;
  let feedback = '';
  if (age >= 18)
    if (licenseyears >= 3)
    {
      feedback ='You are qaulified, safe driver.'
    }
    else
    {
    feedback = 'You are allowed to drive, YAY!'
    } else 
    {
    feedback = 'You are not allowed to drive yet.'
    }


  return (
    <View style={styles.container}>
      <Text style={styles.response}>{feedback}
        {/*This is the message that will be displayed to the user */}
      </Text>
    </View>
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
    color:'blue',
  },
});
