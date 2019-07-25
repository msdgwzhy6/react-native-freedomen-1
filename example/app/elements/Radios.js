import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '单选组'
    } 
    render() {  
        return ( 
            <ScrollView >  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => { 
                       if (params.value == '提交')
                            alert(JSON.stringify(params.row))
                    }} 
                    columns={[   
                        [
                            {type: 'text-h1', value: '单选组'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省1'},
                            {type: 'radios', prop: 'radios1', options: '选项1,选项2,选项3'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省2'},
                            {type: 'radios', prop: 'radios2', options: {1: '男', 2: '女', 3: '未知'}, value: 2},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '自定义'},
                            {type: 'radios-custom1', prop: 'radios3', options: {1: '男', 2: '女', 3: '未知'}, value: 2},
                            {type: 'br-form-row'}
                        ], 
                        {type: 'button-primary', value: '提交'}
                    ]}
                />
            </ScrollView>
          )
    }
  }