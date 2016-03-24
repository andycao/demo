define(["jquery", "echarts", "./blue.js"], function($, ec, blue) {
    console.log(ec);

    console.log(blue);

    var option = {
        tooltip: {
            show: true
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        legend: {
            data:['销量']
        },
        xAxis : [
        {
            type : 'category',
            data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        }
        ],
        yAxis : [
        {
            type : 'value'
        }
        ],
        series : [
        {
            "name":"销量",
            "type":"bar",
            "data":[5, 20, 40, 10, 10, 20]
        }
        ]
    };

    var option2 = {
        title : {
            text: '未来一周气温变化',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['最高气温','最低气温']
        },
        calculable : false,
        xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日', 'a', 'b']
        }
        ],
        yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            }
        }
        ],
        series : [
        {
            name:'最高气温',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10, 20, 30],
            markPoint : {
                data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0, 4],
            markPoint : {
                data : [
                {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                {type : 'average', name : '平均值'}
                ]
            }
        }
        ]
    };

    var option3 = {    
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series : [
        {
            name:'业务指标',
            type:'gauge',
            min: 0,
            max: 200,
            detail : {formatter:'{value}'},
            data:[{value: 50, name: '配置得分'}]
        }
        ]
    };

    var option4 = {
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        calculable : false,
        series : [
        {
            name:'访问来源',
            type:'pie',
            radius : ['50%', '70%'],
            itemStyle : {
                normal : {
                    label : {
                        show : true,
                        position : 'inner',
                        formatter: '{d}%'
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'inner',
                        formatter: '{d}%'

                    }
                }
            },
            data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
            ]
        }
        ]
    };

    var option5 = {
        title : {
            text : '时间坐标折线图',
            subtext : 'dataZoom支持'
        },
        tooltip : {
            trigger: 'axis',
            formatter : function (params) {
                var date = new Date(params.value[0]);
                data = date.getFullYear() + '-'
                + (date.getMonth() + 1) + '-'
                + date.getDate()
                return data + '<br/>'
                + params.value[1] + ', ' 
                + params.value[2];
            }
        },
        dataZoom: {
            show: false,
            start : 0
        },
        legend : {
            data : [{
                name: '沪深300'
            }]
        },
        grid: {
            y2: 80
        },
        xAxis : [
        {
            type : 'time',
            splitNumber: 8,
            axisTick: {
                show : true,
                inside : true
            },
            axisLabel : {
                show : true,
                formatter : function(params){
                    console.log(params);
                    var date = new Date(params)
                    return date.getFullYear();
                }
            }
        }
        ],
        yAxis : [
        {
            type : 'value'
        }
        ],
        series : [
        {
            name: '沪深300',
            type: 'line',
            smooth: true,
            symbol: 'image://img/favicon.png',
            data: (function () {
                var d = [];
                var len = 0;
                var now = new Date();
                var value;
                while (len++ < 40) {
                    d.push([
                        new Date(2014, 9, 1, 0, len * 10000),
                        (Math.random()*30).toFixed(2)
                        ]);
                }
                return d;
            })()
        }
        ]
    };

    var option6 = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        calculable : true,
        xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
        ],
        yAxis : [
        {
            type : 'value'
        }
        ],
        series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {
                areaStyle: {type: 'default', color: 'white'}
            }},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default', color: 'yellow'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {lineStyle: {type: 'solid', color: 'black', shadowColor : 'black', shadowBlur : '10'}}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
        ]
    };


    var option7 = {
        legend: {
        orient: 'horizontal', // 'vertical'
        itemGap: 20,
        data: [
        {
            name:'蒸发量',
            icon : 'image://img/favicon.png'
        },
        '降水量','最高气温'
        ]
    },
    xAxis :{
        data : ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis : [
    {
        type : 'value',
        axisLabel : {
            formatter: '{value} ml'
        }
    },
    {
        type : 'value',
        axisLabel : {
            formatter: '{value} °C'
        },
        splitLine : {show : false}
    }
    ],
    series : [
    {
        name:'蒸发量',
        type:'bar',
        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
    },
    {
        name:'最高气温',
        type:'line',
        yAxisIndex: 1,
        data:[11, 11, 15, 13, 12, 13, 10]
    },
    {
        name:'降水量',
        type:'bar',
        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
    }
    ]
};      

    // 为echarts对象加载数据 
    ec.init(document.getElementById('main')).setOption(option); 
    ec.init(document.getElementById('chart2')).setOption(option2); 
    var mychart = ec.init(document.getElementById('chart3'));
    mychart.setTheme(blue);
    mychart.setOption(option3);
    ec.init(document.getElementById('chart4')).setOption(option4);
    ec.init(document.getElementById('chart5')).setOption(option5);
    ec.init(document.getElementById('chart6')).setOption(option6);
    ec.init(document.getElementById('chart7')).setOption(option7);


});