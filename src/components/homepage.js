import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./homepage.css";
import MinigameMenu from "./MinigameMenu";
import FAQ from "./FAQ"
import UserAssessment from "./UserAssessment"
import Chalkboard from "./Chalkboard.js";

class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showFAQ : false,
      showScores : false,
      showHomepage : true
    };
    this.showComponent = this.showComponent.bind(this);
  }

  showComponent(name) {
    switch (name) {
      case "showFAQ":
        this.setState({ 
          showFAQ: true,
          showScores : false,
          showHomepage : false 
        });
        break;
      case "showScores":
        this.setState({ 
          showFAQ: false,
          showScores : true,
          showHomepage : false 
        });
        break;
      case "showHomepage":
        this.setState({ 
          showFAQ : false,
          showScores : false,
          showHomepage: true 
        });
        break;
      default:
        break;  
    }
  }

  message() {
    console.log(1);
  }

  render() {

    const{ showFAQ, showScores, showHomepage } = this.state;

    return (
      <div className="homepage-container">
        <div className="img-mainpage">

        {showHomepage && (
          <div>
            <div className="side-button-mainpage">
              <Button
                style={{ marginRight: "10px" }}
                size="small"
                variant="contained"
                color="secondary"
                onClick={() => this.message()}
              >
                {" "}
                sign in
                {" "}
              </Button>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                onClick={() => this.message()}
              >
                {" "}
                log in
                {" "}
              </Button>
            </div>
            <h1 className="title-mainpage"> WISER </h1>
            {/* <div className="button-mainpage">
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={() => this.message()}
              >
                {" "}
                select{" "}
              </Button>
            </div> */}

            <div className="button-mainpage">
              <Button
                variant="contained"
                color="primary"
                onClick={() => this.showComponent("showScores")}
                style={{
                  maxWidth: "160x",
                  maxHeight: "80px",
                  minWidth: "160px",
                  minHeight: "80px",
                }}
              >
                {" "}
                Scores{" "}
              </Button>
            </div>
            <div className="button-mainpage">
              <Button
                variant="contained"
                color="primary"
                onClick={() => this.showComponent("showFAQ")}
                style={{
                  maxWidth: "160x",
                  maxHeight: "80px",
                  minWidth: "160px",
                  minHeight: "80px",
                }}
              >
                {" "}
                FAQ
                {" "}
              </Button>
            </div>

            <MinigameMenu />
          </div>          
          )}
          
          {showFAQ && (
            <div>
              <Button
                  className="back-button" 
                  variant="contained"
                  color="primary"
                  onClick={() => this.showComponent("showHomepage")}
                  > 
              {""}
                Back
              {""} 
              </Button>
              <FAQ />
            </div>
          )}

          {showScores && (
            <div>
              <Button
                  className="back-button" 
                  variant="contained"
                  color="primary"
                  onClick={() => this.showComponent("showHomepage")}
                  > 
              {""}Back{""} 
              </Button>
              <UserAssessment />
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Homepage;
