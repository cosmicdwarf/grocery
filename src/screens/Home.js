import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
//import grocery from '../item';
grocery = ['Milk', 'Coffee', 'Oranges', 'Bread'];

class Home extends Component {



    constructor(props) {
        super(props);
        this.state = {
            myTextInput: '',
            allItems: ['Milk', 'Coffee', 'Oranges', 'Bread'],
            itemFiltered: ['Milk', 'Coffee', 'Oranges', 'Bread'],

        };
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput: event,
            itemFiltered: this.state.allItems.filter(i =>
                i.toLowerCase().includes(event.toLowerCase())
            ),
        })
    }

    addItem = () => {
        this.setState(prevState => {
            return {
                myTextInput: '',
                allItems: [...prevState.allItems, prevState.myTextInput]
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View >
                    <StatusBar backgroundColor={'white'} showHideTransition barStyle="dark-content" />
                    <View>
                        <StatusBar hidden={false} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 25, backgroundColor: '#fff', paddingTop: 30 }}>

                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ borderWidth: 1, flexDirection: "row", alignItems: "center", elevation: 2, width: "80%", backgroundColor: "#FFF", paddingHorizontal: 20, height: 40, borderRadius: 5, marginLeft: 1 }}>
                            <MaterialIcons name="search" size={22} color="#4f4a4a" />
                            <TextInput
                                value={this.state.myTextInput}
                                placeholder='Search...'
                                onChangeText={this.onChangeInput}
                                style={{ width: "100%", fontWeight: "Medium", paddingHorizontal: 10, fontSize: 12 }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={this.addItem}
                            style={{ marginRight: 15, marginTop: 5 }}
                            activeOpacity={0.5}>
                            <Octicons name="plus" size={25} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{ marginTop: 20 }}>
                    {this.state.itemFiltered.map((item, index) => {
                        return (
                            <TouchableOpacity style={style.item} key={index} activeOpacity={0.6}
                            >
                                <Text key={index}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    card: {
        width: '90%',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    item: {
        alignItems: 'center',
        backgroundColor: '#eceef0',
        margin: 10,
        padding: 20,
        marginHorizontal: 30
    }
});

export default Home;
