function dongcheng_binsd(){
Highcharts.chart('middle1', {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
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
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        floating: false,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.50)',
        borderWidth: 0
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
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
        color: 'rgba(168,214,238, .9)',
        turboThreshold:3000,
        marker: {
                symbol: 'circle'
            } ,
        data: [








]

    },{
        name: 'Class 1 Division 2',
        color: 'rgba(85,157,197, .9)',
        marker: {
                symbol: 'circle'
            } ,
        data: [{x: 26, y: 1, name: 'Lu Mi Cang Hu Tong 71Hao Yuan ', unitprice: 159930.0},
{x: 23, y: 1, name: 'Shi Jia Hu Tong 20Hao Yuan ', unitprice: 143725.0},
{x: 23, y: 2, name: 'Mao Dong Hu Tong 45Hao Yuan ', unitprice: 145618.5},
{x: 23, y: 3, name: 'Dong Jiao Hu Tong ', unitprice: 146199.0},
{x: 23, y: 4, name: 'Yong Kang Hu Tong 5Hao Yuan ', unitprice: 142942.0},
{x: 22, y: 2, name: 'Chao Nei Da Jie 201Hao Yuan ', unitprice: 138064.0},
{x: 22, y: 3, name: 'Dong Ban Hu Tong ', unitprice: 138387.9412},
{x: 22, y: 4, name: 'Shi Jin Hua Yuan Hu Tong ', unitprice: 137450.0},
{x: 22, y: 5, name: 'Shi Jin Hua Yuan Hu Tong 21Hao Yuan ', unitprice: 137506.0},
{x: 21, y: 2, name: 'Nan Men Cang Hu Tong ', unitprice: 133439.85709999999},
{x: 21, y: 3, name: 'Hua Geng Hu Tong 1Hao Yuan ', unitprice: 136400.5},
{x: 21, y: 4, name: 'Ju Dong Hu Tong ', unitprice: 135184.5},
{x: 21, y: 5, name: 'Jiao Dao Kou Dong Da Jie ', unitprice: 133582.5},
{x: 20, y: 3, name: 'Dong Luo Quan Hu Tong ', unitprice: 129264.5},
{x: 20, y: 4, name: 'Nan Gong Jiang Ying Hu Tong ', unitprice: 131710.6667},
{x: 20, y: 5, name: 'Cang Nan Hu Tong ', unitprice: 128167.6667},
{x: 20, y: 6, name: 'Xin An Li ', unitprice: 130309.0},
{x: 20, y: 7, name: 'Xiang Dong Hu Tong ', unitprice: 131713.75},
{x: 20, y: 8, name: 'Tu Dong Hu Tong ', unitprice: 131310.42860000001},
{x: 20, y: 9, name: 'Jiao Dao Kou Bei Dong Tiao 35Hao Yuan ', unitprice: 129259.2},
{x: 20, y: 10, name: 'Guo Xiang Hu Tong 4Hao Yuan ', unitprice: 130629.0},
{x: 19, y: 6, name: 'Jin Bao Jie ', unitprice: 126048.0},
{x: 19, y: 7, name: 'Lu Mi Cang Hu Tong ', unitprice: 124064.0},
{x: 19, y: 8, name: 'Zhi De Bei Xiang ', unitprice: 124731.0},
{x: 19, y: 9, name: 'Da Cao Chang Hu Tong ', unitprice: 126169.0},
{x: 19, y: 10, name: 'Qi He Lou Da Jie ', unitprice: 126181.60000000001},
{x: 19, y: 11, name: 'Chao Nei Da Jie 203Hao Yuan ', unitprice: 122943.0},
{x: 19, y: 12, name: 'Cang Nan Hu Tong 12Hao Yuan ', unitprice: 122912.0},
{x: 19, y: 13, name: 'Xiao Qu Deng Hu Tong 8Hao Yuan ', unitprice: 123728.0},
{x: 19, y: 14, name: 'Chao Yang Men Bei Xiao Jie ', unitprice: 125103.0},
{x: 19, y: 15, name: 'Yong Kang Hu Tong 1Hao Yuan ', unitprice: 123218.0},
{x: 18, y: 4, name: 'Dong Hua Men Da Jie ', unitprice: 121632.0},
{x: 18, y: 5, name: 'Bai Shu Hu Tong ', unitprice: 118234.0},
{x: 18, y: 6, name: 'Deng Shi Kou Xi Jie ', unitprice: 117899.39999999999},
{x: 18, y: 7, name: 'Da Fang Jia Hu Tong ', unitprice: 119148.3333},
{x: 18, y: 8, name: 'Tong Fu Jia Dao ', unitprice: 119870.0},
{x: 18, y: 9, name: 'Yu Shi Hu Tong ', unitprice: 118253.5},
{x: 18, y: 10, name: 'Sha Tan Hou Jie 55Hao Yuan ', unitprice: 117984.0},
{x: 18, y: 11, name: 'Mei Shu Guan Hou Jie ', unitprice: 117303.8},
{x: 18, y: 12, name: 'Dong Men Cang Hu Tong Jia 3Hao Yuan ', unitprice: 120159.0},
{x: 18, y: 13, name: 'Wang Zhi Ma Hu Tong ', unitprice: 121392.0},
{x: 18, y: 14, name: 'Dong Mian Hua Hu Tong 2Hao Yuan ', unitprice: 121313.0},
{x: 18, y: 15, name: 'Dong Mian Hua Hu Tong ', unitprice: 121503.0},
{x: 18, y: 16, name: 'Nan Luo Gu Xiang ', unitprice: 119546.0},
{x: 18, y: 17, name: 'Wen Jin Shi Jia ', unitprice: 120002.5},
{x: 18, y: 18, name: 'Yong Kang Hu Tong 18Hao Yuan ', unitprice: 119944.5},
{x: 17, y: 15, name: 'Dong Jiao Min Xiang 32Hao Yuan ', unitprice: 112969.0},
{x: 17, y: 16, name: 'Xi Zong Bu Hu Tong ', unitprice: 114973.0},
{x: 17, y: 17, name: 'Dong Zong Bu Hu Tong ', unitprice: 115891.0},
{x: 17, y: 18, name: 'Gan Yu Hu Tong ', unitprice: 115769.5},
{x: 17, y: 19, name: 'Chao Yang Men Nan Xiao Jie ', unitprice: 116672.5},
{x: 17, y: 20, name: 'Gan Yu Hu Tong 33Hao Yuan ', unitprice: 112714.0},
{x: 17, y: 21, name: 'Hou Fang Jia Yuan Hu Tong ', unitprice: 116524.0},
{x: 17, y: 22, name: 'Xin Xian Hu Tong ', unitprice: 116605.0},
{x: 17, y: 23, name: 'Bao Fang Hu Tong ', unitprice: 113049.0},
{x: 17, y: 24, name: 'Dong Chang Hu Tong ', unitprice: 116060.0909},
{x: 17, y: 25, name: 'Dong Huang Cheng Gen Bei Jie 40Hao Yuan ', unitprice: 116212.6667},
{x: 17, y: 26, name: 'Dong Si Dong Tiao ', unitprice: 115477.6667},
{x: 17, y: 27, name: 'Cang Nan Hu Tong 14Hao Yuan ', unitprice: 115289.875},
{x: 17, y: 28, name: 'Jiao Dao Kou Bei San Tiao ', unitprice: 114781.3333},
{x: 17, y: 29, name: 'An Xinyuan ', unitprice: 113751.0},
{x: 16, y: 17, name: 'Dong Jiao Min Xiang 21Hao Yuan ', unitprice: 111382.0},
{x: 16, y: 18, name: 'Tai Ji Chang Tou Tiao 2Hao Yuan ', unitprice: 110402.0},
{x: 16, y: 19, name: 'Gong Yuan Liu Hao ', unitprice: 109239.75},
{x: 16, y: 20, name: 'Gong Yuan Tou Tiao ', unitprice: 108314.0},
{x: 16, y: 21, name: 'Xi Zong Bu Hu Tong 55Hao Yuan ', unitprice: 109973.0},
{x: 16, y: 22, name: 'Mei Zha Hu Tong ', unitprice: 111671.75},
{x: 16, y: 23, name: 'Xi Tang Zi Hu Tong ', unitprice: 111411.0},
{x: 16, y: 24, name: 'Gan Yu Hu Tong 2Hao Yuan ', unitprice: 108255.0},
{x: 16, y: 25, name: 'Deng Shi Kou Da Jie ', unitprice: 110449.75},
{x: 16, y: 26, name: 'Fang Jia Yuan Hu Tong ', unitprice: 111028.3333},
{x: 16, y: 27, name: 'Nan Zhu Gan Hu Tong ', unitprice: 108020.0},
{x: 16, y: 28, name: 'Bei He Yan Da Jie ', unitprice: 108962.5},
{x: 16, y: 29, name: 'Zhu Gan Hu Tong ', unitprice: 108914.0},
{x: 16, y: 30, name: 'Chao Yang Men Nei Da Jie Jia 190Hao Yuan ', unitprice: 107328.0},
{x: 16, y: 31, name: 'Sha Tan Nan Xiang ', unitprice: 111687.5},
{x: 16, y: 32, name: 'Chao Yang Men Nei Da Jie 75Hao Yuan ', unitprice: 107922.0},
{x: 16, y: 33, name: 'Jin Long Ji Da Xia ', unitprice: 108202.75},
{x: 16, y: 34, name: 'Dong Si Qi Tiao ', unitprice: 109650.0},
{x: 16, y: 35, name: 'Dong Huang Cheng Gen Nan Jie ', unitprice: 107247.0},
{x: 16, y: 36, name: 'Dong Si Bei Da Jie ', unitprice: 108497.3333},
{x: 16, y: 37, name: 'Che Niandian Hu Tong ', unitprice: 108577.0},
{x: 16, y: 38, name: 'Hua Yuan Hu Tong ', unitprice: 111320.0},
{x: 15, y: 14, name: 'Tai Ji Chang Tou Tiao 10Hao Yuan ', unitprice: 102479.0},
{x: 15, y: 15, name: 'Jian Guo Men Nei Da Jie ', unitprice: 105391.28569999999},
{x: 15, y: 16, name: 'Wai Jiao Bu Jie ', unitprice: 103614.3333},
{x: 15, y: 17, name: 'Xiao Yang Yi Bin Hu Tong ', unitprice: 106011.3333},
{x: 15, y: 18, name: 'Xi La Hu Tong 15Hao Yuan ', unitprice: 106523.0},
{x: 15, y: 19, name: 'Bei Zhu Gan Hu Tong ', unitprice: 106414.0},
{x: 15, y: 20, name: 'Dong Si Xi Da Jie 40Hao Yuan ', unitprice: 103093.0},
{x: 15, y: 21, name: 'Chao Nei Da Jie 136Hao Yuan ', unitprice: 103543.0},
{x: 15, y: 22, name: 'Chao Yang Shou Fu ', unitprice: 103853.8333},
{x: 15, y: 23, name: 'Dong Si Xi Da Jie ', unitprice: 102477.0},
{x: 15, y: 24, name: 'He Feng Shi Jia ', unitprice: 106882.3333},
{x: 15, y: 25, name: 'Bao Chao Hu Tong ', unitprice: 103113.0},
{x: 15, y: 26, name: 'Hua Yuan Hu Tong 8Hao Yuan ', unitprice: 106804.25},
{x: 15, y: 27, name: 'Lang Jia Hu Tong 24Hao Yuan ', unitprice: 105027.0},
{x: 15, y: 28, name: 'Lang Jia Hu Tong 13Hao Yuan ', unitprice: 102528.5},
{x: 15, y: 29, name: 'Ling Guang Hu Tong ', unitprice: 103701.0},
{x: 15, y: 30, name: 'Zhong Tao Hu Tong Jia 2Hao Yuan ', unitprice: 105533.39999999999},
{x: 14, y: 18, name: 'Da Yang Yi Bin Hu Tong 31Hao Yuan ', unitprice: 99418.5},
{x: 14, y: 19, name: 'Bei Zong Bu Hu Tong ', unitprice: 99299.0},
{x: 14, y: 20, name: 'Dong Tang Zi Hu Tong ', unitprice: 100945.8},
{x: 14, y: 21, name: 'Zhao Tang Zi Hu Tong ', unitprice: 99938.25},
{x: 14, y: 22, name: 'Xi La Hu Tong 21Hao Yuan ', unitprice: 101273.3333},
{x: 14, y: 23, name: 'Xi Shui Jing Hu Tong ', unitprice: 102121.0909},
{x: 14, y: 24, name: 'Dong Si Shi Tiao Jia 34Hao Yuan ', unitprice: 97389.571429999996},
{x: 14, y: 25, name: 'Dong Gong Jie 64Hao Yuan ', unitprice: 102023.0},
{x: 14, y: 26, name: 'Jing Xiang Fu Yuan ', unitprice: 99301.0},
{x: 13, y: 28, name: 'Chou Ti Hu Tong ', unitprice: 94563.0},
{x: 13, y: 29, name: 'Gong Yuan Jiu Hao ', unitprice: 95211.0},
{x: 13, y: 30, name: 'Ya An Guo Ji Gong Yu ', unitprice: 94730.199999999997},
{x: 13, y: 31, name: 'Dong Shui Jing Hu Tong ', unitprice: 97003.5},
{x: 13, y: 32, name: 'Chao Yang Men Nei Da Jie ', unitprice: 96480.333329999994},
{x: 13, y: 33, name: 'Dong Ban Qiao Dong Xiang ', unitprice: 94050.0},
{x: 12, y: 32, name: 'Qian Men Dong Da Jie ', unitprice: 87747.800000000003},
{x: 12, y: 33, name: 'Su Zhou Hu Tong ', unitprice: 91958.333329999994},
{x: 12, y: 34, name: 'Ya Bao Gong Yu ', unitprice: 89789.5},
{x: 12, y: 35, name: 'Nan Shui Guan ', unitprice: 88877.5},
{x: 12, y: 36, name: 'Dong Chang Bei Xiang 3Hao Yuan ', unitprice: 90152.0},
{x: 11, y: 35, name: 'Heng Ji Zhong Xin ', unitprice: 82860.333329999994},
{x: 11, y: 36, name: 'Da Yang Yi Bin Hu Tong 35Hao Yuan ', unitprice: 85157.5},
{x: 10, y: 24, name: 'Yang Zhao Hu Tong ', unitprice: 81269.333329999994},
{x: 10, y: 25, name: 'Chao Yang Men Bei Da Jie ', unitprice: 80000.0},
{x: 9, y: 14, name: 'Chao Yang Men Nan Da Jie ', unitprice: 76482.0},
{x: 7, y: 19, name: 'Jian Guo Men Bei Da Jie 5Hao ', unitprice: 62259.888889999995},
{x: 7, y: 20, name: 'Kai De Hua Xi', unitprice: 66054.0},
{x: 5, y: 4, name: 'Bei Jing Inn', unitprice: 54775.5},
{x: 5, y: 5, name: 'Bao Chao Yuan ', unitprice: 52865.0},
{x: 4, y: 3, name: 'Qian Men Qian Jiu Dian Gong Yu ', unitprice: 49376.0}




],
  turboThreshold:3000


    },{
        name: 'Class 2 Division 1',
        color: 'rgba(5,102,181, .9)',
        marker: {
                symbol: 'circle'
            } ,
        data: [{x: 22, y: 1, name: 'Fu Shang Jia Yuan ', unitprice: 139607.0},
{x: 18, y: 3, name: 'An De Lu ', unitprice: 121763.0},
{x: 17, y: 13, name: 'Hu Jing Yuan ', unitprice: 113314.6667},
{x: 17, y: 14, name: 'Bei San Huan Zhong Lu ', unitprice: 114931.5},
{x: 16, y: 12, name: 'Gu Lou Wai Da Jie 52Hao ', unitprice: 108990.0},
{x: 16, y: 13, name: 'Liu Pu Kang ', unitprice: 109515.0},
{x: 16, y: 14, name: 'An De Li Bei Jie 24Hao Yuan ', unitprice: 110158.0},
{x: 16, y: 15, name: 'Jiao Lin ', unitprice: 110524.0},
{x: 16, y: 16, name: 'Qing Nian Hu Bei Jie ', unitprice: 109757.0},
{x: 15, y: 9, name: 'An Wai Dong He Yan ', unitprice: 103778.0},
{x: 15, y: 10, name: 'An De Lu Yi 61Hao Yuan ', unitprice: 102940.5714},
{x: 15, y: 11, name: 'He Ping Li Wu Qu ', unitprice: 103697.0},
{x: 15, y: 12, name: 'An De Li Bei Jie 25Hao Yuan ', unitprice: 102633.0},
{x: 15, y: 13, name: 'He Ping Li Jiu Qu ', unitprice: 104183.0},
{x: 14, y: 11, name: 'Yong He Jia Yuan Yi Qi ', unitprice: 98537.571429999996},
{x: 14, y: 12, name: 'Min Wang Yuan ', unitprice: 97909.25},
{x: 14, y: 13, name: 'He Ping Li San Qu ', unitprice: 97700.5},
{x: 14, y: 14, name: 'An Wai Hua Yuan ', unitprice: 99532.0},
{x: 14, y: 15, name: 'He Ping Li Yi Qu ', unitprice: 98582.5},
{x: 14, y: 16, name: 'Hua Fu Jing Yuan ', unitprice: 100055.5},
{x: 14, y: 17, name: 'Xiao Huang Zhuang Dong Qu ', unitprice: 99953.0},
{x: 13, y: 22, name: 'He Ping Xin Cheng Yi Qi ', unitprice: 94261.285709999996},
{x: 13, y: 23, name: 'Di Tan Bei Li ', unitprice: 94523.0},
{x: 13, y: 24, name: 'He Ping Li Qi Qu ', unitprice: 94527.222220000011},
{x: 13, y: 25, name: 'Kang Hong Jia Yuan ', unitprice: 93276.0},
{x: 13, y: 26, name: 'Hua Gong Da Yuan ', unitprice: 97105.666670000006},
{x: 13, y: 27, name: 'An Zhen Yuan 50Hao Yuan ', unitprice: 92706.333329999994},
{x: 12, y: 21, name: 'An Wai Xi He Yan ', unitprice: 90206.666670000006},
{x: 12, y: 22, name: 'Ye Jin Da Yuan ', unitprice: 89137.0},
{x: 12, y: 23, name: 'Qing Nian Hu Nan Li ', unitprice: 89964.0},
{x: 12, y: 24, name: 'Qing Nian Hu Dong Li ', unitprice: 88245.333329999994},
{x: 12, y: 25, name: 'San Xiu Han Ya ', unitprice: 89900.0},
{x: 12, y: 26, name: 'Huang Si Da Jie 2Hao Yuan ', unitprice: 89524.0},
{x: 12, y: 27, name: 'Qing Nian Hu Bei Li ', unitprice: 90219.428570000004},
{x: 12, y: 28, name: 'An Wai Da Jie 80Hao Yuan ', unitprice: 89244.0},
{x: 12, y: 29, name: 'Xing Hua Xi Li ', unitprice: 91729.0},
{x: 12, y: 30, name: 'Qing Nian Gou ', unitprice: 90883.5},
{x: 12, y: 31, name: 'Xiao Huang Zhuang Yi Qu ', unitprice: 91864.0},
{x: 11, y: 28, name: 'Zhong Jing 濠ting ', unitprice: 86107.666670000006},
{x: 11, y: 29, name: 'Di Xing Ju ', unitprice: 85867.0},
{x: 11, y: 30, name: 'Shang Long Xi Li ', unitprice: 83935.0},
{x: 11, y: 31, name: 'An De Lu 47Hao Yuan ', unitprice: 83929.333329999994},
{x: 11, y: 32, name: 'Xi Ying Fang ', unitprice: 84271.166670000006},
{x: 11, y: 33, name: 'An Wai Da Jie 3Hao Yuan ', unitprice: 85994.399999999994},
{x: 11, y: 34, name: 'Xing Hua Lu 11Hao Yuan ', unitprice: 85366.666670000006},
{x: 10, y: 21, name: 'Xiang Shang Jia Yuan ', unitprice: 80343.0},
{x: 10, y: 22, name: 'An De Lu 55Hao Yuan ', unitprice: 79655.0},
{x: 10, y: 23, name: 'Shang Long Jia Yuan ', unitprice: 80010.0},
{x: 9, y: 13, name: 'Gu Lou Wai Da Jie ', unitprice: 72469.0},
{x: 3, y: 2, name: 'Hua Shi Long Guo Ji Gong Yu ', unitprice: 44965.0}









]

    },{
        name: 'Class 2 Division 2',
        color: 'rgba(1,59,122, .9)',
        marker: {
                symbol: 'circle'
            } ,
        data: [



]

    }, {
        name: 'General',
        color: 'rgba(51,43,103, .3)',
        marker: {
                symbol: 'circle'
            } ,
        data: [
        {x: 21, y: 1, name: 'Bei Xin Qiao San Tiao 1Hao Yuan ', unitprice: 136799.0},
{x: 20, y: 1, name: 'Wan Quan Xin Xin Shang Wu Hua Yuan ', unitprice: 128135.5},
{x: 20, y: 2, name: 'Xin Yijia Yuan ', unitprice: 127766.14290000001},
{x: 19, y: 1, name: 'Xin Shi Jie Jia Yuan ', unitprice: 122444.5714},
{x: 19, y: 2, name: 'Hai Shengming Yuan ', unitprice: 126289.75},
{x: 19, y: 3, name: 'Hou Yong Kang Hu Tong 2Hao Yuan 4Hao Yuan ', unitprice: 123296.5},
{x: 19, y: 4, name: 'Hua Guan Li Jing ', unitprice: 123661.0},
{x: 19, y: 5, name: 'Bei Guan Ting Hu Tong Jia Dong Hao Yuan ', unitprice: 125783.5},
{x: 18, y: 1, name: 'Bei Guan Ting Hu Tong ', unitprice: 117877.5},
{x: 18, y: 2, name: 'Guan Shu Yuan ', unitprice: 121843.75},
{x: 17, y: 1, name: 'Xin Yu Jia Yuan ', unitprice: 115237.5},
{x: 17, y: 2, name: 'Ben Jia Run Yuan Yi Qi ', unitprice: 113949.125},
{x: 17, y: 3, name: 'Hai Yun Cang Xiao Qu ', unitprice: 115787.7895},
{x: 17, y: 4, name: 'Cang Jia Dao ', unitprice: 112729.14290000001},
{x: 17, y: 5, name: 'Hai Yun Cang Hu Tong 3Hao Yuan ', unitprice: 114968.0},
{x: 17, y: 6, name: 'Dong Si Si Tiao ', unitprice: 115548.0},
{x: 17, y: 7, name: 'Bei Xin Cang Hu Tong ', unitprice: 113401.5},
{x: 17, y: 8, name: 'Min An Xiao Qu Min An Jie ', unitprice: 116693.25},
{x: 17, y: 9, name: 'Cang Jing Guan Hu Tong 15Hao Yuan ', unitprice: 116255.0},
{x: 17, y: 10, name: 'Wan Guo Cheng Moma', unitprice: 112783.6333},
{x: 17, y: 11, name: 'An Ding Men Dong Da Jie ', unitprice: 114506.0},
{x: 17, y: 12, name: 'Dang Dai Moma', unitprice: 113174.6667},
{x: 16, y: 1, name: 'Fu Gui Yuan Si Qu ', unitprice: 107609.0},
{x: 16, y: 2, name: 'Fu Gui Yuan Yi Qu ', unitprice: 108448.0},
{x: 16, y: 3, name: 'Hai Yun Cang Nan Li Yi Qu ', unitprice: 109663.0},
{x: 16, y: 4, name: 'Bo Jing Hao Ting ', unitprice: 109901.0},
{x: 16, y: 5, name: 'Hai Shengguo Ji Gong Yu ', unitprice: 107508.8},
{x: 16, y: 6, name: 'Dong Zhi Men Nei Da Jie ', unitprice: 111486.75},
{x: 16, y: 7, name: 'Min An Xiao Qu Dong Yang Wei Jie ', unitprice: 109702.0},
{x: 16, y: 8, name: 'Min An Xiao Qu Dong Zhi Men Bei Zhong Jie ', unitprice: 109211.9167},
{x: 16, y: 9, name: 'Bei Xin Qiao San Tiao ', unitprice: 108598.0},
{x: 16, y: 10, name: 'Bei Guan Ting Hu Tong 2Hao Yuan ', unitprice: 108361.75},
{x: 16, y: 11, name: 'Dong Zhi Men Nei Bei Xiao Jie 8Hao Yuan ', unitprice: 110640.0},
{x: 15, y: 1, name: 'Zhong Hai Zi Yu Gong Guan ', unitprice: 105107.0},
{x: 15, y: 2, name: 'Pei Xin Jie Yi 5Hao Yuan ', unitprice: 102538.71430000001},
{x: 15, y: 3, name: 'Xin Jing Jia Yuan Dong Qu ', unitprice: 103835.16},
{x: 15, y: 4, name: 'Hua Shi Zao Yuan San Qi ', unitprice: 106007.0},
{x: 15, y: 5, name: 'Yang Guang Dong Shi ', unitprice: 102546.8333},
{x: 15, y: 6, name: 'Bei Xin Qiao Tou Tiao ', unitprice: 106927.3333},
{x: 15, y: 7, name: 'Min An Xiao Qu Dong Zhi Men Nei Bei Xiao Jie ', unitprice: 103674.5217},
{x: 15, y: 8, name: 'Min An Xiao Qu Dong Yang Guan Hu Tong ', unitprice: 104457.0},
{x: 14, y: 1, name: 'Xing Fu Jia Yuan San Qi ', unitprice: 98726.375},
{x: 14, y: 2, name: 'Xing Fu Jia Yuan Dong Qi ', unitprice: 102148.0},
{x: 14, y: 3, name: 'Xing Fu Jia Yuan Yi Qi ', unitprice: 101288.0},
{x: 14, y: 4, name: 'Xing Long Dong Shi Xinyuan ', unitprice: 98528.263160000002},
{x: 14, y: 5, name: 'Guo Rui Cheng Zhong Qu ', unitprice: 99111.555560000008},
{x: 14, y: 6, name: 'Rui Shi Gong Yu ', unitprice: 101996.2},
{x: 14, y: 7, name: 'Dong Zhi Men Nan Da Jie ', unitprice: 98644.25},
{x: 14, y: 8, name: 'Tong Chang Zi Hu Tong ', unitprice: 99618.0},
{x: 14, y: 9, name: 'Shi Zi Po Dong Li ', unitprice: 99823.75},
{x: 14, y: 10, name: 'Cao Yuan Hu Tong ', unitprice: 100000.0},
{x: 13, y: 1, name: 'Zuoan Xi Yuan ', unitprice: 93469.0},
{x: 13, y: 2, name: 'Hong Yun Hua Yuan ', unitprice: 93763.0},
{x: 13, y: 3, name: 'Ti Yu Guan Lu 12Hao ', unitprice: 93509.0},
{x: 13, y: 4, name: 'Shui Shang Hua Cheng ', unitprice: 96708.88235},
{x: 13, y: 5, name: 'Lv Jing Yuan ', unitprice: 97129.571429999996},
{x: 13, y: 6, name: 'Qian Men Qian ', unitprice: 95350.75},
{x: 13, y: 7, name: 'Bei Jing Shang She ', unitprice: 92672.199999999997},
{x: 13, y: 8, name: 'Tian Li Yuan ', unitprice: 92900.5},
{x: 13, y: 9, name: 'Dong Fang Cai Fu ', unitprice: 94526.800000000003},
{x: 13, y: 10, name: 'Xin Jing Jia Yuan Xi Qu ', unitprice: 96535.909090000001},
{x: 13, y: 11, name: 'Hua Shi Zao Yuan Yi Qi ', unitprice: 93736.857139999993},
{x: 13, y: 12, name: 'Hua Shi Zao Yuan Dong Qi ', unitprice: 93364.5},
{x: 13, y: 13, name: 'Bai Qiao Da Jie ', unitprice: 92978.600000000006},
{x: 13, y: 14, name: 'Tian Jiao Yuan ', unitprice: 94147.0},
{x: 13, y: 15, name: 'Dong Hua Shi Bei Li Dong Qu ', unitprice: 96536.0},
{x: 13, y: 16, name: 'Chong Wen Men Dong Da Jie ', unitprice: 93076.666670000006},
{x: 13, y: 17, name: 'Dong Si Shi Tiao ', unitprice: 94068.0},
{x: 13, y: 18, name: 'Gong Ti Bei Li ', unitprice: 92593.5},
{x: 13, y: 19, name: 'Dong Zhong Jie ', unitprice: 96831.428570000004},
{x: 13, y: 20, name: 'Dong Zhi Men Nei Bei Xiao Jie 16Hao ', unitprice: 94153.5},
{x: 13, y: 21, name: 'Xiang He Yuan Bei Li ', unitprice: 93753.5},
{x: 12, y: 1, name: 'Tian Tan Dong Lu 64Hao ', unitprice: 89984.0},
{x: 12, y: 2, name: 'Long Tan Bei Li Qi Tiao ', unitprice: 89882.0},
{x: 12, y: 3, name: 'Ti Yu Guan Lu ', unitprice: 88582.0},
{x: 12, y: 4, name: 'Xing Fu Nan Li ', unitprice: 90681.0},
{x: 12, y: 5, name: 'Guang Ming Xi Li ', unitprice: 87379.0},
{x: 12, y: 6, name: 'An Hua Nan Li ', unitprice: 91612.75},
{x: 12, y: 7, name: 'Guang Qu Men Nei Da Jie ', unitprice: 87731.199999999997},
{x: 12, y: 8, name: 'Ben Jia Run Yuan San Qi ', unitprice: 87857.636360000004},
{x: 12, y: 9, name: 'Dong Hua Shi Da Jie 2Hao Yuan ', unitprice: 92065.0},
{x: 12, y: 10, name: 'Dong Hua Shi Bei Li Xi Qu ', unitprice: 89359.5},
{x: 12, y: 11, name: 'Hua Shi Dong San Tiao ', unitprice: 88201.0},
{x: 12, y: 12, name: 'Bai Qiao Yuan ', unitprice: 90575.0},
{x: 12, y: 13, name: 'Jing Xige ', unitprice: 91246.25},
{x: 12, y: 14, name: 'Chong Wen Men Xi Da Jie ', unitprice: 89867.0},
{x: 12, y: 15, name: 'Wang Jia Yuan Hu Tong 35Hao Yuan ', unitprice: 91971.0},
{x: 12, y: 16, name: 'Xin Zhong Xi Jie ', unitprice: 88084.666670000006},
{x: 12, y: 17, name: 'Dong Zhong Gong Yu ', unitprice: 89351.5},
{x: 12, y: 18, name: 'Xin Zhong Xi Li ', unitprice: 89107.5},
{x: 12, y: 19, name: 'Yu Shu Si Tiao ', unitprice: 91226.0},
{x: 12, y: 20, name: 'Dong Zhi Men Bei Da Jie ', unitprice: 88272.0},
{x: 11, y: 1, name: 'You Sheng Mei Yuan ', unitprice: 86400.0},
{x: 11, y: 2, name: 'Yilong Bie Shu ', unitprice: 84672.0},
{x: 11, y: 3, name: 'Zuoan Yiyuan ', unitprice: 87152.75},
{x: 11, y: 4, name: 'Long Tan Bei Li Wu Tiao ', unitprice: 84289.0},
{x: 11, y: 5, name: 'Ti Yu Guan Xi Lu Jia 53Hao Yuan ', unitprice: 85941.0},
{x: 11, y: 6, name: 'Dong Si Kuai Yu Bei Jie ', unitprice: 85235.0},
{x: 11, y: 7, name: 'Ying Fang Xi Jie ', unitprice: 84920.375},
{x: 11, y: 8, name: 'Fa Hua Nan Li ', unitprice: 82479.399999999994},
{x: 11, y: 9, name: 'Guang Ming Lou ', unitprice: 82983.714290000004},
{x: 11, y: 10, name: 'Ti Yu Guan Xi Lu 2Hao Yuan ', unitprice: 85823.0},
{x: 11, y: 11, name: 'Tian Tan Lu ', unitprice: 82227.0},
{x: 11, y: 12, name: 'Xing Fu Bei Li ', unitprice: 84858.0},
{x: 11, y: 13, name: 'An Hua Bei Li ', unitprice: 84524.0},
{x: 11, y: 14, name: 'Fu Gui Yuan San Qu ', unitprice: 86379.666670000006},
{x: 11, y: 15, name: 'Yuan Yang De Yi ', unitprice: 85577.5},
{x: 11, y: 16, name: 'Guo Rui Cheng Xi Qu ', unitprice: 83237.75},
{x: 11, y: 17, name: 'Jin Shi Ji Jia Yuan ', unitprice: 85476.449999999997},
{x: 11, y: 18, name: 'Jing Cheng Ren He ', unitprice: 85106.0},
{x: 11, y: 19, name: 'Dong Huan Ju Yuan ', unitprice: 87151.833329999994},
{x: 11, y: 20, name: 'Dong Hua Shi Bei Li Zhong Qu ', unitprice: 85275.800000000003},
{x: 11, y: 21, name: 'Dong Hou He Yan ', unitprice: 82594.5},
{x: 11, y: 22, name: 'Zhong Shi Li ', unitprice: 84179.0},
{x: 11, y: 23, name: 'Dong Ying Fang Ba Tiao ', unitprice: 83258.0},
{x: 11, y: 24, name: 'Dong Huan Guang Chang ', unitprice: 86701.0},
{x: 11, y: 25, name: 'Cha Ci Xiao Qu ', unitprice: 83644.0},
{x: 11, y: 26, name: 'Hu Jia Yuan 26Hao Yuan ', unitprice: 84010.0},
{x: 11, y: 27, name: 'Xiang He Yuan Jie ', unitprice: 83468.0},
{x: 10, y: 1, name: 'Cheng Shi Liang Dian ', unitprice: 79163.0},
{x: 10, y: 2, name: 'Yong Ding Men Dong Jie Zhong Li ', unitprice: 80177.0},
{x: 10, y: 3, name: 'Xiang Xin Xi Li ', unitprice: 79536.0},
{x: 10, y: 4, name: 'Yong Ding Men Dong Jie Xi Li ', unitprice: 77242.333329999994},
{x: 10, y: 5, name: 'Yong Ding Men Dong Jie Dong Li ', unitprice: 78172.0},
{x: 10, y: 6, name: 'Long Tan Xi Li ', unitprice: 77336.5},
{x: 10, y: 7, name: 'Long Tan Bei Li Dong Tiao ', unitprice: 81648.0},
{x: 10, y: 8, name: 'Ti Yu Guan Lu Jia 8Hao ', unitprice: 81563.5},
{x: 10, y: 9, name: 'Jin Yu Chi Xi Qu ', unitprice: 78757.846149999998},
{x: 10, y: 10, name: 'Jin Yu Chi Dong Qu ', unitprice: 81931.875},
{x: 10, y: 11, name: 'Jin Yu Chi Zhong Qu ', unitprice: 79182.0},
{x: 10, y: 12, name: 'Guan Cheng Ming Dong Dao ', unitprice: 77344.470589999997},
{x: 10, y: 13, name: 'Li Shui Wan Pan Jia Yuan ', unitprice: 79311.0},
{x: 10, y: 14, name: 'Jin Qiao Guo Ji ', unitprice: 82184.199999999997},
{x: 10, y: 15, name: 'Fu Gui Yuan Dong Qu ', unitprice: 79878.0},
{x: 10, y: 16, name: 'Yuan Jia Guo Ji Gong Yu ', unitprice: 78979.0},
{x: 10, y: 17, name: 'Dong Fang Yin Zuo', unitprice: 79048.399999999994},
{x: 10, y: 18, name: 'Dong Zhi Men Wai Xiao Jie 10Hao Yuan ', unitprice: 77218.0},
{x: 10, y: 19, name: 'Hou Yong Kang Hu Tong 6Hao Yuan ', unitprice: 79689.0},
{x: 10, y: 20, name: 'Hu Jia Yuan Xiao Qu ', unitprice: 79432.0},
{x: 9, y: 1, name: 'Ge Xin Li Xiao Qu ', unitprice: 76062.0},
{x: 9, y: 2, name: 'Tian Tan Dong Li Nan Qu ', unitprice: 76802.285709999996},
{x: 9, y: 3, name: 'Tian Tan Nan Li Xi Qu ', unitprice: 77168.0},
{x: 9, y: 4, name: 'Tian Tan Xi Li Dong Qu ', unitprice: 76629.0},
{x: 9, y: 5, name: 'Chang Qing Yuan ', unitprice: 76445.333329999994},
{x: 9, y: 6, name: 'Zuoan Men Nei Da Jie ', unitprice: 76622.0},
{x: 9, y: 7, name: 'Xi Cao Shi Dong Jie Jia 34Hao Yuan ', unitprice: 73247.0},
{x: 9, y: 8, name: 'Guang Qu Men Wai Nan Jie ', unitprice: 73625.0},
{x: 9, y: 9, name: 'Ling Xing Guo Ji ', unitprice: 76282.285709999996},
{x: 9, y: 10, name: 'Tai Hua Gong Yu ', unitprice: 72594.181819999998},
{x: 9, y: 11, name: 'Ju Long Hua Yuan ', unitprice: 76244.5},
{x: 9, y: 12, name: 'Dong Zhi Men Wai Xiao Jie 8Hao Yuan ', unitprice: 76829.399999999994},
{x: 8, y: 1, name: 'Jing Tai Xi Li Xi Qu ', unitprice: 69172.363639999996},
{x: 8, y: 2, name: 'Hua Long Mei Sheng', unitprice: 68883.0},
{x: 8, y: 3, name: 'Xin Ao Yang Fang ', unitprice: 70245.0},
{x: 8, y: 4, name: 'Jing Tai Dong Li ', unitprice: 70532.333329999994},
{x: 8, y: 5, name: 'Ge Xin Nan Lu 2Hao Yuan ', unitprice: 68748.75},
{x: 8, y: 6, name: 'Xi Ge Xin Li 110Hao Yuan ', unitprice: 67405.800000000003},
{x: 8, y: 7, name: 'Li Cun ', unitprice: 69306.0},
{x: 8, y: 8, name: 'Guo Zhuang Bei Li ', unitprice: 71246.0},
{x: 8, y: 9, name: 'Tao Yang Lu Bei Li ', unitprice: 71702.5},
{x: 8, y: 10, name: 'Che Zhan Lu 6Hao Yuan ', unitprice: 70462.0},
{x: 8, y: 11, name: 'Gong Ti 3Hao ', unitprice: 70924.600000000006},
{x: 8, y: 12, name: 'Hua Pu Hua Yuan ', unitprice: 68838.199999999997},
{x: 8, y: 13, name: 'Dong Zhi Men Nei Bei Xiao Jie 2Hao Yuan ', unitprice: 71680.0},
{x: 7, y: 1, name: 'Ding An Li ', unitprice: 65974.399999999994},
{x: 7, y: 2, name: 'Sha Zi Kou Lu 61Hao ', unitprice: 62862.5},
{x: 7, y: 3, name: 'Sha Zi Kou Lu 50Hao ', unitprice: 62899.0},
{x: 7, y: 4, name: 'Jing Tai Xi Li ', unitprice: 64457.0},
{x: 7, y: 5, name: 'Yong He Xinyuan ', unitprice: 62723.333329999994},
{x: 7, y: 6, name: 'An Le Lin Tou Tiao 2Hao Yuan ', unitprice: 65600.5},
{x: 7, y: 7, name: 'Jing Tai Jia Yuan ', unitprice: 65288.0},
{x: 7, y: 8, name: 'Tian Tian Jia Yuan ', unitprice: 63731.0},
{x: 7, y: 9, name: 'Yong Tie Yuan ', unitprice: 66775.199999999997},
{x: 7, y: 10, name: 'Tao Yang Lu Jiao Shi Lou ', unitprice: 66056.0},
{x: 7, y: 11, name: 'Fu Rui Yuan ', unitprice: 66607.0},
{x: 7, y: 12, name: 'Sou Bao Chong Wen ', unitprice: 63260.0},
{x: 7, y: 13, name: 'Bao Run Yuan ', unitprice: 67154.0},
{x: 7, y: 14, name: 'Mei Hui Da Xia ', unitprice: 62339.0},
{x: 7, y: 15, name: 'Wang Jia Yuan Hu Tong ', unitprice: 64914.0},
{x: 7, y: 16, name: 'Dong Wai Gong Guan ', unitprice: 63325.0},
{x: 7, y: 17, name: 'Li Dong Zhi Gong Su She ', unitprice: 64258.0},
{x: 7, y: 18, name: 'Zheng Dong Guo Ji Da Xia ', unitprice: 65454.0},
{x: 6, y: 1, name: 'Jian Yu Yuan ', unitprice: 61915.5},
{x: 6, y: 2, name: 'Wang Tao Yuan Xiao Qu ', unitprice: 61971.583329999994},
{x: 6, y: 3, name: 'Dong Ge Xin Li 40Hao Yuan ', unitprice: 62154.0},
{x: 6, y: 4, name: 'Xi Ge Xin Li 112Hao Yuan ', unitprice: 61593.599999999999},
{x: 6, y: 5, name: 'Xi Ge Xin Li 108Hao Yuan ', unitprice: 58689.5},
{x: 6, y: 6, name: 'Ge Xin Li 24Hao Yuan ', unitprice: 60236.5},
{x: 6, y: 7, name: 'Xin Shi Jie Zhong Xin ', unitprice: 61150.5},
{x: 5, y: 1, name: 'Fu Lai Yin Hua Yuan ', unitprice: 56314.0},
{x: 5, y: 2, name: 'Guan Cun 26Hao Yuan ', unitprice: 57197.5},
{x: 5, y: 3, name: 'Wei Sheng Ju Dang Xiao ', unitprice: 55798.0},
{x: 4, y: 1, name: 'Liu Li Jing Dong Jie ', unitprice: 47563.0},
{x: 4, y: 2, name: 'Hua Long Da Xia ', unitprice: 51641.5},
{x: 3, y: 1, name: 'Zi You Ji ', unitprice: 45813.666669999999}



    ]}]
});
};