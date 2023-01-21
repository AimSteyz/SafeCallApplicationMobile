import React from "react";
import { SafeAreaView, Button, StyleSheet, Text, View, Image, Pressable} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Avatar, Badge, IconButton, TextInput} from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from "../color";


const HomeScreen = ({navigation}) => {
    const route = useRoute();
    const Profilename = route.params?.name;

    const [User, setUser] = React.useState("")
    if (User == "") {
        setUser(Profilename)
    }
    
    
    // Search User
    const [SearchUser, setSearchUser] = React.useState('');

    

    //

    return (
        <SafeAreaView style={styles.mainpage}>

            <View style={styles.row}>
            <Icon logout style={{alignSelf: 'flex-start', marginTop: 5, marginLeft: 5}} name="sign-out" size={40} color={Color.light3} onPress={() => navigation.navigate('Login')}/>
            <Pressable style={{alignSelf: 'flex-end'}} onPress={() => navigation.navigate('Profil', {name: User})}>
            <Avatar
            style={{alignSelf: 'flex-end', marginTop: 5, marginRight: 5}}
            label={User[0]}
            // image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            color={Color.light}
            size={50} 
            /></Pressable>

            </View>
                <Image style={styles.tinyLogo} source={require('../img/SafeCallBlack.png')} />
            <View style={styles.egg}/>
            <TextInput
            backgroundColor="transparent"
            placeholder="Search"
            variant="outlined"
            color={Color.dark3}
            trailing={props => (
                <IconButton icon={props => <Icon name="search" size={20} color={Color.light} />}
                onPress={() => {navigation.navigate('SearchProfil', {name: SearchUser}), setSearchUser('')}}
                />
            )}
            style={styles.input}
            onChangeText={(SearchUser) => setSearchUser(SearchUser)}
            value={SearchUser}

            />
            {/* <TextInput placeholder="Search" placeholderTextColor="black" style={styles.input} onChangeText={(SearchUser) => setSearchUser(SearchUser)} value={SearchUser}/> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    tinyLogo: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: '75%',
        position: 'absolute',
        top: -25,
        tintColor: Color.light3,
    },
    pageposition: {
        position: 'absolute',
        top: 350,
        left: 125,
        width: 150,
        height: 150,
        justifyContent: "space-between",
    },
    mainpage: {
        backgroundColor: Color.light3,
        flex: 1,
    },
    egg: {
        alignSelf: 'center',
        position: 'absolute',
        marginTop: -50,
        width: 450,
        height: 230,
        zIndex: -1,
        backgroundColor: Color.dark2,   
        borderTopLeftRadius: 108,
        borderTopRightRadius: 108,
        borderBottomLeftRadius: 95,
        borderBottomRightRadius: 95,
      },
        row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        alignSelf: 'center',
        marginTop: 300,
        width: 300,
        height: 50,
        fontSize: 20,
        paddingLeft: 10,
    },
})
    
export default HomeScreen;