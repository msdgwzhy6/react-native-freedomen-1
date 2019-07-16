import React from 'react'
import {View, Text} from 'react-native' 
export default  class  extends React.Component {
    static navigationOptions = {
        title: '开封橄榄城·乐享茂',
    }
    constructor(props) {
        super(props)
        this.state = { }
    }
    render() {
        return (
            <View style = {{flex: 1, backgroundColor: '#f5f5f5'}}> 
                <Text>dd</Text>
            </View>
        );
    }
  }