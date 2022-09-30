// import React from 'react'
import ReactEcharts from "echarts-for-react"; 
import Data from "../Json_Server/Wine-Data.json"



 function BarChart() {

  const Alcohol = Data.map(data => {
    return data.Alcohol;
  } )
//   console.log( "Alochol", Alcohol)

  let UniqueAlcohol = [... new Set(Alcohol)]
//   console.log( "Unique", UniqueAlcohol)

  
  const MalicAcid = Data.map(data => {
    return data["Malic Acid"];
  } )
//   console.log( "Malic Acoid",MalicAcid)
  

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