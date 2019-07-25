/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';
import Freedomen from 'react-native-freedomen'
import custom from './custom'
Freedomen.custom( 
    {primaryColor: '#20A0FF'}, 
    {itemSpace: 12},
    {
        ...custom.button,
        ...custom.input,
        ...custom.checkbox,
        ...custom.tags,
        ...custom.text,
        ...custom.radio,
        ...custom.radios,
        //红色字
        'text-must': {
            color: 'red'
        },
        //图标
        'image-icon': {
            width: 24, 
            height: 24,
            resizeMode: 'stretch'
        },
        //
        'image-item': {
            height: 46,
            width: 46,
            margin: 5
        },
        //图标按钮
        'button-image-icon': {
            width: 22, 
            height: 22,
            resizeMode: 'stretch'
        },
        //表单行
        'br-form-row': {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            marginBottom: 1,
            padding: 10,
        },
        //表单列
        'br-form-col': {  
            backgroundColor: 'white',
            marginBottom: 1,
            padding: 10,
        },
        //行
        'br-row': {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingVertical: 5,
        },
        //可单击行
        'click-row': {
            paddingHorizontal: 12,
            paddingVertical: 10,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#f5f5f5',
            alignItems: 'center',
            flexDirection: 'row'
        },
        //表单label
        'text-form-label': {
            fontSize: 15,
            color: 'black',
            width: 65
        }
    })
AppRegistry.registerComponent(appName, () => App);
