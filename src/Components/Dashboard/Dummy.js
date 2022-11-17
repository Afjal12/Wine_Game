import React, { useEffect } from 'react'

import Chart from "react-apexcharts";


let barChartData = {

    series: [{
        name: 'Total Buy Token',
        data: [44, 55, 41],
        color: '#738AFE'
    },
    {
        name: 'No. of Buy Token',
        data: [8, 13, 27],
        color: '#85F4FA'
    },
    {
        name: 'Total Withdraw Token',
        data: [13, 23, 20],
        color: '#1240e9'
    }
    ],
    options: {
        // stroke: {
        //     width: 25
        // },
        chart: {
            foreColor: '#ffffff',
            type: 'bar',
            // height: 350,
            // stacked: false,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        // responsive: [{
        //     breakpoint: 480,
        //     options: {
        //         legend: {
        //             position: 'bottom',
        //             offsetX: -10,
        //             offsetY: 0
        //         }
        //     }
        // }],
        // plotOptions: {
        //     bar: {
        //         horizontal: false,
        //         borderRadius: 10,
        //         columnWidth: '25px',
        //     },
        //     radialBar: {
        //         dataLabels: {
        //             show: false
        //         }
        //     }
        // },
        xaxis: {
            // type: 'datetime',
            // labels: {
            //     format: "MMM"
            // },
            categories: ["Total buy token", "Number of Buy token", "No. of withdraw token"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
        legend: {
            position: 'top',
            // offsetY: 40,
            show: true
        },
        fill: {
            opacity: 1
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        }
    },


};

// let donutData = {
//     options: {
//         labels: ["Fashion", "Accessories"],
//         legend: {
//             show: true,
//             onItemClick: {
//                 toggleDataSeries: true
//             },
//             onItemHover: {
//                 highlightDataSeries: true
//             }
//         },
//         plotOptions: {
//             radialBar: {
//                 size: undefined,
//                 inverseOrder: false,
//                 startAngle: 0,
//                 endAngle: 275,
//                 offsetX: 0,
//                 offsetY: 0,
//                 hollow: {
//                     margin: 5,
//                     size: "50%",
//                     background: "transparent",
//                     image: undefined,
//                     imageWidth: 200,
//                     imageHeight: 200,
//                     imageOffsetX: 0,
//                     imageOffsetY: 0,
//                     imageClipped: true,
//                     position: "front",
//                     dropShadow: {
//                         enabled: false,
//                         top: 0,
//                         left: 0,
//                         blur: 3,
//                         opacity: 0.5
//                     }
//                 },
//                 track: {
//                     show: true,
//                     startAngle: undefined,
//                     endAngle: undefined,
//                     background: "#f2f2f2",
//                     strokeWidth: "97%",
//                     opacity: 1,
//                     margin: 5,
//                     dropShadow: {
//                         enabled: false,
//                         top: 0,
//                         left: 0,
//                         blur: 3,
//                         opacity: 0.5
//                     }
//                 },
//                 dataLabels: {
//                     show: true,
//                     name: {
//                         show: true,
//                         fontSize: "10px",
//                         fontFamily: undefined,
//                         color: undefined,
//                         offsetY: -10,
//                     },
//                     value: {
//                         show: true,
//                         fontSize: "10px",
//                         fontFamily: undefined,
//                         color: undefined,
//                         offsetY: 16,
//                         formatter: function (val) {
//                             return val + "%";
//                         }
//                     },
//                 }
//             }
//         }
//     },

//     series: [100, 255]
// };

// let state = {

//     series: [{
//         name: 'Sales',
//         data: [50, 45, 50, 45, 50, 45, 50, 45, 50],
//         color: "#3A57E8",
//     }, {
//         name: 'Cost',
//         data: [40, 35, 40, 35, 40, 35, 40, 35, 40],
//         color: "#85C5FA"
//     }],
//     options: {
//         legend: {
//             position: 'top',
//         },
//         grid: {
//             show: false,      // you can either change hear to disable all grids
//             yaxis: {
//                 lines: {
//                     show: false  //or just here to disable only x axis grids
//                 }
//             },
//             xaxis: {
//                 lines: {
//                     show: false  //or just here to disable only x axis grids
//                 }
//             }
//         },
//         chart: {
//             height: 350,
//             type: 'area',
//             toolbar: {
//                 show: false
//             },
//         },
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             show: true,
//             curve: 'smooth',
//             lineCap: 'butt',
//             colors: undefined,
//             width: 1,
//             dashArray: 0,
//         },
//         fill: {
//             type: 'gradient',
//             gradient: {
//                 shade: 'light',
//                 type: "vertical",
//                 shadeIntensity: 0.2,
//                 gradientToColors: '#3A57E8', // optional, if not defined - uses the shades of same color in series
//                 inverseColors: false,
//                 opacityFrom: 0.4,
//                 opacityTo: 0,
//                 stops: [0, 25],
//                 colorStops: []
//             }
//         },
//         xaxis: {
//             type: 'datetime',
//             labels: {
//                 format: "MMM"
//             },
//             categories: ["2017-12-19T00:00:00.000Z", "2018-01-19T00:00:00.000Z", "2018-02-19T01:30:00.000Z", "2018-03-19T02:30:00.000Z", "2018-04-19T03:30:00.000Z", "2018-05-19T04:30:00.000Z", "2018-06-19T05:30:00.000Z", "2018-07-19T06:30:00.000Z", "2018-08-19T06:30:00.000Z"]
//         },
//         tooltip: {
//             x: {
//                 format: 'dd/MM/yy HH:mm'
//             },
//         },
//     },


// };

export default function Dummy() {
    return (
        <>
            <div className='special-page-container extra-dark'>
                <div className='w-100  '>
                    <Chart options={barChartData.options} series={barChartData.series} type="bar" />
                </div>
            </div>
        </>
    )
}
