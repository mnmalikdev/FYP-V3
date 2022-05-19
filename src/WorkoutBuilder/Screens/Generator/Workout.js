import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Workout = ({navigation, route}) => {
  return (
    <View style={Styles.container}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#E0E0E0',
          textTransform: 'uppercase',
        }}>
        Choose a targeted Muscle you want to hit !
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingLeft: 11,
    paddingRight: 11,
  },
});

export default Workout;
