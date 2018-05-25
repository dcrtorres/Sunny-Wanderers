function primary_dongcheng(){
Highcharts.chart('primary', {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
		width: 1000,
		 height: 750,
		 backgroundColor:"transparent"
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        title: {
            enabled: true,
            text: ''
        },
		labels: {
                style: {
                    //color: 'red',
                    fontSize:'15px' 
                }
            },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: ''
        },
		labels: {
            style: {
                    //color: 'red',
                    fontSize:'15px' 
                }
            },
        gridLineWidth : 0
    },
		navigation: {
		buttonOptions: {
			verticalAlign: 'top',
			y: 500,
			x: -400
		}
	},
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        margin: 100,
        floating: false,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.50)',
        borderWidth: 0
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 6,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{point.name}</b><br>',
                pointFormat: '{point.name} <br>Average Housing Price (/㎡) {point.unitprice} RMB',
				valueDecimals: 2
            }
        }
    },
    series: [{
        name: 'Class 1 Division 1',
        color: 'rgba(189,3,89, .9)',
        zIndex: 2,
        turboThreshold:3000,
        marker: {
                radius:6,
                symbol: 'circle'
            } ,
        data: [{x: 17, y: 5, name: 'Beijing Dongcheng District Fuxue Hutong Elementary School', unitprice: 127732.5625},
{x: 16, y: 1, name: 'Shijia Hutong Primary School, Dongcheng District, Beijing', unitprice: 120249.80067},
{x: 10, y: 9, name: 'Beijing Guangming Primary School', unitprice: 85093.546428999995}
],
         


    },
	{
        name: 'Class 1 Division 2',
        color: 'rgba(255,162,149, .9)',
        zIndex: 2,
        marker: {
                radius:6,
                symbol: 'circle'
            } ,
        data: [{x: 15, y: 4, name: 'Beijing Jingshan School', unitprice: 114215.375},
{x: 14, y: 8, name: 'Beijing Dongcheng District Branch Office Elementary School', unitprice: 112169.5},
{x: 14, y: 9, name: 'The Fourth Primary School in Hepingli, Dongcheng District, Beijing', unitprice: 110524.0},
{x: 11, y: 6, name: 'Beijing Huiwen First Primary School', unitprice: 93260.666664999997},
{x: 7, y: 5, name: 'Beijing First Normal School Affiliated Elementary School', unitprice: 66947.899999999994}




]

    },{
        name: 'Class 2 Division 1',
        color: 'rgba(243,132,71, .9)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 14, y: 7, name: 'Dongcheng District, Beijing Dengshikou Primary School', unitprice: 110586.51818},
{x: 13, y: 8, name: 'Beijing Shijia Elementary School, Dongcheng District, Beijing', unitprice: 105513.46324},
{x: 13, y: 9, name: 'Beijing Dongcheng District Hepingli First Primary School', unitprice: 100698.75},
{x: 12, y: 5, name: 'Dongcheng District, Beijing Dongjiaminxiang Primary School', unitprice: 95725.966666666602},
{x: 12, y: 6, name: 'The 9th Primary School in Hepingli, Dongcheng District, Beijing', unitprice: 96554.861109999998},
{x: 12, y: 7, name: 'Ditan Primary School, Dongcheng District, Beijing', unitprice: 94817.112500000003},
{x: 12, y: 8, name: 'Beijing Chongwen Primary School', unitprice: 97163.285924545402},
{x: 11, y: 5, name: 'Peixin Primary School, Dongcheng District, Beijing', unitprice: 92035.690873999905},
{x: 10, y: 7, name: 'Beijing Dongcheng District Shijia Experimental School (Shuguang)', unitprice: 87701.243927000003},
{x: 10, y: 8, name: 'Beijing Dongcheng District Xizhong Street Primary School', unitprice: 85654.512499999997},
{x: 9, y: 4, name: 'Beijing Dongcheng District Board Factory Primary School', unitprice: 81657.941175},
{x: 7, y: 4, name: 'Jingtai Primary School, Dongcheng District, Beijing', unitprice: 68375.444443333297}
]

    },{
        name: 'Class 2 Division 2',
        color: 'rgba(255,162,149, .9)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 17, y: 4, name: "Beijing Dongcheng District Yu'an Primary School", unitprice: 125217.72142857101},
{x: 15, y: 2, name: 'Beijing Dongcheng District Shijin Garden Primary School', unitprice: 115965.375},
{x: 15, y: 3, name: 'Beijing Dongcheng District Art Museum Houjie Primary School', unitprice: 112275.39999999999},
{x: 14, y: 5, name: 'Beijing Dongcheng District Xinkai Road East Zongbu Elementary School', unitprice: 106793.66665},
{x: 14, y: 6, name: 'Beijing Dongcheng District School Hutong Elementary School', unitprice: 109868.58333333299},
{x: 13, y: 4, name: 'Dongcheng District Elementary School, Dongcheng District, Beijing', unitprice: 103519.78571500001},
{x: 13, y: 5, name: 'Beijing Dongcheng District Huimin Primary School', unitprice: 104521.194438333},
{x: 13, y: 6, name: 'Beijing Dongcheng District Normal School Affiliated Elementary School', unitprice: 103778.0},
{x: 13, y: 7, name: 'Beijing Dongcheng District Fresh Hutong Elementary School', unitprice: 103153.21968749999},
{x: 12, y: 4, name: 'The Second Primary School in Hepingli, Dongcheng District, Beijing', unitprice: 96902.702380000002},
{x: 11, y: 3, name: 'The Third Primary School in Hepingli, Dongcheng District, Beijing', unitprice: 89721.958333749993},
{x: 11, y: 4, name: 'Beijing Dongcheng District Xinjing Primary School', unitprice: 92944.408786666594},
{x: 10, y: 5, name: 'Beijing Dongcheng District Stadium Road Primary School', unitprice: 83699.887499999997},
{x: 10, y: 6, name: 'Beijing Dongcheng District Huimin Experimental Primary School', unitprice: 84183.960000000006},
{x: 9, y: 3, name: 'Central Academy of Fine Arts Huazhong Yimei Primary School', unitprice: 76588.679999999993}



]

    }, {
        name: 'General',
        color: 'rgba(227,89,132, .3)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 17, y: 1, name: 'Beijing Dongcheng District Maoer Hutong Elementary School', unitprice: 129710.96666000001},
{x: 17, y: 2, name: 'Beijing Dongcheng District Fangjia Hutong Elementary School', unitprice: 126880.0577375},
{x: 17, y: 3, name: 'Beijing Dongcheng District Weaving and Dyeing Bureau Primary School', unitprice: 126211.333325},
{x: 15, y: 1, name: 'Beichizi Primary School, Dongcheng District, Beijing', unitprice: 114625.10416250001},
{x: 14, y: 1, name: 'Dongsi District, Beijing City, fourteen primary school', unitprice: 110634.666675},
{x: 14, y: 2, name: 'Beijing Dongcheng District Donggaofang Primary School', unitprice: 109983.541675},
{x: 14, y: 3, name: 'Beixinqiao Primary School, Dongcheng District, Beijing', unitprice: 106289.99903333301},
{x: 14, y: 4, name: 'Beiluoguxiang Primary School, Dongcheng District, Beijing', unitprice: 107780.291666666},
{x: 13, y: 1, name: 'Beijing Dongcheng District Fahuasi Street Primary School', unitprice: 100530.25},
{x: 13, y: 2, name: 'Beijing Dongbu District Xibubu Primary School', unitprice: 100339.73051454499},
{x: 13, y: 3, name: 'Beijing Dongcheng District Yonghegong Primary School', unitprice: 104704.14583125},
{x: 12, y: 1, name: 'Youth Lake Primary School, Dongcheng District, Beijing', unitprice: 99468.260318000001},
{x: 12, y: 2, name: 'Beijing Heping North Road School', unitprice: 96625.476190000001},
{x: 12, y: 3, name: 'Beijing First Middle School', unitprice: 99433.479999999996},
{x: 11, y: 1, name: 'Dongyi District, Beijing Xinyi Primary School', unitprice: 89981.217575999995},
{x: 11, y: 2, name: 'Beijing Dongcheng District Chunjiang Primary School', unitprice: 90786.012698571401},
{x: 10, y: 1, name: 'Anwai Sanyuan Primary School, Dongcheng District, Beijing', unitprice: 85794.5},
{x: 10, y: 2, name: 'Wenhui Primary School, Dongcheng District, Beijing', unitprice: 85944.553594666606},
{x: 10, y: 3, name: 'Dongcheng Primary School, Dongcheng District, Beijing', unitprice: 85817.703703333304},
{x: 10, y: 4, name: 'Jingzhong Street Primary School, Dongcheng District, Beijing', unitprice: 82451.865383333294},
{x: 9, y: 1, name: 'Tiantan Dongli Primary School, Dongcheng District, Beijing', unitprice: 76802.285709999996},
{x: 9, y: 2, name: 'Beijing Dongcheng District Jintai College Primary School', unitprice: 81113.625},
{x: 8, y: 1, name: 'Tiantan Nanli Primary School, Dongcheng District, Beijing', unitprice: 73402.866666000002},
{x: 7, y: 1, name: "Ding'anli Primary School, Dongcheng District, Beijing", unitprice: 66892.133333333302},
{x: 7, y: 2, name: 'Baohuali Primary School, Dongcheng District, Beijing', unitprice: 64208.909091428497},
{x: 7, y: 3, name: 'Dongcheng District, Beijing Innovation Primary School', unitprice: 69162.829166249998}





      

    ]},{
        name: 'Class 1 Division 1(Corresponding Middle School)',
        color: 'rgba(189,3,89, .9)',
        zIndex: 1,
        turboThreshold:3000,
        marker: {
                radius:9,
                symbol: 'circle'
            } ,
        data: [
],
         


    },
	{
        name: 'Class 1 Division 2(Corresponding Middle School)',
        color: 'rgba(255,162,149, .9)',
        zIndex: 1,
        marker: {
                radius:12,
                symbol: 'circle'
            } ,
        data: [{x: 15, y: 4, name: 'Beijing Jingshan School', unitprice: 114215.375}





]

    },{
        name: 'Class 2 Division 1(Corresponding Middle School)',
        color: 'rgba(243,132,71, .9)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 14, y: 5, name: 'Beijing Dongcheng District Xinkai Road East Zongbu Elementary School', unitprice: 106793.66665},
{x: 13, y: 9, name: 'Beijing Dongcheng District Hepingli First Primary School', unitprice: 100698.75},
{x: 12, y: 7, name: 'Ditan Primary School, Dongcheng District, Beijing', unitprice: 94817.112500000003},
{x: 10, y: 1, name: 'Anwai Sanyuan Primary School, Dongcheng District, Beijing', unitprice: 85794.5}

]

    },{
        name: 'Class 2 Division 2(Corresponding Middle School)',
        color: 'rgba(255,162,149, .9)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [
]

    }, {
        name: 'General(Corresponding Middle School)',
        color: 'rgba(227,89,132, .3)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 14, y: 1, name: 'Dongsi District, Beijing City, fourteen primary school', unitprice: 110634.666675},
{x: 14, y: 3, name: 'Beixinqiao Primary School, Dongcheng District, Beijing', unitprice: 106289.99903333301},
{x: 12, y: 2, name: 'Beijing Heping North Road School', unitprice: 96625.476190000001},
{x: 12, y: 3, name: 'Beijing First Middle School', unitprice: 99433.479999999996},
{x: 11, y: 6, name: 'Beijing Huiwen First Primary School', unitprice: 93260.666664999997},
{x: 7, y: 4, name: 'Jingtai Primary School, Dongcheng District, Beijing', unitprice: 68375.444443333297}






      
    ]},{
        name: 'No-Corresponding',
        color: 'rgba(130, 130, 130, .3)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 17, y: 1, name: 'Beijing Dongcheng District Maoer Hutong Elementary School', unitprice: 129710.96666000001},
{x: 17, y: 2, name: 'Beijing Dongcheng District Fangjia Hutong Elementary School', unitprice: 126880.0577375},
{x: 17, y: 3, name: 'Beijing Dongcheng District Weaving and Dyeing Bureau Primary School', unitprice: 126211.333325},
{x: 17, y: 4, name: "Beijing Dongcheng District Yu'an Primary School", unitprice: 125217.72142857101},
{x: 17, y: 5, name: 'Beijing Dongcheng District Fuxue Hutong Elementary School', unitprice: 127732.5625},
{x: 16, y: 1, name: 'Shijia Hutong Primary School, Dongcheng District, Beijing', unitprice: 120249.80067},
{x: 15, y: 1, name: 'Beichizi Primary School, Dongcheng District, Beijing', unitprice: 114625.10416250001},
{x: 15, y: 2, name: 'Beijing Dongcheng District Shijin Garden Primary School', unitprice: 115965.375},
{x: 15, y: 3, name: 'Beijing Dongcheng District Art Museum Houjie Primary School', unitprice: 112275.39999999999},
{x: 14, y: 2, name: 'Beijing Dongcheng District Donggaofang Primary School', unitprice: 109983.541675},
{x: 14, y: 4, name: 'Beiluoguxiang Primary School, Dongcheng District, Beijing', unitprice: 107780.291666666},
{x: 14, y: 6, name: 'Beijing Dongcheng District School Hutong Elementary School', unitprice: 109868.58333333299},
{x: 14, y: 7, name: 'Dongcheng District, Beijing Dengshikou Primary School', unitprice: 110586.51818},
{x: 14, y: 8, name: 'Beijing Dongcheng District Branch Office Elementary School', unitprice: 112169.5},
{x: 14, y: 9, name: 'The Fourth Primary School in Hepingli, Dongcheng District, Beijing', unitprice: 110524.0},
{x: 13, y: 1, name: 'Beijing Dongcheng District Fahuasi Street Primary School', unitprice: 100530.25},
{x: 13, y: 2, name: 'Beijing Dongbu District Xibubu Primary School', unitprice: 100339.73051454499},
{x: 13, y: 3, name: 'Beijing Dongcheng District Yonghegong Primary School', unitprice: 104704.14583125},
{x: 13, y: 4, name: 'Dongcheng District Elementary School, Dongcheng District, Beijing', unitprice: 103519.78571500001},
{x: 13, y: 5, name: 'Beijing Dongcheng District Huimin Primary School', unitprice: 104521.194438333},
{x: 13, y: 6, name: 'Beijing Dongcheng District Normal School Affiliated Elementary School', unitprice: 103778.0},
{x: 13, y: 7, name: 'Beijing Dongcheng District Fresh Hutong Elementary School', unitprice: 103153.21968749999},
{x: 13, y: 8, name: 'Beijing Shijia Elementary School, Dongcheng District, Beijing', unitprice: 105513.46324},
{x: 12, y: 1, name: 'Youth Lake Primary School, Dongcheng District, Beijing', unitprice: 99468.260318000001},
{x: 12, y: 4, name: 'The Second Primary School in Hepingli, Dongcheng District, Beijing', unitprice: 96902.702380000002},
{x: 12, y: 5, name: 'Dongcheng District, Beijing Dongjiaminxiang Primary School', unitprice: 95725.966666666602},
{x: 12, y: 6, name: 'The 9th Primary School in Hepingli, Dongcheng District, Beijing', unitprice: 96554.861109999998},
{x: 12, y: 8, name: 'Beijing Chongwen Primary School', unitprice: 97163.285924545402},
{x: 11, y: 1, name: 'Dongyi District, Beijing Xinyi Primary School', unitprice: 89981.217575999995},
{x: 11, y: 2, name: 'Beijing Dongcheng District Chunjiang Primary School', unitprice: 90786.012698571401},
{x: 11, y: 3, name: 'The Third Primary School in Hepingli, Dongcheng District, Beijing', unitprice: 89721.958333749993},
{x: 11, y: 4, name: 'Beijing Dongcheng District Xinjing Primary School', unitprice: 92944.408786666594},
{x: 11, y: 5, name: 'Peixin Primary School, Dongcheng District, Beijing', unitprice: 92035.690873999905},
{x: 10, y: 2, name: 'Wenhui Primary School, Dongcheng District, Beijing', unitprice: 85944.553594666606},
{x: 10, y: 3, name: 'Dongcheng Primary School, Dongcheng District, Beijing', unitprice: 85817.703703333304},
{x: 10, y: 4, name: 'Jingzhong Street Primary School, Dongcheng District, Beijing', unitprice: 82451.865383333294},
{x: 10, y: 5, name: 'Beijing Dongcheng District Stadium Road Primary School', unitprice: 83699.887499999997},
{x: 10, y: 6, name: 'Beijing Dongcheng District Huimin Experimental Primary School', unitprice: 84183.960000000006},
{x: 10, y: 7, name: 'Beijing Dongcheng District Shijia Experimental School (Shuguang)', unitprice: 87701.243927000003},
{x: 10, y: 8, name: 'Beijing Dongcheng District Xizhong Street Primary School', unitprice: 85654.512499999997},
{x: 10, y: 9, name: 'Beijing Guangming Primary School', unitprice: 85093.546428999995},
{x: 9, y: 1, name: 'Tiantan Dongli Primary School, Dongcheng District, Beijing', unitprice: 76802.285709999996},
{x: 9, y: 2, name: 'Beijing Dongcheng District Jintai College Primary School', unitprice: 81113.625},
{x: 9, y: 3, name: 'Central Academy of Fine Arts Huazhong Yimei Primary School', unitprice: 76588.679999999993},
{x: 9, y: 4, name: 'Beijing Dongcheng District Board Factory Primary School', unitprice: 81657.941175},
{x: 8, y: 1, name: 'Tiantan Nanli Primary School, Dongcheng District, Beijing', unitprice: 73402.866666000002},
{x: 7, y: 1, name: "Ding'anli Primary School, Dongcheng District, Beijing", unitprice: 66892.133333333302},
{x: 7, y: 2, name: 'Baohuali Primary School, Dongcheng District, Beijing', unitprice: 64208.909091428497},
{x: 7, y: 3, name: 'Dongcheng District, Beijing Innovation Primary School', unitprice: 69162.829166249998},
{x: 7, y: 5, name: 'Beijing First Normal School Affiliated Elementary School', unitprice: 66947.899999999994}



      
    ]}
    
    ]
});
}