import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DataTable} from 'react-native-paper';

const WorkoutDetail = ({navigation}) => {
  const dataDummy = [
    {
      key: 1,
      exercise: 'Squat',
      sets: 3,
      reps: 5,
      RPE: `80%`,
    },
  ];
  return (
    <View style={Styles.container}>
      <Image
        source={require('./../../WorkoutBuilder/Images/Dumbells.jpg')}
        style={Styles.HeroImage}
      />
      {/* insert view for padding later */}
      <Text style={Styles.Title}>Workout One</Text>
      <View style={Styles.inlineDetails}>
        <Text style={Styles.secondaryTitle}>Targeted Muscles</Text>
        <Text style={Styles.secondaryTitle}>Intensity Level</Text>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Exercise</DataTable.Title>
          <DataTable.Title numeric>Sets</DataTable.Title>
          <DataTable.Title numeric>Reps</DataTable.Title>
          <DataTable.Title numeric>RPE</DataTable.Title>
        </DataTable.Header>
        <ScrollView style={Styles.scrollableContainer}>
          {dataDummy.map(item => {
            return (
              <DataTable.Row key={item.key}>
                <DataTable.Cell>{item.exercise}</DataTable.Cell>
                <DataTable.Cell numeric>{item.sets}</DataTable.Cell>
                <DataTable.Cell numeric>{item.reps}</DataTable.Cell>
                <DataTable.Cell numeric>{item.RPE}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </ScrollView>
      </DataTable>
      <TouchableOpacity>
        <Text style={Styles.button}>Log Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  Title: {
    fontSize: 32,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 13,
  },
  secondaryTitle: {
    fontSize: 18,
    color: '#000000',
    padding: 13,
  },
  HeroImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.42,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  inlineDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollableContainer: {
    height: Dimensions.get('window').height * 0.3,
  },
  button: {
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#000000',
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
});
export default WorkoutDetail;
