import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '图片'
    } 
    render() {  
        return ( 
            <ScrollView >  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => {}} 
                    columns={[   
                        [
                            {type: 'text-h1', value: '图片'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '缺省1'},
                            {type: 'image', value: require('../assets/smile.png')},
                            {type: 'br-form-col'}
                        ],  [  
                            {type: 'text-form-label', value: '缺省2'},
                            {type: 'image', value: 'http://img.redocn.com/sheji/20141219/zhongguofengdaodeliyizhanbanzhijing_3744115.jpg', style: {width: 220, height: 88}},
                            {type: 'br-form-col'}
                        ], [  
                            {type: 'text-form-label', value: '过滤'},
                            {type: 'input-text', prop: 'input', placeholder: '输入1、12、123'},
                            {type: 'image', filter: (value, data) => {
                                return data.input == 1 ? require('../assets/smile.png'): data.input == 12 ? require('../assets/unsmile.png') : 'http://img.redocn.com/sheji/20141219/zhongguofengdaodeliyizhanbanzhijing_3744115.jpg'
                            },style: (value, data) => {
                                return data.input == '123' && {width: 220, height: 88, borderRadius: 22, resizeMode: 'stretch'}
                            }},
                            {type: 'br-form-col'}
                        ], 
                    ]}
                />
            </ScrollView>
          )
    }
  }