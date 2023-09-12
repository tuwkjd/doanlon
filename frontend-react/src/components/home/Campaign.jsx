import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import classes from "./Campaign.module.css";

class Campaign extends Component {
  state = {
    isCloseBtnClick: true,
  };

  closeBtnHandler = () => {
    this.setState({ isCloseBtnClick: false });
  };

  render() {
    return (
      <Fragment>
        {this.state.isCloseBtnClick && (
          <div>
            <Container>
              
              <span
                className={`${classes["campaign-button"]} float-end`}
                onClick={this.closeBtnHandler}
              >
                <i className="fas fa-times"></i>
              </span>
            </Container>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Campaign;
