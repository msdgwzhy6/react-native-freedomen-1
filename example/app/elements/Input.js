import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '输入文本'
    } 
    render() {  
        return ( 
            <ScrollView>  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => { 
                        if (params.prop == 'submit') {
                            alert(JSON.stringify(params.row))
                        }
                    }} 
                    columns={[   
                        [
                            {type: 'text-h1', value: '输入文本'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '文本1'},
                            {type: 'input-text', prop: 'text1', placeholder: 'please input some text'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '文本2'},
                            {type: 'input-text', prop: 'text2', placeholder: 'please input 123', style: (value) => {
                                return value == '123' && {
                                    borderColor:　'red',
                                    borderWidth: 1,
                                    padding: 5
                                } 
                            }},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '密码'},
                            {type: 'input-password', prop: 'password', placeholder: 'please input password'},
                            {type: 'br-form-row'}
                        ],  [  
                            {type: 'text-form-label', value: '文本区'},
                            {type: 'input-area', prop: 'area1', placeholder: 'please input some description'},
                            {type: 'br-form-col'}
                        ], [  
                            {type: 'text-form-label', value: '文本区2'},
                            {type: 'input-area', prop: 'area2', disabled: value =>  value == '你好', maxLength: 120, placeholder: 'please input 你好', style: {borderColor: '#f5f5f5', borderWidth: 1, padding: 8, borderRadius: 5, marginTop: 10}},
                            {type: 'br-form-col'}
                        ], [  
                            {type: 'text-form-label', value: '自定义1'},
                            {type: 'input-text-custom1', prop: 'custom1',  placeholder: 'please input some text'},
                            {type: 'br-form-row'}
                        ],  [  
                            {type: 'text-form-label', value: '自定义2'},
                            {type: 'input-text-custom2', prop: 'custom2',  placeholder: 'please input some text'},
                            {type: 'br-form-row'}
                        ], 
                        {type: 'button-custom1', value: '提交', prop: 'submit', style: {backgroundColor: '#222'}}
                    ]}
                />
            </ScrollView>
          )
    }
  }