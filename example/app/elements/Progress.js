import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '进度条'
    } 
    render() {  
        return ( 
            <ScrollView >  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => { 
                        if (params.prop == 'slider') {
                            params.row.progress4 = params.value
                            return params.row
                        }
                    }} 
                    columns={[   
                        [
                            {type: 'text-h1', value: '进度条'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省1'},
                            {type: 'progress', prop: 'progress1', value: 0.5},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省2'},
                            {type: 'progress', prop: 'progress2', value: 0.5, style: {width: 280}},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省3'},
                            {type: 'progress-circle', prop: 'progress3', value: 0.5},
                            {type: 'br-form-row'}
                        ], 
                        [
                            {type: 'progress', prop: 'progress4', value: 0.2, style: {width: 320}},
                            {type: 'slider', prop: 'slider', value: 0.2, style: {flex: 1}},
                            {type: 'br-form-col'}
                        ] 
                    ]}
                />
            </ScrollView>
          )
    }
  }