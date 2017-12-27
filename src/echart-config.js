// 中心数据
var center = require('../data/data');

// echart的option配置项
module.exports = {
    title: {
        text: '各地服务中心'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}<br/>{c}<br/>{d}<br/>'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    geo: {
        map: 'china',
        roam: true,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#E7E7E7',
                borderColor: 'gray'
            },
            emphasis: {
                //鼠标移上去的属性
                areaColor: 'gray'
            }
        },
        regions: []
    },
    series: [{
            name: '全国服务中心',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: center,
            symbol: 'pin',
            symbolSize: 20,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'red',
                    opacity: 0.7
                }
            }
        },
        {
            name: '全国服务中心',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: center,
            symbol: 'circle',
            symbolSize: 15,
            itemStyle: {
                normal: {
                    color: 'red',
                    opacity: 0.2
                }
            },
            rippleEffect: {
                brushType: 'stroke',
                scale: 3,
                period: 8
            }
        }
    ]
};