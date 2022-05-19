import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Plus from 'react-native-vector-icons/dist/FontAwesome';
import Card from '../Components/Card';
const Plans = props => {
  const navigation = props.navigation;
  const route = props.route;

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.block}>
          <Card />
          <Card />
          <Card />
        </View>
        {/* make a sticky round button with blue background in the bottom with a plus icon */}
      </ScrollView>
      <TouchableOpacity
        style={Styles.roundButton}
        onPress={() => {
          navigation.navigate('TrainingType');
        }}>
        <Plus name="plus" size={14} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  block: {
    color: 'white',
  },
  roundButton: {
    backgroundColor: '#0070ff',
    width: 55,
    height: 55,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.9,
    borderColor: '#E0E0E0',
    shadowColor: '#E0E0E0',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
});
export default Plans;
