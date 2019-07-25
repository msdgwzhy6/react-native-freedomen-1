import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '计数器'
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
                            {type: 'text-h1', value: '计数器'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省1'},
                            {type: 'counter', value: 1, prop: 'counter1'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省2'},
                            {type: 'counter', prop: 'counter2', value: 99},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省3'},
                            {type: 'counter', prop: 'counter3', value: 5, max: 20, min: 1},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '6不可用'},
                            {type: 'counter', value: 0, prop: 'counter4', disabled: value => value == 6},
                            {type: 'br-form-row'}
                        ],
                        [  
                            {type: 'text-form-label', value: '样式'},
                            {type: 'counter', value: 0, prop: 'counter5', style: {flex: 1, align: 'center', width: 140}},
                            {type: 'br-form-row'}
                        ],
                    ]}
                />
            </ScrollView>
          )
    }
  }