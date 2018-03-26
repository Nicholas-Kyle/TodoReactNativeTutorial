import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Todo extends Component{

    constructor(){
        super();
        this.state = {
            list: [],
            itemToAdd: ''
        }
    }

    handlePress(){
        this.setState({list: [...this.state.list, this.state.itemToAdd]});
        this.setState({itemToAdd: ''});
    }

    render(){
        return(
            <View>
                <TextInput
                    value={this.state.itemToAdd}
                    onChangeText={ text => this.setState({itemToAdd: text})}
                />
                <TouchableOpacity
                    onPress={this.handlePress.bind(this)}>
                    <Text>Add to list</Text>
                </TouchableOpacity>
                {this.state.list.map((value, index) => {
                    return (
                        <Text key={index}>
                            {value}
                        </Text>
                    );
                })
                }
            </View>
        )
    }
}