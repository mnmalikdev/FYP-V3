import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Plus from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import {homeStyle as styles} from './testStyles';

// get pureComponent

const Logger = props => {
  const navigation = props.navigation;
  const route = props.route;
  // -----------Ftn code for importing DAata------------------------------
  //  total()
  // const selectedItems = props.route.params ? props.route.params[0] : '';
  // const RPE = props.route.params ? props.route.params[1] : '';
  // const reps = props.route.params ? props.route.params[2] : '';
  // const sets = props.route.params ? props.route.params[3] : '';

  // var total = Array(selectedItems.length);

  // for (var i = 0; i < selectedItems.length; i++) {
  //   total[i] = {
  //     id: selectedItems[i].id,
  //     item: selectedItems[i].item,
  //     sets: sets[i],
  //     reps: reps[i],
  //     RPE: RPE[i],
  //   };
  // }

  // join selectedItems and Volume into one array of objects
  const total = [
    [
      {RPE: '3', id: '0001', item: '3/4 sit-up', reps: '2', sets: '1'},
      {RPE: '6', id: '0002', item: '45° side bend', reps: '5', sets: '4'},
      {RPE: '9', id: '0003', item: 'air bike', reps: '8', sets: '7'},
    ],
    [
      {RPE: '4', id: '0001', item: '3/4 sit-up', reps: '2', sets: '1'},
      {RPE: '6', id: '0002', item: '45° side bend', reps: '5', sets: '4'},
      {RPE: '9', id: '0003', item: 'air bike', reps: '8', sets: '7'},
    ],

    [
      {RPE: '5', id: '0001', item: '3/4 sit-up', reps: '2', sets: '1'},
      {RPE: '6', id: '0002', item: '45° side bend', reps: '5', sets: '4'},
      {RPE: '9', id: '0003', item: 'air bike', reps: '8', sets: '7'},
    ],

    [
      {RPE: '6', id: '0001', item: '3/4 sit-up', reps: '2', sets: '1'},
      {RPE: '6', id: '0002', item: '45° side bend', reps: '5', sets: '4'},
      {RPE: '9', id: '0003', item: 'air bike', reps: '8', sets: '7'},
    ],

    [
      {RPE: '7', id: '0001', item: '3/4 sit-up', reps: '2', sets: '1'},
      {RPE: '6', id: '0002', item: '45° side bend', reps: '5', sets: '4'},
      {RPE: '9', id: '0003', item: 'air bike', reps: '8', sets: '7'},
    ],

    [
      {RPE: '8', id: '0001', item: '3/4 sit-up', reps: '2', sets: '1'},
      {RPE: '6', id: '0002', item: '45° side bend', reps: '5', sets: '4'},
      {RPE: '9', id: '0003', item: 'air bike', reps: '8', sets: '7'},
    ],

    [
      {RPE: '8', id: '0001', item: '3/4 sit-up', reps: '2', sets: '1'},
      {RPE: '6', id: '0002', item: '45° side bend', reps: '5', sets: '4'},
      {RPE: '9', id: '0003', item: 'air bike', reps: '8', sets: '7'},
    ],

    [
      {RPE: '3', id: '0001', item: '3/4 sit-up', reps: '2', sets: '1'},
      {RPE: '6', id: '0002', item: '45° side bend', reps: '5', sets: '4'},
      {RPE: '9', id: '0003', item: 'air bike', reps: '8', sets: '7'},
    ],

    [
      {RPE: '3', id: '0001', item: '3/4 sit-up', reps: '2', sets: '1'},
      {RPE: '6', id: '0002', item: '45° side bend', reps: '5', sets: '4'},
      {RPE: '9', id: '0003', item: 'air bike', reps: '8', sets: '7'},
    ],

    [
      {RPE: '3', id: '0001', item: '3/4 sit-up', reps: '2', sets: '1'},
      {RPE: '6', id: '0002', item: '45° side bend', reps: '5', sets: '4'},
      {RPE: '9', id: '0003', item: 'air bike', reps: '8', sets: '7'},
    ],
  ];
  // console.log(total[2]);
  const [date, setDate] = useState(new Date());
  var displayDate = useRef(0);
  return (
    <View style={Styles.container}>
      <View style={styles.DateButton}>
        <TouchableOpacity
          onPress={() => {
            if (displayDate.current < 7) {
              displayDate.current = displayDate.current + 1;
              var dat = new Date();
              dat.setDate(dat.getDate() - displayDate.current);
              setDate(dat);
            }
          }}>
          <Icon name="arrow-left" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('hello');
          }}>
          <Text>{date.toDateString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (displayDate.current > 0) {
              displayDate.current = displayDate.current - 1;
              var dat = new Date();
              dat.setDate(dat.getDate() - displayDate.current);
              setDate(dat);
            }
          }}>
          <Icon name="arrow-right" size={32} color="black" />
        </TouchableOpacity>
      </View>
      {displayDate.current === 0 ? (
        <View style={styles.dynamic}>
          <Text>Today</Text>
        </View>
      ) : (
        <Text>{total[displayDate.current][0].RPE}</Text>
      )}

      <TouchableOpacity
        style={Styles.roundButton}
        onPress={() => {
          navigation.navigate('CreateWorkout');
        }}>
        <Plus name="plus" size={14} color="white" />
      </TouchableOpacity>
    </View>
    // useMemo on SelectBox
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
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
export default Logger;
