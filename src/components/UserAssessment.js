import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import scoreManager from './ScoreButton.js';

// Resolves charts dependancy
charts(FusionCharts);

const pokemonData = {
  chart: {
    caption: "Match Pokemons",
    yaxisname: "Score",
    subcaption: "[Last 20 games]",
    numbersuffix: "",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion",
  },
  data: [
    {
      label: "2005",
      value: "89.45",
    },
    {
      label: "2006",
      value: "89.87",
    },
    {
      label: "2007",
      value: "89.64",
    },
    {
      label: "2008",
      value: "90.13",
    },
    {
      label: "2009",
      value: "90.67",
    },
    {
      label: "2010",
      value: "90.54",
    },
    {
      label: "2011",
      value: "90.75",
    },
    {
      label: "2012",
      value: "90.8",
    },
    {
      label: "2013",
      value: "91.16",
    },
    {
      label: "2014",
      value: "91.37",
    },
    {
      label: "2015",
      value: "91.66",
    },
    {
      label: "2016",
      value: "91.8",
    },
  ],
};

const chalkboardData = {
  chart: {
    caption: "Chalkboard Challenge",
    yaxisname: "Score",
    subcaption: "[Last 20 games]",
    numbersuffix: "",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "2021-04-01",
      value: "89.45"
    },
    {
      label: "2021-04-02",
      value: "89.87"
    },
    {
      label: "2021-04-12",
      value: "89.64"
    },
    {
      label: "2021-04-10",
      value: "90.13"
    },
    {
      label: "2021-04-05",
      value: "90.67"
    },
    {
      label: "2021-04-06",
      value: "90.54"
    },
    {
      label: "2021-04-07",
      value: "90.75"
    },
    {
      label: "2021-04-08",
      value: "90.8"
    },
    {
      label: "2021-04-09",
      value: "91.16"
    },
    {
      label: "2021-04-11",
      value: "91.37"
    },
    {
      label: "2021-04-12",
      value: "91.66"
    },
    {
      label: "2021-04-10",
      value: "91.8"
    }
  ]
};


class UserAssessment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data : chalkboardData
    };
    this.selectMinigame = this.selectMinigame.bind(this);
  }

  selectMinigame(name) {
    switch (name) {
      case "Chalkboard":
        this.setState({ 
          data : chalkboardData 
        });
        break;
      case "Pokemon":
        this.setState({ 
          data : pokemonData 
        });
        break;
      default:
        break;  
    }
  }

  render() {
    let output;
    output = scoreManager.getText();

    return (
      <div>
        <p>{output}</p>
        <br/>
        <DropdownButton id="dropdown-basic-button" title="Select Minigame">
          <Dropdown.Item href="#/action-1">Chalkboard Challenge</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Match Pokemons</Dropdown.Item>
        </DropdownButton>

        <ReactFusioncharts
          type="line"
          width="100%"
          height="70%"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </div>
    );
  }
}

export default UserAssessment;
