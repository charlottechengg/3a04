import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./homepage.css";
import Auth from "./Auth";
import MinigameMenu from "./MinigameMenu";
import FAQ from "./FAQ";
import UserAssessment from "./UserAssessment";
import Chalkboard from "./Chalkboard.js";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFAQ: false,
      showScores: false,
      showHomepage: true,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showFAQ":
        this.setState({
          showFAQ: true,
          showScores: false,
          showHomepage: false,
        });
        break;
      case "showScores":
        this.setState({
          showFAQ: false,
          showScores: true,
          showHomepage: false,
        });
        break;
      case "showHomepage":
        this.setState({
          showFAQ: false,
          showScores: false,
          showHomepage: true,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { showFAQ, showScores, showHomepage } = this.state;

    return (
      <div className="homepage-container">
        <div className="img-mainpage">
          {showHomepage && (
            <div>
              <div className="side-button-mainpage">
                <Auth />
              </div>
              <h1 className="title-mainpage"> WISER </h1>

              <div className="button-mainpage">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.hideComponent("showScores")}
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
                  onClick={() => this.hideComponent("showFAQ")}
                  style={{
                    maxWidth: "160x",
                    maxHeight: "80px",
                    minWidth: "160px",
                    minHeight: "80px",
                  }}
                >
                  {" "}
                  FAQ{" "}
                </Button>
              </div>

              <MinigameMenu />
            </div>
          )}
        </div>

        {showScores && (
          <div className="scorespage">
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.hideComponent("showHomepage")}
              style={{
                maxWidth: "160x",
                maxHeight: "80px",
                minWidth: "160px",
                minHeight: "80px",
              }}
            >
              {""}
              Back
              {""}
            </Button>

            <UserAssessment />
          </div>
        )}
        {showFAQ && (
          <div className="faq-container">
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.hideComponent("showHomepage")}
              style={{
                maxWidth: "160x",
                maxHeight: "80px",
                minWidth: "160px",
                minHeight: "80px",
              }}
            >
              {""}
              Back
              {""}
            </Button>
            <FAQ />
          </div>
        )}
      </div>
    );
  }
}
export default Homepage;
