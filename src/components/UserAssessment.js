import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./UserAssessment.css"

// Resolves charts dependancy
charts(FusionCharts);

const pokemonData = {
  chart: {
    caption: "Match Pokemons",
    yaxisname: "Score",
    subcaption: "[Last 10 games]",
    numbersuffix: "",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion",
  },
  data: [
    {
      label: "2021-04-01",
      value: "89.45",
    }
  ],
};

const chalkboardData = {
  chart: {
    caption: "Chalkboard Challenge",
    yaxisname: "Score",
    subcaption: "[Last 10 games]",
    numbersuffix: "",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion",
  },
  data: [
    {
      label: "2021-04-01",
      value: "89.45",
    }
  ],
};

const quizData = {
  chart: {
    caption: "Wuhoo",
    yaxisname: "Score",
    subcaption: "[Last 10 games]",
    numbersuffix: "",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion",
  },
  data: [
    {
      label: "2021-04-01",
      value: "89.45",
    },
    {
      label: "2021-04-01",
      value: "1",
    },
    {
      label: "2021-04-01",
      value: "120",
    },
    {
      label: "2021-04-01",
      value: "50",
    },
    {
      label: "2021-04-01",
      value: "33",
    },
    {
      label: "2021-04-01",
      value: "21",
    }
  ],
};

class UserAssessment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: chalkboardData,
      avgScore: 0,
      maxScore: 0,
      minScore: 0,
    };
    this.selectMinigame = this.selectMinigame.bind(this);
    this.setStateData = this.setStateData.bind(this);
    //this.updateData = this.updateData.bind(this);
  }

  setStateData(data) {
    var arr = [];
    var maxVal = 0;
    var minVal = 9999;
    var avgVal = 0;

    Object.keys(data.data).forEach(function (key) {
      arr.push(data.data[key].value);
    });

    for (let i = 0; i < arr.length; i++) {
      var value = parseFloat(arr[i]);
      
      avgVal = avgVal + value;

      if (value > maxVal) {
        maxVal = value;
      }

      if (value < minVal) {
        minVal = value;
      }
    }

    avgVal = Math.round(avgVal / arr.length);

    this.setState({
      dataSet: data,
      maxScore: maxVal,
      minScore: minVal,
      avgScore: avgVal,
    });
  }

  selectMinigame(name) {
    switch (name) {
      case "Chalkboard":
        this.setStateData(chalkboardData);
        break;
      case "Pokemon":
        this.setStateData(pokemonData);
        break;
      case "Wuhoo":
        this.setStateData(quizData);
        break;
      default:
        break;
    }
  }

  render() {
    const { dataSet, maxScore, minScore, avgScore } = this.state;

    return (
      <>
        <div>
          <DropdownButton id="dropdown-basic-button" title="Select Minigame">
            <Dropdown.Item onClick={() => this.selectMinigame("Chalkboard")}>
              Chalkboard Challenge
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.selectMinigame("Pokemon")}>
              Match Pokemons
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.selectMinigame("Wuhoo")}>
              Wuhoo!
            </Dropdown.Item>
          </DropdownButton>
          <ReactFusioncharts
            type="line"
            width="100%"
            height="70%"
            dataFormat="JSON"
            dataSource={dataSet}
          />
          <div className="score-labels">
            <label> Minimum Score: {minScore}</label>
            <br/>
            <label> Maximum Score: {maxScore}</label>
            <br/>
            <label> Average Score Per Game: {avgScore}</label>
            <br/>
          </div>
        </div>
      </>
    );
  }
}

export{pokemonData, chalkboardData, quizData};
export default UserAssessment;
