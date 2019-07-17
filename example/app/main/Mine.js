import React from 'react'
import {ScrollView } from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render() {  
        return ( 
            <ScrollView style={{backgroundColor: '#f5f5f5'}}>  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => { 
                        alert(params.prop)
                    }} 
                    redux={'form'}
                    data={this.state.form}
                    columns={[   
                    [
                        {type: 'image', value: require('../assets/header.jpeg'), style: {borderRadius: 65, height: 65, width: 65}},
                        [
                            {type: 'text-h2', value: '张三'},
                            {type: 'text', value: '18888885588', filter: value => `电话:${value}`}
                        ],
                        {type: 'br-form-row'}
                    ],
                    [
                        {type: 'image-icon',  value: require('../assets/shoucang.png'), style: {marginRight: 10}},
                        {type: 'text-form-label',  value: '收藏', style: {flex: 1}},
                        {type: 'image-icon',  value: require('../assets/right.png')},
                        {type: 'click-row', prop: 'shoucang'}
                    ],  [
                        {type: 'image-icon',  value: require('../assets/dizhi.png'), style: {marginRight: 10}},
                        {type: 'text-form-label',  value: '地址', style: {flex: 1}},
                        {type: 'image-icon',  value: require('../assets/right.png')},
                        {type: 'click-row', prop: 'dizhi'}
                    ], [
                        {type: 'image-icon',  value: require('../assets/kefu.png'), style: {marginRight: 10}},
                        {type: 'text-form-label',  value: '客服', style: {flex: 1}},
                        {type: 'image-icon',  value: require('../assets/right.png')},
                        {type: 'click-row', prop: 'kefu'}
                    ], [
                        {type: 'image-icon',  value: require('../assets/shezhi.png'), style: {marginRight: 10}},
                        {type: 'text-form-label',  value: '设置', style: {flex: 1}},
                        {type: 'image-icon',  value: require('../assets/right.png')},
                        {type: 'click-row', prop: 'shezhi'}
                    ],
                    ]}
                />
            </ScrollView>
          )
    }
  }