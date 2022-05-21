import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DataTable} from 'react-native-paper';
const Workout = ({navigation, route}) => {
  const prevParams = route.params;

  const dataDummy = [
    {
      key: 1,
      exercise: 'Squat',
      sets: 3,
      reps: 5,
      RPE: `80%`,
    },
  ];
  // store params
  const selectedItems = route.params;
  console.log(selectedItems);

  return (
    <View style={Styles.container}>
      {/* insert view for padding later */}
      <Text style={Styles.Title}>Suggested Workout</Text>
      <View style={Styles.inlineDetails}>
        <Text style={Styles.secondaryTitle}>Target Muscle</Text>
        <Text style={Styles.secondaryTitle}>Intensity Level</Text>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            <Text
              style={{
                color: '#E0E0E0',
                fontSize: 20,
              }}>
              Exercise
            </Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text style={{color: '#E0E0E0', fontSize: 20}}>Sets</Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text style={{color: '#E0E0E0', fontSize: 20}}>Reps</Text>
          </DataTable.Title>
        </DataTable.Header>
        <ScrollView style={Styles.scrollableContainer}>
          {selectedItems.map(item => {
            return (
              <DataTable.Row key={item.key}>
                <DataTable.Cell>
                  <Text style={{color: '#E0E0E0', fontSize: 13}}>
                    {item.name}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text
                    style={{
                      color: '#E0E0E0',
                      fontSize: 18,
                    }}>
                    {item.sets}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text
                    style={{
                      color: '#E0E0E0',
                      fontSize: 18,
                    }}>
                    {item.reps}
                  </Text>
                </DataTable.Cell>
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
    backgroundColor: 'black',
  },
  Title: {
    fontSize: 32,
    color: '#E0E0E0',
    fontWeight: 'bold',
    marginLeft: 13,
  },
  secondaryTitle: {
    fontSize: 18,
    color: '#E0E0E0',
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
    color: '#E0E0E0',
    backgroundColor: '#0070ff',
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default Workout;
