// import React from 'react'
import ReactEcharts from "echarts-for-react"; 
import Data from "../JsonServer/Wine-Data.json"



 function BarChart() {

  // extract Alcohol from wine data set
  const Alcohol = Data.map(data => {
    return data.Alcohol;
  } )

  // Remove duplicate values
  let UniqueAlcohol = [... new Set(Alcohol)]
  
  // extract Malic Acid from wine data set
  const MalicAcid = Data.map(data => {
    return data["Malic Acid"];
  } )

  //   console.log("Alcohol", Alcohol);
  //   console.log( "Unique", UniqueAlcohol);
  //   console.log( "Malic Acoid",MalicAcid);
  

    const option = {

      xAxis: {
        type: 'category',
        data: UniqueAlcohol,
        axisLabel : {
          formatter: '{value} '
        },
        name: 'Alcohol',
        nameLocation: 'middle',
        nameGap: 50
      },
      yAxis: {
        type: 'value',
        axisLabel : {
          formatter: '{value} '
        },
        name: 'Malic Acid',
        nameLocation: 'middle',
        nameGap: 50
      },
      series: [
        {
          data: MalicAcid,
          type: 'bar',
          
          
        }
      ]
    }; 
    return <ReactEcharts option={option} />;


}

export default BarChart