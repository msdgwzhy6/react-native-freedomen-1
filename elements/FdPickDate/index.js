import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker'
import { 
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import theme from '../../config/theme'
import util from '../../utils/util'
import Base from '../Base' 

export default class extends Base {

	constructor(props) {

        super(props)
        
        let item = props.item || {}

        const types = {
            'pickdate': 'date', 
            'pickdatetime': 'datetime',
            'picktime':  'time'
        }
        this.mode = types[item.type]

		this.state = {
			value: item.value,
            prop: item.prop,
            placeholder: item.placeholder
        }

        this.style = this._style(item.style, this.state.value, this.state.data) 
        this.filter = this._filter(item.filter, this.state.value, this.state.data)
    }
    
	componentWillReceiveProps(nextProps) {
        if (nextProps.item.value != this.state.value)
            this.setState({
                value: nextProps.item.value
            })
	}
 
	render() {
        return (
            <View style={[theme.external[this.props.item.type], this.style]}>
                <TouchableOpacity 
                    onPress={params => {
                        this.date.onPressDate()
                    }} >
                    <Text style={[
                        {color: this.state.value? theme.color.optionColor: theme.color.placeholder}, theme.external[this.props.item.type], this.state.value && util.makeStyle(this.style, 'fontSize', 'color')]}>
                        {
                            this.props.item.filter ? this._filter() : this.state.value || this.state.placeholder
                        }
                    </Text>
                </TouchableOpacity>
                <DatePicker
                    ref={ref => this.date = ref}
                    style={{width: 0, height: 0}}
                    date={this.state.date}
                    mode={this.mode}
                    minDate="1900-01-01"
                    maxDate="2050-01-01"
                    confirmBtnText="确定"
                    cancelBtnText="取消"
                    hideText
                    showIcon={false}
                    onDateChange={this._change}
                />          
            </View>
        )
	}
}
 