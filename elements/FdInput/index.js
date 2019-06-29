import React from 'react'
import {Text, View, TextInput} from 'react-native' 
import util from '../../utils/util'
import theme from '../../config/theme'
import Base from '../Base'

const styleItems = [ 
    'textAlign',
    'textAlignVertical'
]

export default class FdInput extends Base { 

    constructor (props) {
        super (props)
        let item = props.item || {}
        //{item => Object: [type, value, label, event...]}
        //type: button-text, button-image, button-view
        this.state = {
            prop: item.prop,
            value: item.value, 
            data: item.$data,

            keyboardType: item.keyboardType,
            placeholder: item.placeholder
        }  
        this.style = this._style(item.style, this.state.value, this.state.data) 

    }

    _fresh = (data) => {
        this.setState({
            value: data
        })
    } 

    render () { 
        return (  
            util.startWith('input-area', this.props.item.type)
            ? 
            <View style={[theme.external[this.props.item.type], this.style]}>
                <TextInput  
                    underlineColorAndroid="transparent"  
                    placeholder={this.state.placeholder} 
                    placeholderTextColor={this.style.placeholderTextColor || theme.color.placeholder}
                    autoFocus={this.props.item.focus}
                    autoCorrect={false}  
                    multiline = {true}
                    maxLength={this.props.item.maxLength}
                    underlineColorAndroid={'transparent'}
                    style={[
                        {textAlignVertical: 'top', padding: 0}, 
                        theme.external[this.props.item.type],  
                        util.makeStyle(this.style, ...styleItems)
                    ]} 
                    {...this.props.item.others}
                    value={this.state.value}  
                    onChangeText={this._change}/>
                    {
                        this.props.item.maxLength ? 
                        <Text style={[{textAlign: 'right', color: theme.color.placeholder}, util.makeStyle(this.style, 'color', 'fontSize')]}>
                            {(this.state.value + '').length + ' / ' + this.props.item.maxLength}
                        </Text> : null
                    }
            </View>
            :
            <View style={[theme.external[this.props.item.type], this.style]}>
                <TextInput  
                    underlineColorAndroid="transparent" 
                    keyboardType={util.startWith('input-password', this.props.item.type)  ? 'default' : this.state.keyboardType || 'default'}   
                    placeholder={this.state.placeholder} 
                    placeholderTextColor={this.style.placeholderTextColor || theme.color.placeholder}
                    autoFocus={this.props.item.focus}
                    autoCorrect={false} 
                    autoCapitalize={'none'}  
                    {...this.props.item.others}
                    maxLength={this.props.item.maxLength}
                    secureTextEntry={this.props.item.type === 'input-password'}
                    clearButtonMode={'while-editing'} 
                    style={[{padding: 0}, theme.external[this.props.item.type],  util.makeStyle(this.style, ...styleItems)]} 
                    value={this.state.value}  
                    onChangeText={this._change}/>
            </View>
        )
    }
}
