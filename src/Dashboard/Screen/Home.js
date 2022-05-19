import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {Dimensions, FlatList, TouchableOpacity} from 'react-native';
import {homeStyle as styles} from '../Style/index';
import Icon from 'react-native-vector-icons/Entypo';
import {ProgressChart} from 'react-native-chart-kit';
import {ButtonGroup, Card} from 'react-native-elements';
import DataContext from '../../DataContext/DataContext';

const HomeScreen = props => {
  const {todayDiaryDetail} = useContext(DataContext);
  const [todayDiary, setTodayDiary] = React.useState({});
  //=========================================New Content============================================================
  const {currentWeekPercentage} = useContext(DataContext);
  const [Calories, setCalories] = React.useState(0);
  const [Protein, setProtein] = React.useState(0);
  const [Carbs, setCarbs] = React.useState(0);
  const [Fats, setFats] = React.useState(0);
  useEffect(() => {
    async function fetchData() {
      
      setTodayDiary(await todayDiaryDetail());
      const a = await currentWeekPercentage();
      setCalories( a[0].Calories);
      setProtein(a[0].Protein);
      setCarbs(a[0].Carbs);
      setFats( a[0].Fats);
      // console.log(todayDiary)
      // console.log(a)
      // setTodayDiary(details);
      // console.log(parseInt(todayDiary.result.Brakfast.BreakfastCalories));
    }
    fetchData();
  }, []);

  //=====================================================================================================
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndexes, setSelectedIndexes] = React.useState([]);
  const [check,setCheck] = React.useState(false) 
  const navigation = props.navigation;
  const data = {
    labels: ['Calories', 'Protein', 'Carbs', 'Fat'], // optional
    data: [Calories, Protein, Carbs, Fats],
  };
  const data2 = {
    labels: ['Calories', 'Protein', 'Carbs', 'Fat'], // optional
    data: [1-Calories, 1-Protein, 1-Carbs, 1-Fats],
  };

  
  // console.log(DATA);
  return (
    <View style={styles.container}>
      <View>
        <ProgressChart
          data={check?data2:data}
          width={Dimensions.get('window').width}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          hideLegend={false}
        />
      </View>
      <View style={styles.buttonGroupStyle}>
        <ButtonGroup
          // buttonStyle={{width: 100}}
          buttonContainerStyle={{}}
          buttons={[ 'Consumed','Remaining']}
          containerStyle={{}}
          disabled={[3, 4]}
          disabledStyle={{}}
          disabledTextStyle={{}}
          disabledSelectedStyle={{}}
          disabledSelectedTextStyle={{}}
          innerBorderStyle={{}}
          onPress={selectedIdx => {
            if (selectedIdx == selectedIndex) {
            } else {
              setSelectedIndex(selectedIdx);
             if(check){
              setCheck(false)
             }else{
               setCheck(true)
             }
            }
          }}
          selectedButtonStyle={{}}
          selectedIndex={selectedIndex}
          selectedIndexes={selectedIndexes}
          selectedTextStyle={{}}
          textStyle={{}}
        />
      </View>
      <View style={styles.updateAdd}>
        <FlatList
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (({highlighted}) => (
              <View style={[style.separator, highlighted && {marginLeft: 0}]} />
            ))
          }
          data={todayDiary}
          renderItem={({item, index, separators}) => {
           
            return (
              <Card
                style={styles.cardStyle}
                containerStyle={styles.cardStyle}
                wrapperStyle={{}}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                <View
                  style={{
                    position: 'relative',
                    flexDirection: 'row',
                    flex: 1,
                    // alignItems: 'center',
                  }}>
                  <Text>
                    {parseInt(item.Calories)} cals , {parseInt(item.Protein)} p
                    ,{parseInt(item.Carbs)} car , {parseInt(item.Fats)} f{' '}
                  </Text>
                  <View style={styles.touchableSymble}>
                    <TouchableOpacity
                      onPress={() => navigation.push('FoodList', [item.title])}
                      style={styles.plus}> 
                      <Icon
                        name={'dots-three-horizontal'}
                        size={25}
                        color={'blue'}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.plus}
                      onPress={() =>
                        navigation.push('customCalories', [item.title])
                      }>
                      <Icon name={'plus'} size={25} color={'blue'} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            );
          }}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
