function primary_chaoyang(){
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
        data: [



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
        data: [{x: 11, y: 4, name: 'Fang Meadow International School, Chaoyang District, Beijing', unitprice: 88404.928574999998},
{x: 4, y: 11, name: 'Chaoyang Experimental Primary School Attached to Capital Normal University', unitprice: 51877.148808749997}





]

    },{
        name: 'Class 2 Division 1',
        color: 'rgba(243,132,71, .9)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 10, y: 8, name: 'Hujialou Central Primary School, Chaoyang District, Beijing', unitprice: 83654.071428571406},
{x: 10, y: 9, name: 'Baijiazhuang Primary School, Chaoyang District, Beijing', unitprice: 85667.364907142794},
{x: 10, y: 10, name: 'Beijing Chaoyang Foreign Language School', unitprice: 83586.031465454507},
{x: 10, y: 11, name: 'Beijing Chaoyang Normal School Affiliated Elementary School', unitprice: 83299.479167500001},
{x: 10, y: 12, name: 'Beijing Chen Jinglun Middle School Jiaming Campus', unitprice: 86348.520831250004},
{x: 9, y: 20, name: 'Beijing Xinghe Experimental School', unitprice: 76393.385041666595},
{x: 9, y: 21, name: 'Beijing Chen Jinglun Middle School', unitprice: 79006.0},
{x: 7, y: 20, name: 'Chaoyang District, Beijing Huajiadi Experimental Primary School', unitprice: 69431.0}






]

    },{
        name: 'Class 1 Division 2',
        color: 'rgba(255,162,149, .9)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 8, y: 15, name: 'Beijing Experimental School affiliated to China Conservatory of Music', unitprice: 73703.357394999999},
{x: 8, y: 16, name: 'Ba Lizhuang Central Primary School, Chaoyang District, Beijing', unitprice: 70329.583332499999},
{x: 8, y: 17, name: 'Beijing Chaoyang District Wangjing New City Nanhu Zhongyuan Primary School', unitprice: 74866.30068},
{x: 8, y: 18, name: 'Haidian District National Primary School', unitprice: 72195.349489999993},
{x: 7, y: 19, name: 'Chaoyang District, Beijing Wangjing Nanhu Dongyuan Primary School', unitprice: 66365.632448333301},
{x: 6, y: 8, name: 'Chaoyang District Jinsong No. 4 Primary School', unitprice: 60437.266666666597},
{x: 5, y: 10, name: 'Beijing Chaoyang District Chuiyangliu Center Elementary School', unitprice: 57579.952041111101}










]

    }, {
        name: 'General',
        color: 'rgba(227,89,132, .3)',
        zIndex: 2,
        marker: {
                symbol: 'circle',
                radius: 6
            } ,
        data: [{x: 12, y: 1, name: 'Beijing Chaoyang District Century Oriental International School', unitprice: 99741.666670000006},
{x: 12, y: 2, name: "Beijing Chaoyang District People's Congress Middle School Chaoyang Campus", unitprice: 98009.800006000005},
{x: 12, y: 3, name: 'Beijing Chaoyang District Banbidian Primary School', unitprice: 94861.6875},
{x: 12, y: 4, name: 'Fuxue Elementary School Chaoyang School', unitprice: 95110.600000000006},
{x: 11, y: 1, name: 'Chaoyang Experimental School, Affiliated High School of Renmin University of China', unitprice: 89559.583333333299},
{x: 11, y: 2, name: 'Beijing 80 School', unitprice: 93430.0},
{x: 11, y: 3, name: 'The Jiuxianqiao Second Primary School, Chaoyang District, Beijing', unitprice: 94090.076920000007},
{x: 10, y: 1, name: 'Chaoyang School Affiliated to Renmin University of China', unitprice: 86334.251770909003},
{x: 10, y: 2, name: 'Beijing University of Technology Affiliated High School', unitprice: 83359.834376875006},
{x: 10, y: 3, name: 'Dashanzi No.2 Primary School, Chaoyang District, Beijing', unitprice: 86318.933334000001},
{x: 10, y: 4, name: 'Chaoyang District Experimental Primary School', unitprice: 82776.778472499995},
{x: 10, y: 5, name: 'Beijing Chaoyang District Bungalow Primary School', unitprice: 87083.111109999998},
{x: 10, y: 6, name: 'Chaoyang District, Beijing Jindi Laojuntang Experimental School', unitprice: 83600.0},
{x: 10, y: 7, name: 'Beijing Chen Jinglun High School Branch', unitprice: 84295.517062857107},
{x: 9, y: 1, name: 'China Academy of Educational Science Chaoyang Experimental School (Secondary School)', unitprice: 79317.6805558333},
{x: 9, y: 2, name: 'Beijing Lecheng International School', unitprice: 77194.550000000003},
{x: 9, y: 3, name: 'Beijing International Academy of Arts and Sciences', unitprice: 76998.394443333294},
{x: 9, y: 4, name: 'Sanlitun, Beijing, China', unitprice: 78493.0},
{x: 9, y: 5, name: 'Beijing Heping Street No.1 Middle School', unitprice: 77320.666666666599},
{x: 9, y: 6, name: 'Beijing Tiantan Middle School', unitprice: 80918.36666},
{x: 9, y: 7, name: 'Beijing Wangjing Experimental School', unitprice: 81054.761392222194},
{x: 9, y: 8, name: 'Sanlitun Primary School, Chaoyang District, Beijing', unitprice: 79803.708332499999},
{x: 9, y: 9, name: 'Chaoyang District, Beijing Xinsheng Primary School', unitprice: 77441.933334000001},
{x: 9, y: 10, name: '4th Elementary School, Xinyuanli, Chaoyang District, Beijing', unitprice: 79097.023809999999},
{x: 9, y: 11, name: 'Chaoyang District, Beijing Tianhua Primary School', unitprice: 80696.433229999995},
{x: 9, y: 12, name: 'Chaoyang District Jingcheng Experimental Primary School', unitprice: 79975.5},
{x: 9, y: 13, name: 'Beijing Runfeng School', unitprice: 79283.75},
{x: 9, y: 14, name: 'Beijing Normal University Sanfan Middle School Chaoyang School', unitprice: 79440.067065833297},
{x: 9, y: 15, name: 'Beijing Normal University Chaoyang Affiliated Elementary School', unitprice: 81482.997551176406},
{x: 9, y: 16, name: 'Beijing Chaoyang Foreign Language Primary School', unitprice: 81679.151515454505},
{x: 9, y: 17, name: 'Beijing No. 2 Experimental Primary School Chaoyang School', unitprice: 77916.40625},
{x: 9, y: 18, name: 'Tsinghua University Affiliated Middle School Chaoyang School', unitprice: 78309.845238571404},
{x: 9, y: 19, name: 'Primary School Business Center, Experimental Primary School, Tsinghua University', unitprice: 78646.800000000003},
{x: 8, y: 1, name: 'Chinese Academy of Sciences Affiliated Experimental School', unitprice: 73126.682539999994},
{x: 8, y: 2, name: 'Beijing University of Chemical Technology Secondary School', unitprice: 71355.555303181798},
{x: 8, y: 3, name: 'Beijing Dongfang Decai School', unitprice: 75075.858332999996},
{x: 8, y: 4, name: 'Beijing Chaoyang District Gome Home Elementary School', unitprice: 72878.437116666595},
{x: 8, y: 5, name: 'Anyang School, Chaoyang District, Beijing', unitprice: 73324.5},
{x: 8, y: 6, name: 'Zuojiazhuang No.2 Primary School, Chaoyang District, Beijing', unitprice: 70818.2361116666},
{x: 8, y: 7, name: 'Beijing Chaoyang District Fangcao International School Century Elementary School', unitprice: 75731.137499999997},
{x: 8, y: 8, name: 'Chaoyang District, Beijing Golden Cradle Experimental School', unitprice: 71645.626923076896},
{x: 8, y: 9, name: 'Beijing Chaoyang District Chen Jinglun Secondary School Experimental School', unitprice: 72210.875},
{x: 8, y: 10, name: 'Huangyang Art Experimental Primary School, Chaoyang District, Beijing', unitprice: 71570.151801111104},
{x: 8, y: 11, name: 'Beijing Cherry Orchard Experimental School', unitprice: 73852.5},
{x: 8, y: 12, name: 'Beijing Education College Chaoyang Branch Affiliated School', unitprice: 73660.748809285695},
{x: 8, y: 13, name: 'Foreign Economic and Trade University Affiliated Elementary School', unitprice: 74584.5},
{x: 8, y: 14, name: 'Capital Normal University Affiliated Experimental School', unitprice: 74362.375},
{x: 7, y: 1, name: 'Beijing World Youth International School', unitprice: 66033.468650833296},
{x: 7, y: 2, name: 'Beijing Limai Foreign Language School', unitprice: 66055.045008500005},
{x: 7, y: 3, name: 'Beijing Tiantan Middle School Experimental School', unitprice: 65632.177083749993},
{x: 7, y: 4, name: 'Beijing Chaoyang District Heping Street Central Primary School', unitprice: 68820.0},
{x: 7, y: 5, name: 'Beijing Tuanjie Tuanjiehu Primary School', unitprice: 67773.194445000001},
{x: 7, y: 6, name: 'Tuanjiehu Second Primary School, Chaoyang District, Beijing', unitprice: 65585.166666666599},
{x: 7, y: 7, name: 'Beijing Chaoyang District Chuiyangliu Central Elementary School Jindu Campus', unitprice: 64424.964738181799},
{x: 7, y: 8, name: 'Beijing Chaoyang District Experimental Primary School Rome Jiayuan Campus', unitprice: 68982.869250000003},
{x: 7, y: 9, name: 'Beijing Chaoyang District Jiangtai Road Primary School', unitprice: 65734.777776666597},
{x: 7, y: 10, name: 'Beijing Chaoyang District Ritan Elementary School', unitprice: 69289.225556000005},
{x: 7, y: 11, name: 'Chaoyang District, Beijing, Paifang Primary School', unitprice: 68868.050000000003},
{x: 7, y: 12, name: 'Shifoying Primary School, Chaoyang District, Beijing', unitprice: 67664.014880000002},
{x: 7, y: 13, name: 'Beijing Chaoyang District Qingmiao International Bilingual School', unitprice: 69951.238095714201},
{x: 7, y: 14, name: 'Beijing Chaoyang Foreign Languages \u200b\u200bSchool Branch', unitprice: 69787.777312857099},
{x: 7, y: 15, name: 'Beijing Chaoyang Foreign Language School Beiyuan Campus', unitprice: 65398.666667500001},
{x: 7, y: 16, name: 'Beijing No.80 Middle School Zaoying Campus', unitprice: 69367.375},
{x: 7, y: 17, name: 'Beijing Normal University Olympic Garden Experimental Primary School', unitprice: 67563.233334000004},
{x: 7, y: 18, name: 'Beijing Jingshan School Chaoyang School', unitprice: 66035.800000000003},
{x: 6, y: 1, name: 'Beijing University of Technology Affiliated High School', unitprice: 63817.340850909},
{x: 6, y: 2, name: 'Beijing Chaoyang District Jinsong No. 3 Primary School', unitprice: 58691.0860390909},
{x: 6, y: 3, name: 'Beijing Beiyang Central Primary School, Chaoyang District, Beijing', unitprice: 59146.0},
{x: 6, y: 4, name: 'Chaoyang District, Beijing Kang Paradise Primary School', unitprice: 59384.708332499999},
{x: 6, y: 5, name: 'Chaoyang District, Beijing, Ganluyuan Primary School', unitprice: 61108.63888875},
{x: 6, y: 6, name: 'Chaoyang District, Beijing Gaojiayuan Primary School', unitprice: 63772.095236666602},
{x: 6, y: 7, name: 'Beijing Youth Politics College Affiliated High School', unitprice: 62573.5079371428},
{x: 5, y: 1, name: 'Beijing Middle School Dongba South Campus (New)', unitprice: 52689.5},
{x: 5, y: 2, name: 'Beijing Zhongde School', unitprice: 52666.027116666599},
{x: 5, y: 3, name: 'Chaoyang District, Beijing Xinglong Primary School', unitprice: 53026.066128333303},
{x: 5, y: 4, name: 'Chaoyang District, Beijing, South Mill Center Elementary School', unitprice: 55673.016666666597},
{x: 5, y: 5, name: 'Dingfuzhuang First Primary School, Chaoyang District, Beijing', unitprice: 54442.428569999996},
{x: 5, y: 6, name: 'Chaoyang District, Beijing will Taichung Primary School', unitprice: 54966.555553999999},
{x: 5, y: 7, name: 'Beijing Jiuxianqiao Central Elementary School, Chaoyang District, Beijing', unitprice: 54378.791667500001},
{x: 5, y: 8, name: 'Beijing Ethnic School', unitprice: 57102.650000000001},
{x: 5, y: 9, name: 'Beijing Huiwen Experimental Primary School Chaoyang School', unitprice: 56241.380953333297},
{x: 4, y: 1, name: 'Communication University Affiliated Elementary School', unitprice: 50322.177381000001},
{x: 4, y: 2, name: 'Beijing Boya Elementary School, Chaoyang District, Beijing', unitprice: 48591.333330000001},
{x: 4, y: 3, name: 'Beijing Chaoyang District Wangsiying Central Primary School', unitprice: 51852.833333333299},
{x: 4, y: 4, name: 'Chaoyang District, Beijing Xinzhuang Primary School', unitprice: 46413.0},
{x: 4, y: 5, name: 'Laojuntang Primary School, Chaoyang District, Beijing', unitprice: 46965.5},
{x: 4, y: 6, name: 'Beijing Fangyang International School, Chaoyang District, R&F Campus', unitprice: 50894.9306824999},
{x: 4, y: 7, name: 'Chaoyang District, Beijing Dougezhuang Central Primary School', unitprice: 50162.3181833333},
{x: 4, y: 8, name: 'Beijing No.94 Middle School Chaoyang New City Campus', unitprice: 48039.790475714202},
{x: 4, y: 9, name: 'Beijing No.80 Middle School Sports School', unitprice: 46690.777776666597},
{x: 4, y: 10, name: 'Beijing Second Foreign Language University Affiliated Primary School', unitprice: 50155.505207499999},
{x: 3, y: 1, name: 'Beijing New Education Experimental School', unitprice: 45884.584128333299},
{x: 3, y: 2, name: 'Yujiawei Elementary School, Chaoyang District, Beijing', unitprice: 40818.5},
{x: 3, y: 3, name: 'Chaoyang District, Beijing Bowen School', unitprice: 43824.0},
{x: 3, y: 4, name: 'Chaoyang District, Beijing Shuangqiao Second Elementary School', unitprice: 45726.916666666599},
{x: 3, y: 5, name: 'Beijing Baiyang School, Chaoyang District, Beijing', unitprice: 45883.25},
{x: 3, y: 6, name: 'Chaoyang District No. 2 Experimental Primary School', unitprice: 45279.699999999997},
{x: 3, y: 7, name: 'Beijing Chaoyang Experimental Primary School', unitprice: 42991.0},
{x: 3, y: 8, name: 'Beijing Ninety-fourth Middle School Airport Campus', unitprice: 40342.25},
{x: 3, y: 9, name: 'Beijing Second Foreign Language University Affiliated High School', unitprice: 41146.571430000004}






      

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
        data: [{x: 10, y: 12, name: 'Beijing Chen Jinglun Middle School Jiaming Campus', unitprice: 86348.520831250004},
{x: 8, y: 18, name: 'Haidian District National Primary School', unitprice: 72195.349489999993}






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
        name: 'Correspond_quality=5',
        color: 'rgba(227,89,132, .3)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 12, y: 1, name: 'Beijing Chaoyang District Century Oriental International School', unitprice: 99741.666670000006},
{x: 12, y: 2, name: "Beijing Chaoyang District People's Congress Middle School Chaoyang Campus", unitprice: 98009.800006000005},
{x: 11, y: 2, name: 'Beijing 80 School', unitprice: 93430.0},
{x: 10, y: 1, name: 'Chaoyang School Affiliated to Renmin University of China', unitprice: 86334.251770909003},
{x: 10, y: 2, name: 'Beijing University of Technology Affiliated High School', unitprice: 83359.834376875006},
{x: 10, y: 7, name: 'Beijing Chen Jinglun High School Branch', unitprice: 84295.517062857107},
{x: 9, y: 1, name: 'China Academy of Educational Science Chaoyang Experimental School (Secondary School)', unitprice: 79317.6805558333},
{x: 9, y: 2, name: 'Beijing Lecheng International School', unitprice: 77194.550000000003},
{x: 9, y: 3, name: 'Beijing International Academy of Arts and Sciences', unitprice: 76998.394443333294},
{x: 9, y: 4, name: 'Sanlitun, Beijing, China', unitprice: 78493.0},
{x: 9, y: 5, name: 'Beijing Heping Street No.1 Middle School', unitprice: 77320.666666666599},
{x: 9, y: 6, name: 'Beijing Tiantan Middle School', unitprice: 80918.36666},
{x: 9, y: 7, name: 'Beijing Wangjing Experimental School', unitprice: 81054.761392222194},
{x: 9, y: 13, name: 'Beijing Runfeng School', unitprice: 79283.75},
{x: 9, y: 14, name: 'Beijing Normal University Sanfan Middle School Chaoyang School', unitprice: 79440.067065833297},
{x: 9, y: 18, name: 'Tsinghua University Affiliated Middle School Chaoyang School', unitprice: 78309.845238571404},
{x: 8, y: 1, name: 'Chinese Academy of Sciences Affiliated Experimental School', unitprice: 73126.682539999994},
{x: 8, y: 2, name: 'Beijing University of Chemical Technology Secondary School', unitprice: 71355.555303181798},
{x: 8, y: 3, name: 'Beijing Dongfang Decai School', unitprice: 75075.858332999996},
{x: 8, y: 5, name: 'Anyang School, Chaoyang District, Beijing', unitprice: 73324.5},
{x: 8, y: 8, name: 'Chaoyang District, Beijing Golden Cradle Experimental School', unitprice: 71645.626923076896},
{x: 8, y: 9, name: 'Beijing Chaoyang District Chen Jinglun Secondary School Experimental School', unitprice: 72210.875},
{x: 8, y: 11, name: 'Beijing Cherry Orchard Experimental School', unitprice: 73852.5},
{x: 8, y: 12, name: 'Beijing Education College Chaoyang Branch Affiliated School', unitprice: 73660.748809285695},
{x: 8, y: 14, name: 'Capital Normal University Affiliated Experimental School', unitprice: 74362.375},
{x: 7, y: 1, name: 'Beijing World Youth International School', unitprice: 66033.468650833296},
{x: 7, y: 2, name: 'Beijing Limai Foreign Language School', unitprice: 66055.045008500005},
{x: 7, y: 3, name: 'Beijing Tiantan Middle School Experimental School', unitprice: 65632.177083749993},
{x: 7, y: 13, name: 'Beijing Chaoyang District Qingmiao International Bilingual School', unitprice: 69951.238095714201},
{x: 7, y: 14, name: 'Beijing Chaoyang Foreign Languages \u200b\u200bSchool Branch', unitprice: 69787.777312857099},
{x: 7, y: 15, name: 'Beijing Chaoyang Foreign Language School Beiyuan Campus', unitprice: 65398.666667500001},
{x: 7, y: 16, name: 'Beijing No.80 Middle School Zaoying Campus', unitprice: 69367.375},
{x: 7, y: 18, name: 'Beijing Jingshan School Chaoyang School', unitprice: 66035.800000000003},
{x: 6, y: 1, name: 'Beijing University of Technology Affiliated High School', unitprice: 63817.340850909},
{x: 6, y: 7, name: 'Beijing Youth Politics College Affiliated High School', unitprice: 62573.5079371428},
{x: 5, y: 1, name: 'Beijing Middle School Dongba South Campus (New)', unitprice: 52689.5},
{x: 5, y: 2, name: 'Beijing Zhongde School', unitprice: 52666.027116666599},
{x: 5, y: 8, name: 'Beijing Ethnic School', unitprice: 57102.650000000001},
{x: 4, y: 6, name: 'Beijing Fangyang International School, Chaoyang District, R&F Campus', unitprice: 50894.9306824999},
{x: 4, y: 8, name: 'Beijing No.94 Middle School Chaoyang New City Campus', unitprice: 48039.790475714202},
{x: 4, y: 9, name: 'Beijing No.80 Middle School Sports School', unitprice: 46690.777776666597},
{x: 3, y: 1, name: 'Beijing New Education Experimental School', unitprice: 45884.584128333299},
{x: 3, y: 8, name: 'Beijing Ninety-fourth Middle School Airport Campus', unitprice: 40342.25},
{x: 3, y: 9, name: 'Beijing Second Foreign Language University Affiliated High School', unitprice: 41146.571430000004}





    ]},{
        name: 'No-Corresponding',
        color: 'rgba(130, 130, 130, .3)',
        zIndex: 1,
        marker: {
                symbol: 'circle',
                radius: 12
            } ,
        data: [{x: 12, y: 3, name: 'Beijing Chaoyang District Banbidian Primary School', unitprice: 94861.6875},
{x: 12, y: 4, name: 'Fuxue Elementary School Chaoyang School', unitprice: 95110.600000000006},
{x: 11, y: 1, name: 'Chaoyang Experimental School, Affiliated High School of Renmin University of China', unitprice: 89559.583333333299},
{x: 11, y: 3, name: 'The Jiuxianqiao Second Primary School, Chaoyang District, Beijing', unitprice: 94090.076920000007},
{x: 11, y: 4, name: 'Fang Meadow International School, Chaoyang District, Beijing', unitprice: 88404.928574999998},
{x: 10, y: 3, name: 'Dashanzi No.2 Primary School, Chaoyang District, Beijing', unitprice: 86318.933334000001},
{x: 10, y: 4, name: 'Chaoyang District Experimental Primary School', unitprice: 82776.778472499995},
{x: 10, y: 5, name: 'Beijing Chaoyang District Bungalow Primary School', unitprice: 87083.111109999998},
{x: 10, y: 6, name: 'Chaoyang District, Beijing Jindi Laojuntang Experimental School', unitprice: 83600.0},
{x: 10, y: 8, name: 'Hujialou Central Primary School, Chaoyang District, Beijing', unitprice: 83654.071428571406},
{x: 10, y: 9, name: 'Baijiazhuang Primary School, Chaoyang District, Beijing', unitprice: 85667.364907142794},
{x: 10, y: 11, name: 'Beijing Chaoyang Normal School Affiliated Elementary School', unitprice: 83299.479167500001},
{x: 9, y: 8, name: 'Sanlitun Primary School, Chaoyang District, Beijing', unitprice: 79803.708332499999},
{x: 9, y: 9, name: 'Chaoyang District, Beijing Xinsheng Primary School', unitprice: 77441.933334000001},
{x: 9, y: 10, name: '4th Elementary School, Xinyuanli, Chaoyang District, Beijing', unitprice: 79097.023809999999},
{x: 9, y: 11, name: 'Chaoyang District, Beijing Tianhua Primary School', unitprice: 80696.433229999995},
{x: 9, y: 12, name: 'Chaoyang District Jingcheng Experimental Primary School', unitprice: 79975.5},
{x: 9, y: 15, name: 'Beijing Normal University Chaoyang Affiliated Elementary School', unitprice: 81482.997551176406},
{x: 9, y: 16, name: 'Beijing Chaoyang Foreign Language Primary School', unitprice: 81679.151515454505},
{x: 9, y: 17, name: 'Beijing No. 2 Experimental Primary School Chaoyang School', unitprice: 77916.40625},
{x: 9, y: 19, name: 'Primary School Business Center, Experimental Primary School, Tsinghua University', unitprice: 78646.800000000003},
{x: 9, y: 20, name: 'Beijing Xinghe Experimental School', unitprice: 76393.385041666595},
{x: 8, y: 4, name: 'Beijing Chaoyang District Gome Home Elementary School', unitprice: 72878.437116666595},
{x: 8, y: 6, name: 'Zuojiazhuang No.2 Primary School, Chaoyang District, Beijing', unitprice: 70818.2361116666},
{x: 8, y: 7, name: 'Beijing Chaoyang District Fangcao International School Century Elementary School', unitprice: 75731.137499999997},
{x: 8, y: 10, name: 'Huangyang Art Experimental Primary School, Chaoyang District, Beijing', unitprice: 71570.151801111104},
{x: 8, y: 13, name: 'Foreign Economic and Trade University Affiliated Elementary School', unitprice: 74584.5},
{x: 8, y: 15, name: 'Beijing Experimental School affiliated to China Conservatory of Music', unitprice: 73703.357394999999},
{x: 8, y: 16, name: 'Ba Lizhuang Central Primary School, Chaoyang District, Beijing', unitprice: 70329.583332499999},
{x: 8, y: 17, name: 'Beijing Chaoyang District Wangjing New City Nanhu Zhongyuan Primary School', unitprice: 74866.30068},
{x: 7, y: 4, name: 'Beijing Chaoyang District Heping Street Central Primary School', unitprice: 68820.0},
{x: 7, y: 5, name: 'Beijing Tuanjie Tuanjiehu Primary School', unitprice: 67773.194445000001},
{x: 7, y: 6, name: 'Tuanjiehu Second Primary School, Chaoyang District, Beijing', unitprice: 65585.166666666599},
{x: 7, y: 7, name: 'Beijing Chaoyang District Chuiyangliu Central Elementary School Jindu Campus', unitprice: 64424.964738181799},
{x: 7, y: 8, name: 'Beijing Chaoyang District Experimental Primary School Rome Jiayuan Campus', unitprice: 68982.869250000003},
{x: 7, y: 9, name: 'Beijing Chaoyang District Jiangtai Road Primary School', unitprice: 65734.777776666597},
{x: 7, y: 10, name: 'Beijing Chaoyang District Ritan Elementary School', unitprice: 69289.225556000005},
{x: 7, y: 11, name: 'Chaoyang District, Beijing, Paifang Primary School', unitprice: 68868.050000000003},
{x: 7, y: 12, name: 'Shifoying Primary School, Chaoyang District, Beijing', unitprice: 67664.014880000002},
{x: 7, y: 17, name: 'Beijing Normal University Olympic Garden Experimental Primary School', unitprice: 67563.233334000004},
{x: 7, y: 19, name: 'Chaoyang District, Beijing Wangjing Nanhu Dongyuan Primary School', unitprice: 66365.632448333301},
{x: 7, y: 20, name: 'Chaoyang District, Beijing Huajiadi Experimental Primary School', unitprice: 69431.0},
{x: 6, y: 2, name: 'Beijing Chaoyang District Jinsong No. 3 Primary School', unitprice: 58691.0860390909},
{x: 6, y: 3, name: 'Beijing Beiyang Central Primary School, Chaoyang District, Beijing', unitprice: 59146.0},
{x: 6, y: 4, name: 'Chaoyang District, Beijing Kang Paradise Primary School', unitprice: 59384.708332499999},
{x: 6, y: 5, name: 'Chaoyang District, Beijing, Ganluyuan Primary School', unitprice: 61108.63888875},
{x: 6, y: 6, name: 'Chaoyang District, Beijing Gaojiayuan Primary School', unitprice: 63772.095236666602},
{x: 6, y: 8, name: 'Chaoyang District Jinsong No. 4 Primary School', unitprice: 60437.266666666597},
{x: 5, y: 3, name: 'Chaoyang District, Beijing Xinglong Primary School', unitprice: 53026.066128333303},
{x: 5, y: 4, name: 'Chaoyang District, Beijing, South Mill Center Elementary School', unitprice: 55673.016666666597},
{x: 5, y: 5, name: 'Dingfuzhuang First Primary School, Chaoyang District, Beijing', unitprice: 54442.428569999996},
{x: 5, y: 6, name: 'Chaoyang District, Beijing will Taichung Primary School', unitprice: 54966.555553999999},
{x: 5, y: 7, name: 'Beijing Jiuxianqiao Central Elementary School, Chaoyang District, Beijing', unitprice: 54378.791667500001},
{x: 5, y: 9, name: 'Beijing Huiwen Experimental Primary School Chaoyang School', unitprice: 56241.380953333297},
{x: 5, y: 10, name: 'Beijing Chaoyang District Chuiyangliu Center Elementary School', unitprice: 57579.952041111101},
{x: 4, y: 1, name: 'Communication University Affiliated Elementary School', unitprice: 50322.177381000001},
{x: 4, y: 2, name: 'Beijing Boya Elementary School, Chaoyang District, Beijing', unitprice: 48591.333330000001},
{x: 4, y: 3, name: 'Beijing Chaoyang District Wangsiying Central Primary School', unitprice: 51852.833333333299},
{x: 4, y: 4, name: 'Chaoyang District, Beijing Xinzhuang Primary School', unitprice: 46413.0},
{x: 4, y: 5, name: 'Laojuntang Primary School, Chaoyang District, Beijing', unitprice: 46965.5},
{x: 4, y: 7, name: 'Chaoyang District, Beijing Dougezhuang Central Primary School', unitprice: 50162.3181833333},
{x: 4, y: 10, name: 'Beijing Second Foreign Language University Affiliated Primary School', unitprice: 50155.505207499999},
{x: 4, y: 11, name: 'Chaoyang Experimental Primary School Attached to Capital Normal University', unitprice: 51877.148808749997},
{x: 3, y: 2, name: 'Yujiawei Elementary School, Chaoyang District, Beijing', unitprice: 40818.5},
{x: 3, y: 3, name: 'Chaoyang District, Beijing Bowen School', unitprice: 43824.0},
{x: 3, y: 4, name: 'Chaoyang District, Beijing Shuangqiao Second Elementary School', unitprice: 45726.916666666599},
{x: 3, y: 5, name: 'Beijing Baiyang School, Chaoyang District, Beijing', unitprice: 45883.25},
{x: 3, y: 6, name: 'Chaoyang District No. 2 Experimental Primary School', unitprice: 45279.699999999997},
{x: 3, y: 7, name: 'Beijing Chaoyang Experimental Primary School', unitprice: 42991.0}



    ]}
    
    ]
});
};