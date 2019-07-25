import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '按钮'
    } 
    render() {  
        return ( 
            <ScrollView >  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => { 
                        alert(JSON.stringify(params))
                        if (params.prop == 'cancel2') {
                            return {disabled: true}
                        }
                    }} 
                    columns={[   
                        [
                            {type: 'text-h1', value: '按钮'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'button-primary', prop: 'primary', value: '主要按钮 primary'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'button-cancel', prop: 'cancel', value: '次要按钮 cancel'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'button', prop: 'text', value: '文本按键'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-h3', value: '图片按钮:   '},
                            {type: 'button-image', prop: 'image', value: require('../assets/mine.png'), style: {width: 32, height: 32}},
                            {type: 'br-form-row'}
                        ], 
                        {type: 'button-primary', disabled: true, prop: 'primary2', value: '主要按钮失效 primary2', style: {marginBottom: 5}},
                        {type: 'button-cancel', disabled: (value, data) => data.disabled, prop: 'cancel2', value: '次要按钮点击失效 cancel2'},

                        {type: 'button-custom1', prop: 'custom1', value: '自定义1'},
                        {type: 'button-custom2', prop: 'custom2', value: '自定义2'},
                        [  
                            {type: 'text-h3', value: '自定义图片按钮:   '},
                            {type: 'button-image-custom', prop: 'image', value: require('../assets/search.png')},
                            {type: 'br-form-row'}
                        ], 
                    ]}
                />
            </ScrollView>
          )
    }
  }