import React from 'react'
import {ScrollView} from "react-native";
import Freedomen from 'react-native-freedomen'    

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: 'Form 1'
    }
    componentDidMount() {
      
    }
    render() {  
        return ( 
            <ScrollView >  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => { 
                        if (params.prop == 'submit') { 
                            params.row.vaild_name = params.row.name !== '测试姓名' ? '必须输入"测试姓名"': ''
                            params.row.vaild_sex = params.row.sex ? '' : '必选' 
                            params.row.vaild_age = params.row.age ? '' : '必选' 
                            return params.row
                        }
                    }} 
                    columns={[   
                        [
                            {type: 'text-h1', value: '表单DEMO 2'},
                            {type: 'br-form-row'}
                        ],
                        [
                            {type: 'text-form-label',  value: '姓名'},
                            {type: 'input-text', prop: 'name', placeholder: '请输入姓名', style: {flex: 1}},
                            {type: 'text-must', prop: 'vaild_name'},
                            {type: 'br-form-row'}
                        ], [
                            {type: 'text-form-label', value: '姓别'},
                            {type: 'radios', prop: 'sex', options: '男,女', style: {borderRadius: 45}, style: {flex: 1}},
                            {type: 'text-must', prop: 'vaild_sex'},
                            {type: 'br-form-row'}
                        ], [
                            {type: 'text-form-label', value: '年龄'},
                            {type: 'pick-date', prop: 'age', placeholder: '请选择出生日期', style: {flex: 1}},
                            {type: 'text-must', prop: 'vaild_age'},
                            {type: 'br-form-row'}
                        ], [
                            {type: 'text-form-label', value: '爱好'},
                            {type: 'checkboxs', prop: 'hobby', options: '钓鱼,书法,唱歌', style: {flex: 1}},
                            {type: 'text-must', prop: 'vaild_hobby'},
                            {type: 'br-form-row',  }
                        ],[  
                            {type: 'text-form-label', value: '简介'},
                            {type: 'input-area', prop: 'intro', maxLength: 200, placeholder: '请简要介绍自己', style: {paddingTB: 5}},
                            {type: 'br-form-col', style: {marginBottom: 5},  }
                        ],
                        {type: 'button-primary', value: '提交', prop: 'submit', disabled: (value, data) => !data.name}
                    ]}
                />
            </ScrollView>
          )
    }
  }