import {default as React, default as React, useRef} from 'react';
import {
  Animated,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {heightWeight as Styles} from '../Style/index';

const screen = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

const index = props => {
  const navigation = props.navigation;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
      <Animated.View
        style={[
          ,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <ImageBackground
          source={require('../Images/welcomePage.jpg')}
          style={Styles.background}>
          <Text style={Styles.Fitnessio}>Fitnessio</Text>
        </ImageBackground>

        <View style={Styles.bottom}>
          <View style={Styles.bottomContainer}>
            <Text style={Styles.welcomeText}>Welcome</Text>
            <Text>Please enter your Details</Text>
          </View>
        </View>

        <View style={Styles.loginContainer}>
          <LinearGradient
            start={{x: 0.3, y: 0.25}}
            end={{x: 0.5, y: 0.7}}
            locations={[0.3, 1.6, 0.6]}
            colors={['#59442F', '#503923', '#211f1f']}
            style={Styles.linearGradient}>
            <TouchableOpacity
              onPress={() => {
                fadeOut();
                setTimeout(() => navigation.push('SelectGole'), 3001);
              }}>
              <Text style={Styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Animated.View>
    </ScrollView>
  );
};
export default index;
