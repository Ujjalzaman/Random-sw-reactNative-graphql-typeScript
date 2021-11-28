import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import RNShake from 'react-native-shake';
import { Accelerometer } from 'expo-sensors';


const listData = [
  {
    name: "dfdfdf",
    img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    name: "dfdfdf",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiKRPFXGeydO5g8s2JTWd6O0r4vGch87Dv2tWX374S0Y0fXW3qObUTKwc6dNuNNCGkzM&usqp=CAU"
  },
  {
    name: "dfdfdf",
    img: "https://static.remove.bg/remove-bg-web/a76316286d09b12be1ebda3b400e3f44716c24d0/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
  },
  {
    name: "dfdfdf",
    img: "https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
  },
  {
    name: "dfdfdf",
    img: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
  },
  {
    name: "dfdfdf",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
  },
  {
    name: "dfdfdf",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
  },
]
const WIDTH = Dimensions.get('window').width;
const HIEGHT = Dimensions.get('window').height;

export default function App() {
  const [data, setData] = useState<any[]>(listData);
  const [nextPlanetCounter, setNextPlanetCounter] = useState(5);
  const [activeImg, setActiveImg] = useState(0);


  const changePlanet = () => {
    setActiveImg(prevState => {
      if (prevState >= 7) {
        return 0;
      }
      return activeImg + 1;
    });
  };
  // useEffect(() => {
  //   const subscription = RNShake.addListener(() => {
  //     changePlanet();
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const onchange = (events) => {
    if (events) {
      const slide = (Math.round(events.contentOffset.x / events.layoutMeasurement.width))
      if (slide !== activeImg) {
        setActiveImg(slide)
      }
    }
  }
  const handleOnPress = (id) => {
    console.log("pres", listData[5])
    console.log(id)
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Welcome To swapi</Text>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={0}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {data.map((item, id) =>
              <View key={id}>
                <Text>{item.name}</Text>
                <Image
                  resizeMode="stretch"
                  style={styles.img}
                  source={{ uri: item.img }}
                />

              </View>
            )}
          </ScrollView>
          <View style={styles.wrapDot}>
            {data.map((e, index) =>
              <Text
                key={index + 55}
                style={activeImg === index ? styles.dotActive : styles.dot}
              >
                &#x25cf;
              </Text>
            )}
          </View>
        </View>
        <View>
          <Button
            title="change Event"
            onPress={changePlanet}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shakeMsg: {
    fontSize: 20,
    color: 'red',
  },
  wrap: {
    width: WIDTH,
    height: HIEGHT * 0.25,
  },
  img: {
    width: WIDTH,
    height: HIEGHT * 0.25,
  },
  btn: {
    width: "100%",
    backgroundColor: 'red',
    borderRadius: 5
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: "red"
  },
  dot: {
    margin: 3,
    color: "white"
  },
});

