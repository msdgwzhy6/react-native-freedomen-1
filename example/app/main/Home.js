import React from 'react'
import {Text, ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'
import columns from '../region/columns'

export default  class  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                items: [{
                    label:  'Form'
                },{
                    label:  'Form2'
                },{
                    label:  'Form3'
                },{
                    label:  'Form4'
                }]
            }
        }
    }
    render() {  
        return ( 
            <ScrollView  style={{padding: 5}}>  
                <Freedomen.Region 
                    event={params => {  
                        if(params.prop == 'cancel') {
                            params.row.searchContent = ''
                            return params.row
                        } else if (params.prop == 'searchContent') {

                        } else if (params.prop == 'fold') {
                            params.row.coll = !params.row.coll
                            return  params.row
                        } else if (params.prop == 'setMiddle') { 
                            Freedomen.redux({
                                'bar_middle': (info) => {
                                    let badge = info.badge || 0
                                    info.badge = badge + 1
                                    return info
                                }
                            })
                        } else if (params.prop == 'add') {
                            params.row.inputs.push({})
                            return params.row
                        }
                    }}  
                    data={{inputs: [{},{}]}}
                    columns={[    
                        //search box
                        columns.search,
                        {type: 'input-text', prop: 'input1', placeholder: '输入你好变红', style: (value) => {
                            let borderColor = value == '你好' ? 'red' : '#ccc'
                            return {
                                borderColor: borderColor,
                                borderRadius: 5,
                                borderWidth: 1,
                                padding: 5,
                                marginTB: 10
                            }
                        }},
                        //折叠
                        [
                            {type: 'text-h1', value: '折叠', style: {flex: 1}},
                            {type: 'image-icon', filter: (value, data) => { return data.coll ? require('../assets/bottom.png') : require('../assets/right.png') }},
                            {type: 'click-row', prop: 'fold'}
                        ], [
                            {type: 'text-h1', value: '内容'},
                            {type: 'text-h3', value: '内容'},
                            {type: 'br', prop: 'coll', load: value => value, style: {padding: 10}}
                        ],
                        (data) => {
                            let arr = []
                            for (let i = 0; i < (data.inputs || []).length; i ++) {
                                arr.push({type: 'input-text', placeholder: '输入', prop: 'input' + i, value: data['input' + i], style: {borderColor: '#ccc', borderWidth: .5, padding: 2,borderRadius: 5, marginRight: 5, align: 'center'}})
                            }
                            arr.push({type: 'button-primary', prop: 'add', value: '添加', style: {padding: 5, borderRadius: 5}})
                            arr.push({type: 'br-row'})
                            return arr
                        },
                        //
                        {type: 'button-primary', prop: 'setMiddle', value: '设置middle  badge'}
                    ]}
                />
                <Freedomen.Region 
                    data={this.state.data}
                    event={params => {
                        if(params.value && params.value.prop == 'click') { 
                            this.props.navigation.push(params.value.row.label)
                        }
                    }}
                    columns={[
                            {type: 'view', prop: 'items', value: [], style: {flexDirection: 'row', flexWrap: 'wrap'}, columns: [
                                {type: 'image-item', prop: 'item-icon', value: require('../assets/form.png')},
                                {type: 'text-h4', prop: 'label'},
                                //width 要减去scroll padding  
                                {type: 'click', prop: 'click', style: {align: 'center', width: '24'}}
                            ]}
                        ]} 
                        
                    />
               
            </ScrollView>
          )
    }
  }