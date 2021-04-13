import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

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
    },
    {
      label: "2021-04-02",
      value: "89.87",
    },
    {
      label: "2021-04-12",
      value: "89.64",
    },
    {
      label: "2021-04-10",
      value: "90.13",
    },
    {
      label: "2021-04-05",
      value: "90.67",
    },
    {
      label: "2021-04-06",
      value: "90.54",
    },
    {
      label: "2021-04-07",
      value: "90.75",
    },
    {
      label: "2021-04-08",
      value: "90.8",
    },
    {
      label: "2021-04-09",
      value: "91.16",
    },
    {
      label: "2021-04-11",
      value: "91.37",
    },
    {
      label: "2021-04-12",
      value: "91.66",
    },
    {
      label: "2021-04-10",
      value: "100",
    },
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
    },
    {
      label: "2021-04-02",
      value: "89.87",
    },
    {
      label: "2021-04-12",
      value: "89.64",
    },
    {
      label: "2021-04-10",
      value: "90.13",
    },
    {
      label: "2021-04-05",
      value: "90.67",
    },
    {
      label: "2021-04-06",
      value: "90.54",
    },
    {
      label: "2021-04-07",
      value: "90.75",
    },
    {
      label: "2021-04-08",
      value: "90.8",
    },
    {
      label: "2021-04-09",
      value: "91.16",
    },
    {
      label: "2021-04-11",
      value: "91.37",
    },
    {
      label: "2021-04-12",
      value: "91.66",
    },
    {
      label: "2021-04-10",
      value: "110",
    },
  ],
};

const quizData = {
  chart: {
    caption: "Quizlet",
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
      label: "2021-04-02",
      value: "89.87",
    },
    {
      label: "2021-04-12",
      value: "89.64",
    },
    {
      label: "2021-04-10",
      value: "90.13",
    },
    {
      label: "2021-04-05",
      value: "90.67",
    },
    {
      label: "2021-04-06",
      value: "90.54",
    },
    {
      label: "2021-04-07",
      value: "90.75",
    },
    {
      label: "2021-04-08",
      value: "90.8",
    },
    {
      label: "2021-04-09",
      value: "91.16",
    },
    {
      label: "2021-04-11",
      value: "91.37",
    },
    {
      label: "2021-04-12",
      value: "91.66",
    },
    {
      label: "2021-04-10",
      value: "120",
    },
  ],
};

class UserAssessment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: chalkboardData,
      avgScore: 0,
      maxScore: 0,
      minScore: 0,
    };
    this.selectMinigame = this.selectMinigame.bind(this);
    this.setStateData = this.setStateData.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  setStateData(data) {
    var arr = [];
    var maxVal = 0;
    var minVal = 9999;
    var avgVal = 0;

    Object.keys(data).forEach(function (key) {
      arr.push(data[key]);
    });

    for (let i = 0; i < arr.length; i++) {
      avgVal = avgVal + arr[i].value;

      if (arr[i] > maxVal) {
        maxVal = arr[i].value;
      }

      if (arr[i] < minVal) {
        minVal = arr[i].value;
      }
    }

    avgVal = avgVal / arr.length;

    this.setState({
      data: data,
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
        console.log("clicking Pokemon");
        break;
      case "Quiz":
        this.setStateData(quizData);
        break;
      default:
        break;
    }
  }

  updateData(label, value) {
    this.state.data.data.push({label, value});
  }

  render() {
    const { data, maxScore, minScore, avgScore } = this.state;

    return (
      <>
        <div>
          {" "}
          <DropdownButton id="dropdown-basic-button" title="Select Minigame">
            <Dropdown.Item onClick={() => this.selectMinigame("Chalkboard")}>
              Chalkboard Challenge
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.selectMinigame("Pokemon")}>
              Match Pokemons
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.selectMinigame("Quiz")}>
              Quizlet
            </Dropdown.Item>
          </DropdownButton>
          <ReactFusioncharts
            type="line"
            width="100%"
            height="70%"
            dataFormat="JSON"
            dataSource={data}
          />
          <div>
            <label> Minimum Score Per Game: {minScore}</label>
            <label> Maximum Score Per Game: {maxScore}</label>
            <label> Average Score Per Game: {avgScore}</label>
          </div>
        </div>
      </>
    );
  }
}

const userAssessment = new UserAssessment();

export default userAssessment;
