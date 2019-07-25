import React, { Component } from 'react';
import * as Progress from 'react-native-progress'
import { View } from 'react-native';
import theme from '../../config/theme'
import util from '../../utils/util'
import Base from '../Base' 

export default class extends Base {

	constructor(props) {
        super(props)
        
        let item = props.item || {}
		this.state = {
			value: item.value,
            prop: item.prop,
            data: item.$data
        }

        this.style = this._style(item.style, this.state.value, this.state.data) 
    }

	componentWillReceiveProps(nextProps) {
		this.setState({
			value: nextProps.item.value
		})
	}
 
	render() {
        let tag, {value} = this.state

		if (util.startWith(this.props.item.type, 'progress-circle')) {
			tag = <Progress.Circle progress={value} color={theme.color.primaryColor} formatText={() => {return this.state.value * 100 + '%'}} showsText={true} width={this.style.width || 60} />
		} else {
			tag = <Progress.Bar progress={value} width={this.style.width || 60} color={theme.color.primaryColor}/>
		}
        
		return <View style={[theme.external[this.props.item.type], this.style]}>
			{
				tag
			}
		 </View>
	}
}
