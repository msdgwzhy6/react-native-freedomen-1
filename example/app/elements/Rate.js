import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '评分器'
    } 
    render() {  
        return ( 
            <ScrollView >  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => { }} 
                    columns={[   
                        [
                            {type: 'text-h1', value: '评分器'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省1'},
                            {type: 'rate', prop: 'rate1'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省2'},
                            {type: 'rate', prop: 'rate2', value: 2, size: 8},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '不可用'},
                            {type: 'rate', prop: 'rate3', value: 2, disabled: true},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '换图'},
                            {type: 'rate', prop: 'rate4', value: 2, checked: require('../assets/smile.png'), unCheck: require('../assets/unsmile.png')},
                            {type: 'br-form-row'}
                        ],
                    ]}
                />
            </ScrollView>
          )
    }
  }