import React from 'react'
import {Text, View} from 'react-native'
import util from '../../utils/util'
import theme from '../../config/theme'
import CheckBox from '../FdCheckBox/index'
import Base from '../Base'
const styleItems = [
    'margin',
    'marginLeft',
    'marginRight',
    'marginBottom',
    'marginTop',
    'padding',
    'paddingLeft',
    'paddingRight', 
    'paddingTop', 
    'paddingBottom', 
]
export default class extends Base { 
    constructor (props) {
        super (props)
        let item = props.item || {} 

        this.state = {
            type: item.type,
            prop: item.prop,
            value: this._resetValue(item.value), 
            data: item.$data, 
        }   
        
        this.style = this._style(item.style, this.state.value, this.state.data)   
        this.options = this._options(item.options)  
    } 
    _resetValue = (value) => {
        if (!value)
            return []
        else if (Array.isArray(value))
            return value
        else return value.split(',')
    }

    componentWillReceiveProps(nextProps) { 
        let rsValue = this._resetValue(nextProps.item.value)
        
        if (!util.equals(this.state.value, rsValue)) 
            this.setState({
                value: rsValue
            })
    } 
  
    _submit = (params) => { 
        let value = this.state.value

        if (params.value) { 
            value.push(params.prop) 
        } else {
            let index = value.indexOf(params.prop)
            if (index != -1)
                value.splice(index, 1)
        }  
        this._change(value)
         
    }
    render () {   
        return (
            <View style={[
                {flexDirection: 'row'},
                util.makeStyle(theme.external[this.props.item.type], ...theme.styleContain), 
                util.makeStyle(this.style, ...theme.styleContain, 'flex')
            ]}>
                {
                    this.options.map((el, index) => {
                        return <View key={index} style={[
                                {flexDirection: 'row', alignItems: 'center'}
                            ]}>
                            <CheckBox 
                                item={{
                                    prop: el.value,
                                    checked: this.props.item.checked, 
                                    unCheck: this.props.item.unCheck, 
                                    value: this.state.value.includes(el.value),
                                }} 
                                change={this._submit}
                            />
                            <Text style={[
                                {
                                    color: theme.color.optionColor,
                                    fontSize: theme.size.primarySize, 
                                    marginLeft: 5,
                                    marginRight: theme.size.itemSpace
                                },
                                util.makeStyle(theme.external[this.props.item.type], 'fontSize', 'color'),
                                util.makeStyle(this.style, 'fontSize', 'color'),
                                this.state.value.includes(el.value) && {color: theme.color.primaryColor}
                            ]}>
                                {el.label}
                            </Text>
                        </View>
                    })
                }
            </View>
        )
    }
} 