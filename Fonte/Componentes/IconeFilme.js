import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class IconeFilme extends React.Component {
    render() {
        return (
           <TouchableOpacity  onPress = { () => this.props.onClick() }>
            <View style={{ width: 130, height: 110, backgroundColor: 'gray', margin: 1 }}>
            </View>
            </TouchableOpacity>
        );
    }
}

