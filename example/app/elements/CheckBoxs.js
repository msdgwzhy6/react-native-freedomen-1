import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '多选框'
    } 
    render() {  
        return ( 
            <ScrollView >  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => { 
                    }} 
                    columns={[   
                        [
                            {type: 'text-h1', value: '多选框'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省1'},
                            {type: 'checkboxs', prop: 'checkboxs1', options: '唱歌,跳舞,游泳,冲浪'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省2'},
                            {type: 'checkboxs', prop: 'checkboxs2', value: '1,3', options: {1: '唱歌', 2: '画画', 3: '书法'}},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省2'},
                            {type: 'checkboxs', prop: 'checkboxs3', value: ['2'],  options: {1: '唱歌', 2: '画画', 3: '书法'}, checked: require('../assets/love.png'), unCheck: require('../assets/unlove.png')},
                            {type: 'br-form-row'}
                        ],
                    ]}
                />
            </ScrollView>
          )
    }
  }