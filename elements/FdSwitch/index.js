import React from 'react'
import { Switch } from 'react-native' 
import theme from '../../config/theme'
import Base from '../Base'

class FdSwitch extends Base {
    constructor (props) {
        super (props)
        let item = props.item || {}
        //{item => Object: [type, value, options, label, event...]}
        //type: button-text, button-image, button-view
        this.state = {
            value: !!item.value, 
            prop: item.prop, 
            data: item.$data
        }
          
    } 
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.item.value
        })
    } 
    
    render () {
        return (
            <Switch thumbColor={theme.color.primaryColor} trackColor={{false: '#ccc', true: theme.color.primaryColor}} value={this.state.value} onValueChange={this._change}/>
        )
    }
}

export default FdSwitch