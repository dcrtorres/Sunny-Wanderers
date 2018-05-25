function primary_haidian(){
Highcharts.chart('primary', {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
		width: 1000,
		 height: 1000,
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
			y: -15,
			x: -400
		}
	},
		navigation: {
		buttonOptions: {
			verticalAlign: 'top',
			y: 700,
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
        data: [{x: 17, y: 13, name: 'Zhongguancun No. 3 Primary School, Haidian District, Beijing', unitprice: 126029.77878625},
{x: 16, y: 2, name: 'The first elementary school in Zhongguancun, Haidian District, Beijing', unitprice: 121790.882366666},
{x: 13, y: 2, name: 'Zhongguancun Second Primary School, Haidian District, Beijing', unitprice: 105956.23732499999},
{x: 12, y: 15, name: 'Elementary School of Renmin University of China', unitprice: 99278.764286999998},
{x: 11, y: 17, name: 'Renmin University Affiliated Middle School Experimental Primary School', unitprice: 90901.173609999998}




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
        data: [{x: 15, y: 2, name: 'Peking University Primary School', unitprice: 112362.7},
{x: 12, y: 12, name: 'Haidian District Shangdi Experimental Primary School', unitprice: 94620.943836999999},
{x: 12, y: 13, name: 'Haidian District, Beijing Cui Microscience', unitprice: 94247.028122727206},
{x: 12, y: 14, name: 'Beijing Normal University Experimental Primary School', unitprice: 97199.9761857142},
{x: 10, y: 15, name: 'Wuyi Primary School, Haidian District, Beijing', unitprice: 83823.988095714201},
{x: 9, y: 6, name: 'Second Experimental Primary School Affiliated to Beijing Petroleum Institute', unitprice: 76385.625},
{x: 5, y: 4, name: 'Beijing Haidian Experimental Primary School Affiliated to Beijing Institute of Education', unitprice: 57818.083333333299}






]

    },{
        name: 'Class 2 Division 1',
        color: 'rgba(243,132,71, .9)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 12, y: 8, name: 'Wanquan Primary School, Haidian District, Beijing', unitprice: 94232.122663636299},
{x: 12, y: 9, name: 'Haidian District, Beijing Erligou Central Primary School', unitprice: 96867.225000000006},
{x: 12, y: 10, name: 'Beijing Yuying School', unitprice: 97686.52549},
{x: 12, y: 11, name: 'Beijing Institute of Technology Affiliated Primary School', unitprice: 96575.916666666599},
{x: 11, y: 12, name: 'Primary School of Chinese Academy of Agricultural Sciences', unitprice: 90139.263227407399},
{x: 11, y: 13, name: 'Beijing Medical University Affiliated Elementary School', unitprice: 89393.974891428501},
{x: 11, y: 14, name: 'Beijing Jianhua Experimental School', unitprice: 88417.25},
{x: 11, y: 15, name: 'Beijing Forestry University Affiliated Elementary School', unitprice: 88962.631580000001},
{x: 11, y: 16, name: 'Beihang University Experimental School', unitprice: 92291.3703766666},
{x: 10, y: 14, name: 'Zhongguancun No. 4 Primary School, Haidian District, Beijing', unitprice: 87039.166666666599},
{x: 8, y: 6, name: 'Qiyi Primary School, Haidian District, Beijing', unitprice: 71836.122221666606},
{x: 8, y: 7, name: 'A new school attached to Capital Normal University', unitprice: 71350.774999999994},
{x: 7, y: 10, name: 'Haidian District No.2 Experimental Primary School', unitprice: 67307.545238000006}






]

    },{
        name: 'Class 2 Division 2',
        color: 'rgba(255,162,149, .9)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 12, y: 4, name: 'Haidian District, Beijing Shuangyushu First Primary School', unitprice: 98849.344388571393},
{x: 12, y: 5, name: 'No. 5 Primary School, Yangfangdian, Haidian District, Beijing', unitprice: 96763.696292222201},
{x: 12, y: 6, name: 'Xidian Primary School, Haidian District, Beijing', unitprice: 96454.0},
{x: 12, y: 7, name: 'Northern Jiaotong University Affiliated Primary School', unitprice: 95367.641667000004},
{x: 11, y: 7, name: 'Beijing Experimental School (Haidian)', unitprice: 89716.464285714203},
{x: 11, y: 8, name: 'Beijing Eleven School One Branch School', unitprice: 93567.199999999997},
{x: 11, y: 9, name: 'Haidian District Jindian Elementary School', unitprice: 89381.797260000007},
{x: 11, y: 10, name: 'Haidian District No. 3 Experimental Primary School', unitprice: 90492.547618333294},
{x: 11, y: 11, name: 'Capital Normal University Affiliated Primary School', unitprice: 92414.142853333295},
{x: 10, y: 5, name: 'China Agricultural University Experimental Experimental Primary School', unitprice: 83683.111258947305},
{x: 10, y: 6, name: 'Beijing Bayi School', unitprice: 86799.813491666602},
{x: 10, y: 7, name: 'Jiuyi Primary School, Haidian District, Beijing', unitprice: 84433.052560769196},
{x: 10, y: 8, name: 'Beilizhuang Primary School, Haidian District, Beijing', unitprice: 83675.1666664285},
{x: 10, y: 9, name: 'Haidian District Liuyi Primary School', unitprice: 86912.288528999998},
{x: 10, y: 10, name: 'Beijing Haidian District Advance Primary School', unitprice: 85665.033331999904},
{x: 10, y: 11, name: 'Taiping Road Primary School, Haidian District, Beijing', unitprice: 83010.75},
{x: 10, y: 12, name: 'The fourth primary school of Yangfangdian, Haidian District, Beijing', unitprice: 87145.0},
{x: 10, y: 13, name: 'Garden Village No.2 Primary School, Haidian District, Beijing', unitprice: 87551.405555555495},
{x: 9, y: 4, name: 'Haidian District, Beijing Tsinghua East Road Primary School', unitprice: 76611.858332500007},
{x: 9, y: 5, name: 'Beijing Haidian District Yangfangdian Central Primary School', unitprice: 77645.438094285695},
{x: 8, y: 4, name: 'Beijing Beiwai Foreign Language School', unitprice: 71617.0},
{x: 8, y: 5, name: 'Yuquan Elementary School, Haidian District, Beijing', unitprice: 73617.433160789398},
{x: 7, y: 6, name: 'The second elementary school of Tuqiang, Haidian District, Beijing', unitprice: 68571.166667500001},
{x: 7, y: 7, name: 'Peiying Primary School, Haidian District, Beijing', unitprice: 67366.399999999994},
{x: 7, y: 8, name: 'Haidian District, Beijing Yongtai Primary School', unitprice: 66314.344117999994},
{x: 7, y: 9, name: 'Haidian District, Beijing Yuying Primary School', unitprice: 67208.428571428507},
{x: 6, y: 4, name: 'The Fourth Experimental Primary School in Haidian District, Beijing', unitprice: 62515.25}









]

    }, {
        name: 'General',
        color: 'rgba(227,89,132, .3)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 16, y: 1, name: 'Qinghe Fifth Primary School, Haidian District, Beijing', unitprice: 122997.0},
{x: 15, y: 1, name: 'Renmin University of China Affiliated Elementary School Yinyan Campus', unitprice: 115184.003366666},
{x: 14, y: 1, name: 'Liulangzhuang Primary School, Haidian District, Beijing', unitprice: 112009.6667},
{x: 13, y: 1, name: 'Beijing Haidian District Xicui Road Primary School', unitprice: 100796.77777833299},
{x: 12, y: 1, name: 'Beijing Foreign Studies University Affiliated Elementary School', unitprice: 94687.690476666598},
{x: 12, y: 2, name: 'Beijing Zhongke Qiyuan School', unitprice: 95932.583333333299},
{x: 12, y: 3, name: 'Haidian District Teachers’ Training School Affiliated Experimental Primary School', unitprice: 94975.5},
{x: 11, y: 1, name: 'Beijing Agricultural University Affiliated Elementary School', unitprice: 91413.708332499999},
{x: 11, y: 2, name: 'Dongsheng Experimental Primary School, Haidian District, Beijing', unitprice: 89188.535715000005},
{x: 11, y: 3, name: 'Haidian District Xueyuan Road Primary School', unitprice: 89335.974755384595},
{x: 11, y: 4, name: 'Haidian District Experimental Primary School', unitprice: 91310.06667},
{x: 11, y: 5, name: 'Beijing Haidian District Xinghuo Primary School', unitprice: 90208.498954374998},
{x: 11, y: 6, name: 'Beijing Institute of Technology Affiliated High School', unitprice: 88734.623609500006},
{x: 10, y: 1, name: 'Beijing 21st Century International School', unitprice: 87974.645835833304},
{x: 10, y: 2, name: 'Wanquanhe Primary School, Haidian District, Beijing', unitprice: 87913.273809999999},
{x: 10, y: 3, name: 'Haibei District, Beijing Dongbeiwang Central Primary School', unitprice: 83169.801403333302},
{x: 10, y: 4, name: 'Xiaojiahe Primary School, Haidian District, Beijing', unitprice: 82993.439153333296},
{x: 9, y: 1, name: 'Haidian District, Beijing Liangjiadian Primary School', unitprice: 76257.184524285694},
{x: 9, y: 2, name: 'Haidian District Rising Experimental School', unitprice: 76390.433334999994},
{x: 9, y: 3, name: 'Beijing Petroleum Institute Affiliated Elementary School', unitprice: 81068.550000000003},
{x: 8, y: 1, name: 'Haidian District Dinghuili Primary School', unitprice: 73087.985713999995},
{x: 8, y: 2, name: "Haidian District Xi'erqi Primary School", unitprice: 72378.769234285704},
{x: 8, y: 3, name: 'Yuquan School, Affiliated to Capital Normal University', unitprice: 75356.75},
{x: 7, y: 1, name: 'Cold Spring Elementary School, Haidian District, Beijing', unitprice: 65900.763160000002},
{x: 7, y: 2, name: 'Haidian District Peace Primary School, Beijing', unitprice: 65444.5},
{x: 7, y: 3, name: 'Haifeng District Hongfeng Primary School', unitprice: 68830.0},
{x: 7, y: 4, name: 'Beijing No.20 Middle School Affiliated Experimental School', unitprice: 64504.146517777699},
{x: 7, y: 5, name: 'Beijing Petroleum Institute Experimental Primary School', unitprice: 66067.301850000003},
{x: 6, y: 1, name: 'Zhongguancun Foreign Language School', unitprice: 61795.933333333298},
{x: 6, y: 2, name: 'Taitou Primary School, Haidian District, Beijing', unitprice: 58701.190476666598},
{x: 6, y: 3, name: 'Qinghe Fourth Primary School, Haidian District, Beijing', unitprice: 62603.931216666599},
{x: 5, y: 1, name: 'Dainengfang Primary School, Haidian District, Beijing', unitprice: 54135.0},
{x: 5, y: 2, name: 'Baijiabang Primary School, Haidian District, Beijing', unitprice: 58006.333333333299},
{x: 5, y: 3, name: 'Haidian District, Beijing Xiangshan Primary School', unitprice: 57040.428569999996},
{x: 3, y: 1, name: 'Beijing Baishuijing Elementary School, Haidian District, Beijing', unitprice: 46188.666669999999}






      

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
        data: [{x: 10, y: 11, name: 'Taiping Road Primary School, Haidian District, Beijing', unitprice: 83010.75}







]

    },{
        name: 'Class 2 Division 1(Corresponding Middle School)',
        color: 'rgba(243,132,71, .9)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 11, y: 6, name: 'Beijing Institute of Technology Affiliated High School', unitprice: 88734.623609500006},
{x: 10, y: 6, name: 'Beijing Bayi School', unitprice: 86799.813491666602}





]

    },{
        name: 'Class 2 Division 2(Corresponding Middle School)',
        color: 'rgba(255,162,149, .9)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 12, y: 3, name: 'Haidian District Teachers’ Training School Affiliated Experimental Primary School', unitprice: 94975.5},
{x: 12, y: 4, name: 'Haidian District, Beijing Shuangyushu First Primary School', unitprice: 98849.344388571393},
{x: 11, y: 8, name: 'Beijing Eleven School One Branch School', unitprice: 93567.199999999997},
{x: 11, y: 13, name: 'Beijing Medical University Affiliated Elementary School', unitprice: 89393.974891428501},
{x: 11, y: 16, name: 'Beihang University Experimental School', unitprice: 92291.3703766666},
{x: 10, y: 7, name: 'Jiuyi Primary School, Haidian District, Beijing', unitprice: 84433.052560769196},
{x: 10, y: 9, name: 'Haidian District Liuyi Primary School', unitprice: 86912.288528999998},
{x: 7, y: 7, name: 'Peiying Primary School, Haidian District, Beijing', unitprice: 67366.399999999994}

]

    }, {
        name: 'General(Corresponding Middle School)',
        color: 'rgba(227,89,132, .3)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 12, y: 2, name: 'Beijing Zhongke Qiyuan School', unitprice: 95932.583333333299},
{x: 12, y: 8, name: 'Wanquan Primary School, Haidian District, Beijing', unitprice: 94232.122663636299},
{x: 12, y: 10, name: 'Beijing Yuying School', unitprice: 97686.52549},
{x: 12, y: 11, name: 'Beijing Institute of Technology Affiliated Primary School', unitprice: 96575.916666666599},
{x: 11, y: 7, name: 'Beijing Experimental School (Haidian)', unitprice: 89716.464285714203},
{x: 11, y: 14, name: 'Beijing Jianhua Experimental School', unitprice: 88417.25},
{x: 10, y: 1, name: 'Beijing 21st Century International School', unitprice: 87974.645835833304},
{x: 10, y: 8, name: 'Beilizhuang Primary School, Haidian District, Beijing', unitprice: 83675.1666664285},
{x: 10, y: 13, name: 'Garden Village No.2 Primary School, Haidian District, Beijing', unitprice: 87551.405555555495},
{x: 9, y: 2, name: 'Haidian District Rising Experimental School', unitprice: 76390.433334999994},
{x: 8, y: 1, name: 'Haidian District Dinghuili Primary School', unitprice: 73087.985713999995},
{x: 8, y: 3, name: 'Yuquan School, Affiliated to Capital Normal University', unitprice: 75356.75},
{x: 8, y: 4, name: 'Beijing Beiwai Foreign Language School', unitprice: 71617.0},
{x: 8, y: 7, name: 'A new school attached to Capital Normal University', unitprice: 71350.774999999994},
{x: 7, y: 2, name: 'Haidian District Peace Primary School, Beijing', unitprice: 65444.5},
{x: 7, y: 4, name: 'Beijing No.20 Middle School Affiliated Experimental School', unitprice: 64504.146517777699},
{x: 6, y: 1, name: 'Zhongguancun Foreign Language School', unitprice: 61795.933333333298}


     ]}, {
        name: 'No-Corresponding',
        color: 'rgba(130, 130, 130, .3)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 17, y: 13, name: 'Zhongguancun No. 3 Primary School, Haidian District, Beijing', unitprice: 126029.77878625},
{x: 16, y: 1, name: 'Qinghe Fifth Primary School, Haidian District, Beijing', unitprice: 122997.0},
{x: 16, y: 2, name: 'The first elementary school in Zhongguancun, Haidian District, Beijing', unitprice: 121790.882366666},
{x: 15, y: 1, name: 'Renmin University of China Affiliated Elementary School Yinyan Campus', unitprice: 115184.003366666},
{x: 15, y: 2, name: 'Peking University Primary School', unitprice: 112362.7},
{x: 14, y: 1, name: 'Liulangzhuang Primary School, Haidian District, Beijing', unitprice: 112009.6667},
{x: 13, y: 1, name: 'Beijing Haidian District Xicui Road Primary School', unitprice: 100796.77777833299},
{x: 13, y: 2, name: 'Zhongguancun Second Primary School, Haidian District, Beijing', unitprice: 105956.23732499999},
{x: 12, y: 1, name: 'Beijing Foreign Studies University Affiliated Elementary School', unitprice: 94687.690476666598},
{x: 12, y: 5, name: 'No. 5 Primary School, Yangfangdian, Haidian District, Beijing', unitprice: 96763.696292222201},
{x: 12, y: 6, name: 'Xidian Primary School, Haidian District, Beijing', unitprice: 96454.0},
{x: 12, y: 7, name: 'Northern Jiaotong University Affiliated Primary School', unitprice: 95367.641667000004},
{x: 12, y: 9, name: 'Haidian District, Beijing Erligou Central Primary School', unitprice: 96867.225000000006},
{x: 12, y: 12, name: 'Haidian District Shangdi Experimental Primary School', unitprice: 94620.943836999999},
{x: 12, y: 13, name: 'Haidian District, Beijing Cui Microscience', unitprice: 94247.028122727206},
{x: 12, y: 14, name: 'Beijing Normal University Experimental Primary School', unitprice: 97199.9761857142},
{x: 12, y: 15, name: 'Elementary School of Renmin University of China', unitprice: 99278.764286999998},
{x: 11, y: 1, name: 'Beijing Agricultural University Affiliated Elementary School', unitprice: 91413.708332499999},
{x: 11, y: 2, name: 'Dongsheng Experimental Primary School, Haidian District, Beijing', unitprice: 89188.535715000005},
{x: 11, y: 3, name: 'Haidian District Xueyuan Road Primary School', unitprice: 89335.974755384595},
{x: 11, y: 4, name: 'Haidian District Experimental Primary School', unitprice: 91310.06667},
{x: 11, y: 5, name: 'Beijing Haidian District Xinghuo Primary School', unitprice: 90208.498954374998},
{x: 11, y: 9, name: 'Haidian District Jindian Elementary School', unitprice: 89381.797260000007},
{x: 11, y: 10, name: 'Haidian District No. 3 Experimental Primary School', unitprice: 90492.547618333294},
{x: 11, y: 11, name: 'Capital Normal University Affiliated Primary School', unitprice: 92414.142853333295},
{x: 11, y: 12, name: 'Primary School of Chinese Academy of Agricultural Sciences', unitprice: 90139.263227407399},
{x: 11, y: 15, name: 'Beijing Forestry University Affiliated Elementary School', unitprice: 88962.631580000001},
{x: 11, y: 17, name: 'Renmin University Affiliated Middle School Experimental Primary School', unitprice: 90901.173609999998},
{x: 10, y: 2, name: 'Wanquanhe Primary School, Haidian District, Beijing', unitprice: 87913.273809999999},
{x: 10, y: 3, name: 'Haibei District, Beijing Dongbeiwang Central Primary School', unitprice: 83169.801403333302},
{x: 10, y: 4, name: 'Xiaojiahe Primary School, Haidian District, Beijing', unitprice: 82993.439153333296},
{x: 10, y: 5, name: 'China Agricultural University Experimental Experimental Primary School', unitprice: 83683.111258947305},
{x: 10, y: 10, name: 'Beijing Haidian District Advance Primary School', unitprice: 85665.033331999904},
{x: 10, y: 12, name: 'The fourth primary school of Yangfangdian, Haidian District, Beijing', unitprice: 87145.0},
{x: 10, y: 14, name: 'Zhongguancun No. 4 Primary School, Haidian District, Beijing', unitprice: 87039.166666666599},
{x: 10, y: 15, name: 'Wuyi Primary School, Haidian District, Beijing', unitprice: 83823.988095714201},
{x: 9, y: 1, name: 'Haidian District, Beijing Liangjiadian Primary School', unitprice: 76257.184524285694},
{x: 9, y: 3, name: 'Beijing Petroleum Institute Affiliated Elementary School', unitprice: 81068.550000000003},
{x: 9, y: 4, name: 'Haidian District, Beijing Tsinghua East Road Primary School', unitprice: 76611.858332500007},
{x: 9, y: 5, name: 'Beijing Haidian District Yangfangdian Central Primary School', unitprice: 77645.438094285695},
{x: 9, y: 6, name: 'Second Experimental Primary School Affiliated to Beijing Petroleum Institute', unitprice: 76385.625},
{x: 8, y: 2, name: "Haidian District Xi'erqi Primary School", unitprice: 72378.769234285704},
{x: 8, y: 5, name: 'Yuquan Elementary School, Haidian District, Beijing', unitprice: 73617.433160789398},
{x: 8, y: 6, name: 'Qiyi Primary School, Haidian District, Beijing', unitprice: 71836.122221666606},
{x: 7, y: 1, name: 'Cold Spring Elementary School, Haidian District, Beijing', unitprice: 65900.763160000002},
{x: 7, y: 3, name: 'Haifeng District Hongfeng Primary School', unitprice: 68830.0},
{x: 7, y: 5, name: 'Beijing Petroleum Institute Experimental Primary School', unitprice: 66067.301850000003},
{x: 7, y: 6, name: 'The second elementary school of Tuqiang, Haidian District, Beijing', unitprice: 68571.166667500001},
{x: 7, y: 8, name: 'Haidian District, Beijing Yongtai Primary School', unitprice: 66314.344117999994},
{x: 7, y: 9, name: 'Haidian District, Beijing Yuying Primary School', unitprice: 67208.428571428507},
{x: 7, y: 10, name: 'Haidian District No.2 Experimental Primary School', unitprice: 67307.545238000006},
{x: 6, y: 2, name: 'Taitou Primary School, Haidian District, Beijing', unitprice: 58701.190476666598},
{x: 6, y: 3, name: 'Qinghe Fourth Primary School, Haidian District, Beijing', unitprice: 62603.931216666599},
{x: 6, y: 4, name: 'The Fourth Experimental Primary School in Haidian District, Beijing', unitprice: 62515.25},
{x: 5, y: 1, name: 'Dainengfang Primary School, Haidian District, Beijing', unitprice: 54135.0},
{x: 5, y: 2, name: 'Baijiabang Primary School, Haidian District, Beijing', unitprice: 58006.333333333299},
{x: 5, y: 3, name: 'Haidian District, Beijing Xiangshan Primary School', unitprice: 57040.428569999996},
{x: 5, y: 4, name: 'Beijing Haidian Experimental Primary School Affiliated to Beijing Institute of Education', unitprice: 57818.083333333299},
{x: 3, y: 1, name: 'Beijing Baishuijing Elementary School, Haidian District, Beijing', unitprice: 46188.666669999999}


       



    ]}
    
    ]
});
};