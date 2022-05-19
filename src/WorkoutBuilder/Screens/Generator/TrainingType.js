import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TrainingType = ({navigation, route}) => {
  return (
    <View style={Styles.container}>
      <ScrollView>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#E0E0E0',
            marginTop: 20,
          }}>
          Select the type of Prefered Training.
        </Text>
        <View styles={Styles.choiceContainer}>
          {/* choice one-BodyBuilding */}
          <TouchableOpacity style={Styles.choice}>
            <Text style={Styles.choiceTitle}>Body Building</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={Styles.choiceDescription}>
                bodybuilding, a regimen of exercises designed to enhance the
                human body's muscular development and promote general health and
                fitness
              </Text>
              <Image
                style={Styles.choiceImage}
                source={require('./../../../WorkoutBuilder/Images/bb.jpg')}
              />
            </View>
          </TouchableOpacity>
          {/* choice two-powerLifting */}
          <TouchableOpacity style={Styles.choice}>
            <Text style={Styles.choiceTitle}>Power Lifting</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={Styles.choiceDescription}>
                Powerlifting focuses on maximal strength in the three big
                barbell lifts, while bodybuilding is about maximizing muscle
                mass and reducing body fat to extreme levels
              </Text>
              <Image
                style={Styles.choiceImage}
                source={require('./../../../WorkoutBuilder/Images/powerlifting.jpg')}
              />
            </View>
          </TouchableOpacity>
          {/* choice three-Crossfit */}
          <TouchableOpacity style={Styles.choice}>
            <Text style={Styles.choiceTitle}>Cross Fit</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={Styles.choiceDescription}>
                CrossFit is a branded fitness regimen that involves constantly
                varied functional movements performed at high intensity
              </Text>
              <Image
                style={Styles.choiceImage}
                source={require('./../../../WorkoutBuilder/Images/crossfit.jpg')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.choice}>
            <Text style={Styles.choiceTitle}>Body Weight</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={Styles.choiceDescription}>
                Bodyweight exercises are a type of strength-training where you
                use your own weight to provide resistance against gravity. you
                essentially use your body alone without any other exercise
                equipment.
              </Text>
              <Image
                style={Styles.choiceImage}
                source={require('./../../../WorkoutBuilder/Images/bodyw.jpg')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => {
          navigation.navigate('MoreInfo');
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#E0E0E0',
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // attractive black color code
    backgroundColor: '#000000',
  },
  choiceContainer: {
    // center align this container
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choice: {
    padding: 12,
    borderColor: '#0070ff',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: '#0070ff',
    backgroundColor: 'black',
  },
  choiceTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  choiceDescription: {
    width: '70%',
    fontSize: 15,
    color: 'white',

    marginTop: 2,
    lineHeight: 20,
  },
  choiceImage: {
    resizeMode: 'stretch',
    width: '30%',
    height: '100%',
    marginLeft: 5,
    marginRight: 1,
    borderRadius: 10,
  },
  button: {
    // center align this button
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0070ff',
    borderRadius: 10,
    width: '100%',
    height: 50,
    marginTop: 10,
  },
});
export default TrainingType;
