import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '滑动器'
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
                            {type: 'text-h1', value: '滑动器'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省1'},
                            {type: 'slider', prop: 'slider1', style: {flex: 1}},
                            {type: 'text', filter:(value, data) => parseInt( (data.slider1 || 0) * 100 )+ '%', style: {width: 50, align: 'center'}},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省2'},
                            {type: 'slider', prop: 'slider2', value: .2, style: {flex: 1}},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省3'},
                            {type: 'slider', prop: 'slider3',  value: .45, style: {width: 120}},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '0不可用'},
                            {type: 'slider', prop: 'slider4', disabled: value => value === 0, value: .45, style: {width: 320}},
                            {type: 'br-form-row'}
                        ],
                        
                    ]}
                />
            </ScrollView>
          )
    }
  }