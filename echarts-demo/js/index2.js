define(["jquery", "echarts", "./blue.js"], function($, ec, blue) {
    console.log(ec);
    console.log(blue);



    var option1 = {
        backgroundColor: '#fff',
        calculable: false,
        tooltip : {
            trigger: 'axis'
        },
        grid : {
            borderWidth: 0
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color : '#8A8A8A'
                    }
                },
                splitLine: {
                    show: false
                },
                splitArea : {
                    show: false
                },
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    textStyle: {
                        color: '#8A8A8A'
                    },
                    formatter : (function(str){
                        return str + '%';

                    }),
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#C0C7D4'],
                        type: 'dashed'
                    }
                }
            }
        ],
        series : [
            {
                name:'01',
                type:'line',
                itemStyle: {
                    normal: {
                        lineStyle : {
                            color :'#F47051'
                        },
                        areaStyle : {
                            color : 'rgba(253, 115, 76, 0.1)'
                        }
                    }
                },
                data:[10, -12, 21, 54, 260, -830, 710]
            },
            {
                name:'02',
                type:'line',
                itemStyle: {
                    normal: {
                        lineStyle : {
                            color : '#242B41'
                        },
                        areaStyle : {
                            color : 'rgba(36, 43, 65, 0.1)'
                        }
                    }
                },
                data:[30, 182, -434, 791, 390, 30, 10]

            }
        ]
    };




    // 为echarts对象加载数据
    var mychart = ec.init(document.getElementById('chart1'));
    // mychart.setTheme(blue);
    mychart.setOption(option1);



});