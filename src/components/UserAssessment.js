import React from 'react'
import FusionCharts, { render } from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Name of mini game",
    yaxisname: "Score",
    subcaption: "[Last 20 scores]",
    numbersuffix: "",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "2005",
      value: "89.45"
    },
    {
      label: "2006",
      value: "89.87"
    },
    {
      label: "2007",
      value: "89.64"
    },
    {
      label: "2008",
      value: "90.13"
    },
    {
      label: "2009",
      value: "90.67"
    },
    {
      label: "2010",
      value: "90.54"
    },
    {
      label: "2011",
      value: "90.75"
    },
    {
      label: "2012",
      value: "90.8"
    },
    {
      label: "2013",
      value: "91.16"
    },
    {
      label: "2014",
      value: "91.37"
    },
    {
      label: "2015",
      value: "91.66"
    },
    {
      label: "2016",
      value: "91.8"
    }
  ]
};

function handleSelect(e){
    alert(e);
}

export default function UserAssessment() {
   
    return (
        <>
            <div>
                <select id="dropdown" onChange="handleSelect">
                    <option value="MG1"> Minigame 1 </option>
                    <option value="MG2"> Minigame 2 </option>
                    <option value="MG3"> Minigame 3 </option>
                    <option value="MG4"> Minigame 4 </option>
                </select>
            </div>
            {/* <div>
                <ReactFusioncharts
                    type="line"
                    width="100%"
                    height="100%"
                    dataFormat="JSON"
                    dataSource={dataSource}
                />
            </div> */}
        </>
    )
}
