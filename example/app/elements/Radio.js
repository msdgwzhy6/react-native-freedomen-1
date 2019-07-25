import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '单选框'
    } 
    render() {  
        return ( 
            <ScrollView >  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => {  }} 
                    columns={[   
                        [
                            {type: 'text-h1', value: '单选框'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省1'},
                            {type: 'radio', prop: 'radio1'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省2'},
                            {type: 'radio', prop: 'radio2', value: true},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '失效'},
                            {type: 'radio', prop: 'radio4', disabled: true},
                            {type: 'br-form-row'}
                        ],  [  
                            {type: 'text-form-label', value: '点后失效'},
                            {type: 'radio', prop: 'radio5', disabled: value => value},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '变大'},
                            {type: 'radio', prop: 'radio6', style: {height: 42}},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '自定义1'},
                            {type: 'radio-custom1', prop: 'radio7', value: true},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '自定义2'},
                            {type: 'radio-custom2', prop: 'radio8'},
                            {type: 'br-form-row'}
                        ], 
                    ]}
                />
            </ScrollView>
          )
    }
  }