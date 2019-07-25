import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '日期选择'
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
                            {type: 'text-h1', value: '日期选择'},
                            {type: 'br-form-row'}
                        ], [ 
                            {type: 'text-form-label', value: '日期1'}, 
                            {type: 'pick-date', prop: 'date1', placeholder: '请选择日期'},
                            {type: 'br-form-row'}
                        ], [ 
                            {type: 'text-form-label', value: '不可用'}, 
                            {type: 'pick-date', prop: 'date2', disabled: true, value: '2018-09-12'},
                            {type: 'br-form-row'}
                        ], [ 
                            {type: 'text-form-label', value: '日时'}, 
                            {type: 'pick-datetime', prop: 'datetime', placeholder: '请选择', style: {flex: 1 /**(点击范围) */}},
                            {type: 'br-form-row'}
                        ], [ 
                            {type: 'text-form-label', value: '时间'}, 
                            {type: 'pick-time', prop: 'time', value: '请选择时间', style: {flex: 1, color: 'green'}},
                            {type: 'br-form-row'}
                        ],
                    ]}
                />
            </ScrollView>
          )
    }
  }