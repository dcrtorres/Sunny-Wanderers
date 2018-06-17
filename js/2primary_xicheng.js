function primary_xicheng(){
Highcharts.chart('primary', {
    chart: {
        type: 'scatter',
        zoomType: 'xy',

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
        data: [{x: 19, y: 4, name: 'Beijing Xicheng District Huangchenggen Primary School', unitprice: 141127.75},
{x: 18, y: 3, name: 'Beijing No. 2 Experimental Primary School', unitprice: 130431.566666666},
{x: 13, y: 15, name: 'Yumin Primary School, Xicheng District, Beijing', unitprice: 105227.5},
{x: 12, y: 5, name: 'Beijing Elementary School', unitprice: 96471.709959999993}






],
         


    },
	{
        name: 'Class 1 Division 2',
        color: 'rgba(167,74,78, .9)',
        zIndex: 2,
        marker: {
                radius:6,
                symbol: 'circle'
            } ,
        data: [{x: 21, y: 1, name: 'Beijing Xicheng District Hongmiao Primary School', unitprice: 150604.20000000001},
{x: 20, y: 2, name: 'Beijing Xicheng District Fighting Primary School', unitprice: 145260.0},
{x: 18, y: 2, name: 'Yuxiang Primary School, Xicheng District, Beijing', unitprice: 134966.35601875},
{x: 17, y: 6, name: 'Sanlihe Primary School, Xicheng District, Beijing', unitprice: 127317.222233333},
{x: 17, y: 7, name: 'Beijing Xicheng District Normal School Affiliated Elementary School', unitprice: 129520.79760000001},
{x: 16, y: 5, name: 'Beijing First Experimental Primary School', unitprice: 119106.0},
{x: 14, y: 2, name: 'Beijing Xicheng Middle Friendship Primary School', unitprice: 106901.05555555499}




]

    },{
        name: 'Class 2 Division 1',
        color: 'rgba(243,132,71, .9)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 20, y: 1, name: 'Xicheng District, Beijing Zizhong Primary School', unitprice: 146512.0},
{x: 17, y: 5, name: 'Beijing Yucai School', unitprice: 130178.76666666599},
{x: 13, y: 12, name: 'First Elementary School, Fuxingmenwai, Xicheng District, Beijing', unitprice: 106022.76222},
{x: 13, y: 13, name: 'First Primary School, Exhibition Road, Xicheng District, Beijing', unitprice: 102385.385490909},
{x: 13, y: 14, name: 'Beijing Xilai District Kangleli Primary School', unitprice: 104068.0},
{x: 12, y: 4, name: 'First Primary School Attached to Beijing Xuanwu Normal School', unitprice: 96890.266233333299}



]

    },{
        name: 'Class 2 Division 2',
        color: 'rgba(255,162,149, .9)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 19, y: 2, name: 'Xishiku Primary School, Xicheng District, Beijing', unitprice: 140615.33335},
{x: 19, y: 3, name: 'Beijing Leifeng Primary School', unitprice: 137540.4375},
{x: 18, y: 1, name: 'Beijing No. 2 Experimental Primary School Desheng Campus', unitprice: 131255.903442857},
{x: 17, y: 2, name: 'Beijing Xicheng District Mechanics Primary School', unitprice: 127207.6894},
{x: 17, y: 3, name: 'Xijia District, Beijing Huajia Primary School', unitprice: 127348.75},
{x: 17, y: 4, name: 'Beijing Xicheng District Huangchenggen Primary School Guanyuan Campus', unitprice: 127424.0},
{x: 16, y: 2, name: 'Xicheng District, Beijing Xinjiekou East Street Primary School', unitprice: 120711.875},
{x: 16, y: 3, name: 'Xidan District Xidan Primary School', unitprice: 123707.2222},
{x: 16, y: 4, name: "Beijing No. 2 Experimental Primary School Chang'an Campus", unitprice: 120983.666666666},
{x: 15, y: 2, name: 'Liuyin Street Primary School, Xicheng District, Beijing', unitprice: 116951.5},
{x: 15, y: 3, name: 'Xicheng District, Beijing, West Fourth Primary School', unitprice: 116237.2625},
{x: 15, y: 4, name: 'First Primary School, Shuncheng Street, Xicheng District, Beijing', unitprice: 117047.36969399999},
{x: 15, y: 5, name: 'Beijing Second Experimental Primary School Baiyun Road', unitprice: 113701.8892875},
{x: 14, y: 1, name: 'Beijing Sicheng Primary School', unitprice: 111096.41665},
{x: 13, y: 3, name: 'Beijing Xicheng District Zhonghua Road Primary School', unitprice: 100617.53703333301},
{x: 13, y: 4, name: 'Xicheng District, Beijing Yuzhong Primary School', unitprice: 105158.0191},
{x: 13, y: 5, name: 'Xicheng District, Beijing Progressive Primary School', unitprice: 102766.865471428},
{x: 13, y: 6, name: 'Xicheng District, Beijing Taoranting Primary School', unitprice: 105559.20389999999},
{x: 13, y: 7, name: 'Xichang District Xiangchang Road Primary School', unitprice: 102634.28569999999},
{x: 13, y: 8, name: 'Beijing Xicheng District Yaer Hutong Elementary School', unitprice: 105786.5},
{x: 13, y: 9, name: 'Beijing Jianzhu University Affiliated Primary School', unitprice: 101609.83333333299},
{x: 13, y: 10, name: 'Beijing No. 2 Experimental Primary School, Qinshuihe Campus', unitprice: 105843.07145},
{x: 13, y: 11, name: 'Beijing Second Experimental Primary School Yu Taoyuan Campus', unitprice: 105227.196430714},
{x: 12, y: 2, name: 'First Primary School, North Lishi Road, Xicheng District, Beijing', unitprice: 98029.154766666601},
{x: 12, y: 3, name: 'Beijing Xicheng District Half-step Bridge Elementary School', unitprice: 97203.171398125007},
{x: 10, y: 9, name: 'Beijing Elementary School', unitprice: 86268.085353636299},
{x: 10, y: 10, name: 'Shichahai Primary School, Xicheng District, Beijing', unitprice: 87134.333329999994},
{x: 10, y: 11, name: 'Xicheng District Youth Lake Primary School', unitprice: 84345.343651000003}






]

    }, {
        name: 'General',
        color: 'rgba(227,89,132, .3)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 19, y: 1, name: 'Beijing Zhengze School (New) Non-profit private schools', unitprice: 136393.72115},
{x: 17, y: 1, name: 'Beijing First Experimental Primary School Front Campus', unitprice: 125926.51125},
{x: 16, y: 1, name: 'Wuchengtong Primary School, Xicheng District, Beijing', unitprice: 123127.86331250001},
{x: 15, y: 1, name: 'Beijing Xicheng District Fuzhou Hall Primary School', unitprice: 115960.88341090899},
{x: 13, y: 1, name: 'Xicheng District New Century Experimental Primary School', unitprice: 100428.666666666},
{x: 13, y: 2, name: 'First Primary School outside Fuchengmen, Xicheng District, Beijing', unitprice: 105714.566667272},
{x: 12, y: 1, name: 'Beijing Elementary School Hongshan Campus', unitprice: 94695.811064285706},
{x: 11, y: 1, name: 'Denglai Primary School, Xicheng District, Beijing', unitprice: 88424.476190000001},
{x: 10, y: 1, name: 'Beijing Elementary School Tianning Temple Branch', unitprice: 86063.559997499993},
{x: 10, y: 2, name: 'Beijing Xuanwu Huimin Primary School', unitprice: 86730.116364000001},
{x: 10, y: 3, name: 'Xiyi District Sanyili Primary School', unitprice: 86099.290812307605},
{x: 10, y: 4, name: 'Xicheng District, Beijing Xinghua Primary School', unitprice: 85839.333335000003},
{x: 10, y: 5, name: 'Xicheng District Experimental Primary School', unitprice: 87275.260876666594},
{x: 10, y: 6, name: 'Beijing Xicheng District Lishu Tree Primary School', unitprice: 86761.796869090904},
{x: 10, y: 7, name: 'Beijing Baizhifang Primary School, Xicheng District, Beijing', unitprice: 85459.584722},
{x: 10, y: 8, name: 'Beijing No. 2 Experimental Primary School Guangwai Campus', unitprice: 87077.382576666598},
{x: 9, y: 1, name: 'Beijing Xicheng District Honglian Primary School', unitprice: 79485.4878475}



      

    ]},{
        name: 'Class 1 Division 1(Corresponding Middle School)',
        color: 'rgba(189,3,89, .9)',
        zIndex: 1,
        turboThreshold:3000,
        marker: {
                radius:12,
                symbol: 'circle'
            } ,
        data: [{x: 21, y: 1, name: 'Beijing Xicheng District Hongmiao Primary School', unitprice: 150604.20000000001},
{x: 19, y: 2, name: 'Xishiku Primary School, Xicheng District, Beijing', unitprice: 140615.33335}
],
         


    },
	{
        name: 'Class 1 Division 2(Corresponding Middle School)',
        color: 'rgba(167,74,78, .9)',
        zIndex: 1,
        marker: {
                radius:12,
                symbol: 'circle'
            } ,
        data: [{x: 19, y: 3, name: 'Beijing Leifeng Primary School', unitprice: 137540.4375},
{x: 16, y: 2, name: 'Xicheng District, Beijing Xinjiekou East Street Primary School', unitprice: 120711.875},
{x: 16, y: 3, name: 'Xidan District Xidan Primary School', unitprice: 123707.2222},
{x: 13, y: 4, name: 'Xicheng District, Beijing Yuzhong Primary School', unitprice: 105158.0191},
{x: 10, y: 6, name: 'Beijing Xicheng District Lishu Tree Primary School', unitprice: 86761.796869090904}

]

    },{
        name: 'Class 2 Division 1(Corresponding Middle School)',
        color: 'rgba(243,132,71, .9)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 14, y: 1, name: 'Beijing Sicheng Primary School', unitprice: 111096.41665},
{x: 13, y: 3, name: 'Beijing Xicheng District Zhonghua Road Primary School', unitprice: 100617.53703333301}
 


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
        data: [{x: 19, y: 1, name: 'Beijing Zhengze School (New) Non-profit private schools', unitprice: 136393.72115},
{x: 17, y: 1, name: 'Beijing First Experimental Primary School Front Campus', unitprice: 125926.51125},
{x: 17, y: 5, name: 'Beijing Yucai School', unitprice: 130178.76666666599},
{x: 13, y: 6, name: 'Xicheng District, Beijing Taoranting Primary School', unitprice: 105559.20389999999},
{x: 12, y: 3, name: 'Beijing Xicheng District Half-step Bridge Elementary School', unitprice: 97203.171398125007},
{x: 10, y: 7, name: 'Beijing Baizhifang Primary School, Xicheng District, Beijing', unitprice: 85459.584722}
 


    ]},
	{
        name: 'No-Corresponding',
        color: 'rgba(130, 130, 130, .3)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 20, y: 1, name: 'Xicheng District, Beijing Zizhong Primary School', unitprice: 146512.0},
{x: 20, y: 2, name: 'Beijing Xicheng District Fighting Primary School', unitprice: 145260.0},
{x: 19, y: 4, name: 'Beijing Xicheng District Huangchenggen Primary School', unitprice: 141127.75},
{x: 18, y: 1, name: 'Beijing No. 2 Experimental Primary School Desheng Campus', unitprice: 131255.903442857},
{x: 18, y: 2, name: 'Yuxiang Primary School, Xicheng District, Beijing', unitprice: 134966.35601875},
{x: 18, y: 3, name: 'Beijing No. 2 Experimental Primary School', unitprice: 130431.566666666},
{x: 17, y: 2, name: 'Beijing Xicheng District Mechanics Primary School', unitprice: 127207.6894},
{x: 17, y: 3, name: 'Xijia District, Beijing Huajia Primary School', unitprice: 127348.75},
{x: 17, y: 4, name: 'Beijing Xicheng District Huangchenggen Primary School Guanyuan Campus', unitprice: 127424.0},
{x: 17, y: 6, name: 'Sanlihe Primary School, Xicheng District, Beijing', unitprice: 127317.222233333},
{x: 17, y: 7, name: 'Beijing Xicheng District Normal School Affiliated Elementary School', unitprice: 129520.79760000001},
{x: 16, y: 1, name: 'Wuchengtong Primary School, Xicheng District, Beijing', unitprice: 123127.86331250001},
{x: 16, y: 4, name: "Beijing No. 2 Experimental Primary School Chang'an Campus", unitprice: 120983.666666666},
{x: 16, y: 5, name: 'Beijing First Experimental Primary School', unitprice: 119106.0},
{x: 15, y: 1, name: 'Beijing Xicheng District Fuzhou Hall Primary School', unitprice: 115960.88341090899},
{x: 15, y: 2, name: 'Liuyin Street Primary School, Xicheng District, Beijing', unitprice: 116951.5},
{x: 15, y: 3, name: 'Xicheng District, Beijing, West Fourth Primary School', unitprice: 116237.2625},
{x: 15, y: 4, name: 'First Primary School, Shuncheng Street, Xicheng District, Beijing', unitprice: 117047.36969399999},
{x: 15, y: 5, name: 'Beijing Second Experimental Primary School Baiyun Road', unitprice: 113701.8892875},
{x: 14, y: 2, name: 'Beijing Xicheng Middle Friendship Primary School', unitprice: 106901.05555555499},
{x: 13, y: 1, name: 'Xicheng District New Century Experimental Primary School', unitprice: 100428.666666666},
{x: 13, y: 2, name: 'First Primary School outside Fuchengmen, Xicheng District, Beijing', unitprice: 105714.566667272},
{x: 13, y: 5, name: 'Xicheng District, Beijing Progressive Primary School', unitprice: 102766.865471428},
{x: 13, y: 7, name: 'Xichang District Xiangchang Road Primary School', unitprice: 102634.28569999999},
{x: 13, y: 8, name: 'Beijing Xicheng District Yaer Hutong Elementary School', unitprice: 105786.5},
{x: 13, y: 9, name: 'Beijing Jianzhu University Affiliated Primary School', unitprice: 101609.83333333299},
{x: 13, y: 10, name: 'Beijing No. 2 Experimental Primary School, Qinshuihe Campus', unitprice: 105843.07145},
{x: 13, y: 11, name: 'Beijing Second Experimental Primary School Yu Taoyuan Campus', unitprice: 105227.196430714},
{x: 13, y: 12, name: 'First Elementary School, Fuxingmenwai, Xicheng District, Beijing', unitprice: 106022.76222},
{x: 13, y: 13, name: 'First Primary School, Exhibition Road, Xicheng District, Beijing', unitprice: 102385.385490909},
{x: 13, y: 14, name: 'Beijing Xilai District Kangleli Primary School', unitprice: 104068.0},
{x: 13, y: 15, name: 'Yumin Primary School, Xicheng District, Beijing', unitprice: 105227.5},
{x: 12, y: 1, name: 'Beijing Elementary School Hongshan Campus', unitprice: 94695.811064285706},
{x: 12, y: 2, name: 'First Primary School, North Lishi Road, Xicheng District, Beijing', unitprice: 98029.154766666601},
{x: 12, y: 4, name: 'First Primary School Attached to Beijing Xuanwu Normal School', unitprice: 96890.266233333299},
{x: 12, y: 5, name: 'Beijing Elementary School', unitprice: 96471.709959999993},
{x: 11, y: 1, name: 'Denglai Primary School, Xicheng District, Beijing', unitprice: 88424.476190000001},
{x: 10, y: 1, name: 'Beijing Elementary School Tianning Temple Branch', unitprice: 86063.559997499993},
{x: 10, y: 2, name: 'Beijing Xuanwu Huimin Primary School', unitprice: 86730.116364000001},
{x: 10, y: 3, name: 'Xiyi District Sanyili Primary School', unitprice: 86099.290812307605},
{x: 10, y: 4, name: 'Xicheng District, Beijing Xinghua Primary School', unitprice: 85839.333335000003},
{x: 10, y: 5, name: 'Xicheng District Experimental Primary School', unitprice: 87275.260876666594},
{x: 10, y: 8, name: 'Beijing No. 2 Experimental Primary School Guangwai Campus', unitprice: 87077.382576666598},
{x: 10, y: 9, name: 'Beijing Elementary School', unitprice: 86268.085353636299},
{x: 10, y: 10, name: 'Shichahai Primary School, Xicheng District, Beijing', unitprice: 87134.333329999994},
{x: 10, y: 11, name: 'Xicheng District Youth Lake Primary School', unitprice: 84345.343651000003},
{x: 9, y: 1, name: 'Beijing Xicheng District Honglian Primary School', unitprice: 79485.4878475}


    ]}
    
    ]
});
};