import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import {db} from '../config';

let itemsRef = db.ref('/items');
let addItem=(item)=>{
    db.ref('/items').push({
        itemInfo:item
    });
};
export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            itemInfo: '',
            items:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.clickToAdd = this.clickToAdd.bind(this);
    }

    clickToAdd(){
        addItem(this.state.itemInfo);
    }
    handleChange(e){
        this.setState({itemInfo:e.nativeEvent.text})
    }
    componentDidMount(){
        itemsRef.on('value',snapshot =>{
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
        })
    }

    render() {

        return ( 

            <View style={{ padding: 10 }}> 
                <TextInput
                
                onChange={this.handleChange}
                    style={{ height: 40 ,borderWidth:2,borderColor:'black'}}
                    placeholder="Enter Item Name"
                   
                />

                <Button
                    style={{padding:10}}
                    onPress={this.clickToAdd}
                    title="Add Item"
                    color="#841584"
                    
                />

                {this.state.items.map(x=>{
                    return <Text>
                        {x.itemInfo}
                    </Text>
                })}

            </View>
        );
    }
}
