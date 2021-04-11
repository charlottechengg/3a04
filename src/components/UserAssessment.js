import React, { Component } from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

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

    const{ data } = this.state;

    return (
      <>
        <div className="score-container">
          <DropdownButton id="dropdown-basic-button" title="Select Minigame">
            <Dropdown.Item onClick={() => this.selectMinigame("Chalkboard")}>
              Chalkboard Challenge
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.selectMinigame("Pokemon")}>
              Match Pokemons
            </Dropdown.Item>
          </DropdownButton>

          <ReactFusioncharts
            type="line"
            width="100%"
            height="100%"
            dataFormat="JSON"
            dataSource={data}
          />
        </div>
      </>
    );
  }
}

export default UserAssessment;
