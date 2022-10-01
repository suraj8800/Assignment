import React from 'react'
import Data from "../JsonServer/Wine-Data.json"
import ReactEcharts from "echarts-for-react"; 


function ScatterChart() {

  //extract color intensity from wine data set
  const ColorIntensity = Data.map(data => {
    return data['Color intensity']
  })
  
  // extract hue from wine data set
  const Hue = Data.map(data => {
    return data.Hue
  })
  
  // console.log(ColorIntensity)
  // console.log(Hue);

  const option = {
    xAxis: {
        axisLabel : {
            formatter: '{value} '
          },
          name: 'Color Intensity',
          nameLocation: 'middle',
          nameGap: 50
    },
    yAxis: {
        axisLabel : {
            formatter: '{value} '
          },
          name: 'Hue',
          nameLocation: 'middle',
          nameGap: 50
    },
    series: [
      {
        symbolSize: 20,
        data: ColorIntensity, Hue
        ,
        type: 'scatter'
      }
    ]
  };
  return <ReactEcharts option={option} />;
}

export default ScatterChart