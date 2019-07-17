export default {
    search: [
        {type: 'image-icon', value: require('../assets/search.png'), style: {marginRight: 6}},
        {type: 'input-text', prop: 'searchContent', placeholder: '请输入要搜索的商品', style: {flex: 1}},
        {type: 'button-image-icon', prop: 'cancel',  value: require('../assets/cancel.png'), load: (value, data) => data.searchContent},
        {type: 'br-row', style: { backgroundColor: '#f1f1f1', borderRadius: 10}}
    ], 
}