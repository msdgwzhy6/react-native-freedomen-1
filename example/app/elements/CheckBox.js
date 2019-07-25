import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '单个多选框'
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
                            {type: 'text-h1', value: '单个多选框'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省'},
                            {type: 'checkbox', value: false, prop: 'checkbox1'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '不可用1'},
                            {type: 'checkbox', disabled: true, prop: 'checkbox2'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '不可用2'},
                            {type: 'checkbox', value: true, disabled: true, prop: 'checkbox3'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '图片版'},
                            {type: 'checkbox', prop: 'checkbox4', checked: require('../assets/unlove.png'), unCheck: require('../assets/love.png')},
                            {type: 'br-form-row'}
                        ],  [  
                            {type: 'text-form-label', value: '自定义1'},
                            {type: 'checkbox-custom1', prop: 'custom1'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '自定义2'},
                            {type: 'checkbox-custom2', prop: 'custom2'},
                            {type: 'br-form-row'}
                        ]
                    ]}
                />
            </ScrollView>
          )
    }
  }