import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CircularPicker from 'react-native-circular-picker';
import {Slider} from 'react-native-elements';
const MoreInfo = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: '#E0E0E0',
          marginTop: 20,
        }}>
        This info will help us determine appropriate training volume for you.
      </Text>
      {/* custom slider code */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#E0E0E0',
          marginTop: 20,
          textAlign: 'center',
        }}>
        Number of Training Days/week:# days
      </Text>

      <Slider
        style={styles.slider}
        // value={2} {set state value here}
        step={1}
        minimumValue={1}
        maximumValue={7}
        // onValueChange={value => console.log(value)} {set setter function here}
        minimumTrackTintColor="#0070ff"
        maximumTrackTintColor="#0070ff"
        thumbTintColor="white"
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#E0E0E0',
          marginTop: 20,
          textAlign: 'center',
        }}>
        Number of Hours you sleep:# hours
      </Text>
      <Slider
        style={styles.slider}
        // value={2} {set state value here}
        step={1}
        minimumValue={1}
        maximumValue={12}
        onValueChange={value => console.log(value)}
        minimumTrackTintColor="#0070ff"
        maximumTrackTintColor="#0070ff"
        thumbTintColor="white"
      />
      {/* CIRCULAT SLIDER-INTENSITY */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#E0E0E0',
          marginTop: 20,
          textAlign: 'center',
        }}>
        Training Intensity
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#E0E0E0',
          marginTop: 5,
          textAlign: 'center',
        }}>
        rotate if you want to change
      </Text>
      <View style={styles.circularPicker}>
        <CircularPicker
          size={250}
          steps={[15, 40, 70, 100]}
          gradients={{
            0: ['rgb(255, 97, 99)', 'rgb(247, 129, 119)'],
            15: ['rgb(255, 204, 0)', 'rgb(255, 214, 10)'],
            40: ['rgb(52, 199, 89)', 'rgb(48, 209, 88)'],
            70: ['rgb(0, 122, 255)', 'rgb(10, 132, 255)'],
          }}>
          <>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                marginBottom: 8,
                color: '#E0E0E0',
              }}>
              Suggested Intensity.
            </Text>
            <Text style={{textAlign: 'center', color: '#E0E0E0'}}>
              Moderate
            </Text>
          </>
        </CircularPicker>
      </View>
      <TouchableOpacity style={styles.button}>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // attractive black color code
    backgroundColor: '#000000',
    paddingLeft: 15,
    paddingRight: 15,
  },
  slider: {
    marginTop: 5,
    marginBottom: 3,
  },
  circularPicker: {
    marginTop: 5,
    marginBottom: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 16,
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0070ff',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 50,
  },
});
export default MoreInfo;
