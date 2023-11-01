import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
    render() {
        
        const user = {
            name: 'Dinesh Chakravarthy Perni',
            occupation: 'Software Engineer',
            profileDescription: 'Passionate about coding and creating awesome apps, using this for CS624 PE05 using React Native on Android.'
        };

        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image
                            style={styles.cardImage}
                            source={require('./assets/icons8-user-48.png')}
                        />
                    </View>
                    {/* User Information */}
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.userOccupation}>{user.occupation}</Text>
                        <Text style={styles.userDescription}>{user.profileDescription}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },

    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 80
    },

    userInfoContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    userOccupation: {
        fontSize: 18,
        textDecorationLine: 'underline',
        color: 'red'
    },
    userDescription: {
        fontSize: 16,
        marginTop: 10
    }
});
