import React from 'react'
import {ScrollView,View } from "react-native";  
import Freedomen from 'react-native-freedomen' 

export default class extends React.Component {
    static navigationOptions = {
        title: 'Form 2'
    }
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: '测试姓名',
                age: '1994-08-08',
                star: 1,
                complete: .2
            }
        }
    }
    render() {  
        return ( 
            <ScrollView >  
                <Freedomen.Region 
                    style={{padding: 2}}
                    event={params => { 
                        if (params.prop == 'submit') { 
                            //使用 redux 来更新表单
                            Freedomen.redux({
                                form: (form) => {
                                    form.vaild_name = form.name !== '测试姓名' ? '必须输入"测试姓名"': ''
                                    form.vaild_sex = form.sex ? '' : '必选' 
                                    form.vaild_age = form.age ? '' : '必选' 
                                    return form
                                }
                            })
                            alert(JSON.stringify(params.row))
                        }
                    }} 
                    redux={'form'}
                    data={this.state.form}
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
                            {type: 'text-form-label', value: '完成 '},
                            {type: 'slider', prop: 'complete', style: {flex: 1, paddingRight: 10}},
                            {type: 'text', filter: (value, data) => parseInt(data.complete * 100) + '%'},
                            {type: 'br-form-row'}
                        ], [
                            {type: 'text-form-label', value: '爱好'},
                            {type: 'checkboxs', prop: 'hobby', options: '钓鱼,书法,唱歌', style: {flex: 1}},
                            {type: 'text-must', prop: 'vaild_hobby'},
                            {type: 'br-form-row'}
                        ], [  
                            {type: 'text-form-label', value: '简介'},
                            {type: 'input-area', prop: 'intro', maxLength: 200, placeholder: '请简要介绍自己', style: {paddingTB: 5}},
                            {type: 'br-form-col'}
                        ], [  
                            {type: 'text-form-label', value: '评价'},
                            {type: 'rate', prop: 'star', style: {paddingRight: 10}},
                            {type: 'br-form-row', style: {marginBottom: 5}}
                        ],
                        {type: 'button-primary', value: '提交', prop: 'submit', disabled: (value, data) => !data.name}
                    ]}
                />
            </ScrollView>
          )
    }
  }