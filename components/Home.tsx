import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, SafeAreaView, ScrollView, Image, Button, NativeScrollEvent } from 'react-native';
import RNShake from 'react-native-shake';
import { Accelerometer } from 'expo-sensors';
import { useQuery, gql } from '@apollo/client';
import { AllFilms, listData } from './DataSet';
import { styles } from './Style';

const bgImage = { uri: "https://i.insider.com/50bcbf376bb3f70d3c00001a?width=2700" }
// https://i.insider.com/50bcbf376bb3f70d3c00001a?width=2700
// https://media.comicbook.com/2018/09/dark-phoenix-poster-1135764.jpeg
// https://preview.redd.it/0w3kgimfh0551.jpg?width=640&crop=smart&auto=webp&s=bedfb6a04b221784eea3494376dca16873645228

const Home = () => {
    const [spinner, seSpinner] = useState(true)
    const [film, setFilm] = useState(0);
    const [filmList, setFilmList] = useState<any[]>([]);
    const [movie, setMovie] = useState<any>({});
    const { loading, error, data } = useQuery(AllFilms);
    const [imageData, setData] = useState<any[]>(listData);
    const [activeImg, setActiveImg] = useState(0);

    const handleShake = () => {
        setFilm(prevState => {
            if (prevState >= 14) {
                return 0;
            }
            return prevState + 1;
        });
    };

    useEffect(() => {
        if (data) {
            const { allPlanets: { edges } } = data;
            setFilmList(edges)
        }
    }, [data]);


    useEffect(() => {
        if (filmList.length !== 0) {
            const { node: { name, filmConnection: { edges } } } = filmList[film];
            const title = edges.map(({ e }: any) => e.title);
            setMovie({ name: name, films: title });
        }
    }, [film]);

    //shake to change
    useEffect(() => {
        const subscription = RNShake.addListener(() => {
            handleShake();
        });
        return () => {
            subscription.remove();
        };
    }, []);

    const onchange = (events: { contentOffset: { x: number; }; layoutMeasurement: { width: number; } }) => {
        if (events) {
            const slide = (Math.round(events.contentOffset.x / events.layoutMeasurement.width))
            if (slide !== activeImg) {
                setActiveImg(slide)
            }
        }
    }

    return (
        <SafeAreaView style={styles.root}>

            {loading && imageData ? (
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color="#00ff00" />
                    <Text>Random Films</Text>
                </View>
            ) : (
                <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
                    <View>
                        <Text style={styles.title}>Welcome to Movies Apps</Text>
                        <View>
                            <ScrollView>
                                <View style={styles.container}>
                                    {movie ? (
                                        <View>
                                            <Text style={styles.text}>{movie?.name}</Text>
                                            <Text style={styles.text}>{movie?.films}</Text>
                                        </View>
                                    ) : (
                                        <Text style={styles.shake}>Shake Shake</Text>
                                    )}
                                    {error && <Text style={styles.error}>Something Went Wrong !!</Text>}
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.imageBox}>
                            <ScrollView
                                onScroll={({ e }: any) => onchange(e)}
                                showsHorizontalScrollIndicator={false}
                                scrollEventThrottle={0}
                                pagingEnabled
                                horizontal
                                style={styles.wrap}
                            >
                                {imageData.map((item, id) =>
                                    <View key={id}>
                                        <Text style={styles.text}>{item.name}</Text>
                                        <Image
                                            resizeMode="stretch"
                                            style={styles.wrap}
                                            source={{ uri: item.img }}
                                        />
                                    </View>
                                )}
                            </ScrollView>
                            <View style={styles.wrapDot}>
                                {imageData.map((e, index) =>
                                    <Text
                                        key={index + 55}
                                        style={activeImg === index ? styles.dotActive : styles.dot}>
                                        &#x25cf;
                                    </Text>
                                )}
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            )}
        </SafeAreaView>
    );
}

export default Home;
