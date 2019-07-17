import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Text,
    Image, 
    Animated,
} from 'react-native';
import Freedomen from 'react-native-freedomen'

const tabItems = [
    {
        title: 'Home',
        activeIcon: require('./assets/home.png'),
        inactiveIcon: require('./assets/unhome.png')
    },
    {
        title: 'Middle',
        activeIcon: require('./assets/middle.png'),
        inactiveIcon: require('./assets/unmiddle.png')
    }, 
    {
        title: 'Mine',
        activeIcon: require('./assets/mine.png'),
        inactiveIcon: require('./assets/unmine.png')
    } 
]


export default class TabBar extends PureComponent {
    constructor(props) {
        super(props) 
    }
   
    render() {
        const {
            navigation, 
        } = this.props;
        
        const {
            routes
        } = navigation.state; 

        let jumpToIndex = (index) => {   
            navigation.navigate(routes[index].routeName)
        }

        return (   
                <View style={[styles.container]}>
                    {
                        routes && routes.map((route, index) => {
                            const focused = index === navigation.state.index;
                            return (
                                <TabBarItem
                                    key={index}
                                    route={route}
                                    index={index}
                                    focused={focused}
                                    jumpToIndex={jumpToIndex}
                                />
                            );
                        })
                    } 
                </View> 
        );
    }
};

class TabBarItem extends PureComponent{

    constructor(props) {
        super(props) 
    }

    render() { 
        let { index, focused, jumpToIndex} = this.props; 
        
        let item = tabItems[index];
        let image = focused ? item.activeIcon : item.inactiveIcon;
        let color = focused ? '#20A0FF' : '#cdcdcd';  
        
        return (
            <TouchableWithoutFeedback style={styles.iconView} onPress={() => jumpToIndex(index)}>
            <View style={styles.iconView}> 
            {
                index == 1 ? <Freedomen.Region 
                    columns={[
                        [
                            {type: 'image', value: image, style: {height: 24, width: 24, resizeMode: 'stretch'}},
                            {type: 'text-badge', prop: 'badge', value: 0, filter: value => value> 9 ? '9+' : value,  load: (value) => {return index == 1 && value}, style: {marginLeft: -5}},
                            {type: 'br', style: {flexDirection: "row"}}
                        ],
                        {type: 'text', value: item.title, style: {color: color}},
                        {type: 'br', style: {flex: 1, align: 'center'}}
                    ]} 
                    redux={'bar_middle'}
                    /> :  <View style={{alignItems: 'center'}}>
                        <Image source={image} style={{ width: 24, height: 24, resizeMode: 'stretch'}}/> 
                        <Text style={{color: color}}>{item.title}</Text>
                    </View>
            }
                </View>
            </TouchableWithoutFeedback>
        )
    }
  
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 52,
        backgroundColor: '#fff',
    },
    iconView: {
        flex: 1,
        alignItems: 'center',
    },
    iconText: {
        fontSize: 12,
        marginTop: 5, 
    }
});
