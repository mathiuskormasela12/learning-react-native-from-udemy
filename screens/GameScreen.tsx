import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from '../components/Title';

const GameScreen: React.FC = () => {
  return (
   <View style={styles.screen}>
     <Title>Opponent's Guess</Title>
     {/* GUESS */}
     <View>
      <Text>Higher or lower?</Text>
      {/* + - */}
     </View>
     {/* <View>LOG ROUNDS</View> */}
   </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }
})