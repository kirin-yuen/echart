// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 配置
var option = require('./echart-config');

// 组件
require('echarts/lib/chart/scatter');
require('echarts/lib/chart/map');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// 中国地图
require('echarts/map/js/china');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 初始化绘制图表
myChart.setOption(option);

// 刷新，还原地图
myChart.on('restore', function(target){
    option.geo.zoom = 1;
    option.geo.center = null;
    this.setOption(option);

});

myChart.on('click', function(target){
    // 散点图，设置缩放并移动视觉中心
    if(target.componentType === 'series'){
        option.geo.zoom = 5;
        option.geo.center = target.value;
        this.setOption(option);
    }
})
