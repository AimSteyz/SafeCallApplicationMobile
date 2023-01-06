import React from "react";
import { ActivityIndicator, Avatar } from "@react-native-material/core";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

const ProfilScreen = ({navigation}) => {
    const route = useRoute();
    const ProfileAPI = route.params?.name;
    
    const [isLoaded, setIsLoaded] = React.useState(true);
    const [FullName, setFullName] = React.useState('none');
    const [Description, setDescription] = React.useState('none');
    const [PhoneNb, setPhoneNb] = React.useState('none');
    const [Email, setEmail] = React.useState('none');
    // const [ID, setID] = React.useState('none');
    const [ProfilePic, setProfilePic] = React.useState('none');

    const getProfile = async () => {
        axios.get(`http://20.234.168.103:8080/profile/${ProfileAPI}`)
        .then(res => {
            console.log(res.data);
            if (res.data["profile"]) {
                setFullName(res.data["profile"]["FullName"]);
                setIsLoaded(false);
            } if (res.data["failed"]) {
                alert ("Error: " + res.data["failed"]);
            }
        })
    }

    React.useEffect(() => {
        getProfile();
    }, []);

    return (
        <View>
            <View style={styles.egg}/>
            <Text style={{alignSelf: 'center', marginTop: 40, fontSize: 35, color: 'white'}}>Profil</Text>
            {isLoaded ? <Avatar 
            style={{alignSelf: 'center', marginTop: 30}}
            label=" "
            // image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            autoColor
            size={100} />
            :
            <Avatar 
            style={{alignSelf: 'center', marginTop: 30}}
            label={FullName[0]}
            // image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            autoColor
            size={100} /> }
            <View
                style={{
                    marginTop: 40,
                }}
            >
            <Text style={styles.maintext}>
                Username: {isLoaded ? <ActivityIndicator/> : ( <Text style={styles.valtext}>{FullName}</Text>)}
            </Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, margin: 30, }}/>
            <Text style={styles.maintext}>
                Email: {isLoaded ? <ActivityIndicator/> : ( <Text style={styles.valtext}> {Email}</Text>)}
            </Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, margin: 30, }}/>
            <Text style={styles.maintext}>
                ID: {isLoaded ? <ActivityIndicator/> : ( <Text style={styles.valtext}> @{FullName}</Text>)}
            </Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, margin: 30, }}/>
            <Text style={styles.maintext}>
                Phone number: {isLoaded ? <ActivityIndicator/> : ( <Text style={styles.valtext}> {PhoneNb}</Text>)}
            </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    egg: {
        alignSelf: 'center',
        position: 'absolute',
        marginTop: -50,
        width: 450,
        height: 230,
        backgroundColor: '#dbd7d7',
        borderTopLeftRadius: 108,
        borderTopRightRadius: 108,
        borderBottomLeftRadius: 95,
        borderBottomRightRadius: 95,
      },
    maintext: {
        marginLeft: 50,
        marginTop: 20,
        marginBottom: 20,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
    },
    valtext: {
        fontStyle: 'italic',
        color: '#5D6D7E',
    }
})
    
export default ProfilScreen;