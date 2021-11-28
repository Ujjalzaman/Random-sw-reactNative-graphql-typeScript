import { StyleSheet,Dimensions } from "react-native";

const WIDTH = Dimensions.get('window').width;
const HIEGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        width: WIDTH,
        height: HIEGHT
    },
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: 'bold',
        padding: 5,
        margin: 10,
        color: "white",
    },
    text: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        padding:8,
    },
    shake: {
        fontWeight: "bold",
        fontSize: 20,
        color:"white",
    },
    error: {
        fontSize: 20,
        fontWeight: '500',
        color:"red",
    },
    imageBox: {
        flex: 1,
        position: 'absolute',
        top: 520,
        justifyContent: "center",
        alignItems: 'center'
    },
    wrap: {
        width: WIDTH,
        height: HIEGHT * 0.25,
    },
    bgImage: {
        width: WIDTH,
        height: HIEGHT
    },
    movieName: {
        fontSize: 20,
        padding: '5px 10px',
        fontWeight:500,
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
    spinner: {
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
});