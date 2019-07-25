import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [   
                [
                    {type: 'text-h1', value: '单选器'},
                    {type: 'br-form-row'}
                ], [  
                    {type: 'text-form-label',  value: '缺省'},
                    {type: 'select', prop: 'select', options: '选择1,选择2,选择3', style: {flex: 1}},
                    {type: 'br-form-row'}
                ], [  
                    {type: 'text-form-label',  value: '缺省2'},
                    {type: 'select', prop: 'select2', options: {1: '选择1', 2: '选择2', 3: '选择3'}, style: {width: 125}},
                    {type: 'br-form-row'}
                ], [  
                    {type: 'text-form-label',  value: '多个'},
                    {type: 'select', prop: 'select3', options: ['江苏', '河南'], style: {width: 100}},
                    {type: 'select', prop: 'select4', options: ['宿迁', '苏州'], style: {width: 100, color: 'red'}},
                    {type: 'br-form-row'}
                ],
                {type: 'button-custom1', value: '提交', prop: 'submit', style: {backgroundColor: '#222'}} 
            ]
        }
    }
    static navigationOptions = {
        title: '单选器'
    } 
    render() {  
        return ( 
            <ScrollView >  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => { 
                        if(params.prop == 'select3') {
                            let columns = this.state.columns
                            columns[3][2].options = {'江苏': ['宿迁', '苏州'], '河南': ['郑州', '石窟']}[params.value]
                            this.setState({
                                columns: columns
                            })
                        } else if (params.prop == 'submit') {
                            alert(JSON.stringify(params))
                        }
                    }} 
                    columns={this.state.columns}
                />
            </ScrollView>
          )
    }
  }