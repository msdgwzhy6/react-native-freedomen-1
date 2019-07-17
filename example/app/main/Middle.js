import React from 'react'
import {Text} from "react-native";
import Freedomen from 'react-native-freedomen'
export default  class  extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
          list: []
        }
    }
    componentDidMount() {
       this.loadData(1)
    }
    loadData(pageNo) {
        let list, datas = [
            {title: '今天天气不是很好', content: '近日连续暴雨', zan: false, image: 'http://b-ssl.duitang.com/uploads/item/201804/20/20180420104543_nmY2l.thumb.700_0.jpeg'},
            {title: '今天天气好', content: '晴空万里', zan: true, image: 'http://b-ssl.duitang.com/uploads/item/201712/03/20171203141246_Tkv5U.thumb.700_0.jpeg'},
            {title: '心情不好怎么办', content: '喝两杯', zan: false, image: require('../assets/header.jpeg')},
            {title: '今天天气不是很好', content: '近日连续暴雨', zan: 0, image: 'http://b-ssl.duitang.com/uploads/item/201804/20/20180420104543_nmY2l.thumb.700_0.jpeg'},
            {title: '今天天气好', content: '晴空万里', zan: true, image: 'http://b-ssl.duitang.com/uploads/item/201712/03/20171203141246_Tkv5U.thumb.700_0.jpeg'},
            {title: '心情不好怎么办', content: '喝两杯', zan: false, image: require('../assets/header.jpeg')},
            {title: '今天天气不是很好', content: '近日连续暴雨', zan: false, image: 'http://b-ssl.duitang.com/uploads/item/201804/20/20180420104543_nmY2l.thumb.700_0.jpeg'},
            {title: '今天天气好', content: '晴空万里', zan: true, image: 'http://b-ssl.duitang.com/uploads/item/201712/03/20171203141246_Tkv5U.thumb.700_0.jpeg'},
            {title: '今天天气好', content: '晴空万里', zan: true, image: 'http://b-ssl.duitang.com/uploads/item/201712/03/20171203141246_Tkv5U.thumb.700_0.jpeg'},
            {title: '心情不好怎么办', content: '喝两杯', zan: false, image: require('../assets/header.jpeg')},
            {title: '今天天气不是很好', content: '近日连续暴雨', zan: 0, image: 'http://b-ssl.duitang.com/uploads/item/201804/20/20180420104543_nmY2l.thumb.700_0.jpeg'},
            {title: '今天天气好', content: '晴空万里', zan: true, image: 'http://b-ssl.duitang.com/uploads/item/201712/03/20171203141246_Tkv5U.thumb.700_0.jpeg'},
            {title: '心情不好怎么办', content: '喝两杯', zan: false, image: require('../assets/header.jpeg')},
            {title: '今天天气不是很好', content: '近日连续暴雨', zan: false, image: 'http://b-ssl.duitang.com/uploads/item/201804/20/20180420104543_nmY2l.thumb.700_0.jpeg'},
            {title: '今天天气好', content: '晴空万里', zan: true, image: 'http://b-ssl.duitang.com/uploads/item/201712/03/20171203141246_Tkv5U.thumb.700_0.jpeg'},
        ]
        
        list = datas

        setTimeout(() => {
            this.setState({
                list:  list
            })
        }, 200);
    }
  render() {
    return (
        <Freedomen.FreshList
            data={this.state.list}
            event={params => {
              if (params.prop == 'zan') {
                params.row.zan = !params.row.zan
                return params.row
              } else if (['$page', '$fresh'].includes(params.prop))
                this.loadData(params.row.pageNo)
            }}
            columns={[
              {type: 'text-h4', prop: 'title'},
              [
                [
                    {type:　'text', prop: 'content', style: {flex: 1}},
                    [
                        {type: 'text', value: '2019-08-12', style: {marginRight: 10}},
                        {type: 'button-image-icon', prop: 'zan', filter: value => {
                            return value ? require('../assets/love.png') : require('../assets/unlove.png')
                        }},
                        {type: 'br', style: {flexDirection: 'row'}}
                    ],
                    {type: 'br', style: {flex: 1}}
                ],
                {type: 'image', prop: 'image', style: {width: 120, height: 68}},
                {type: 'br', style: {flexDirection: 'row'}}
              ],
              {type: 'br-row'}
            ]}
        />
    );
    }
  }