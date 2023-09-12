import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./FooterDesktop.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import ReactHtmlParser from "react-html-parser";

class FooterDesktop extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      android_app_link: "",
      ios_app_link: "",
      facebook_link: "",
      twitter_link: "",
      instagram_link: "",
      copyright_text: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.SiteInfo)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode === 200) {
          let JsonData = response.data[0];
          this.setState({
            address: JsonData["address"],
            android_app_link: JsonData["android_app_link"],
            ios_app_link: JsonData["ios_app_link"],
            facebook_link: JsonData["facebook_link"],
            twitter_link: JsonData["twitter_link"],
            instagram_link: JsonData["instagram_link"],
            copyright_text: JsonData["copyright_text"],
            loaderDiv: "d-none",
            mainDiv: "",
          });
        }
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        {/* Start Footer One */}
        <div className={`${classes["footer-one"]}`}>
          <Container>
            <Row>
              <Col className="mt-4" xl={6} lg={6} md={12}>
                <h4 className={`${classes["footer-title"]}`}>
                  Payment Methods
                </h4>
                <Row>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-1.png")}
                      alt="delivery-services-1"
                      width="90px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-2.png")}
                      alt="delivery-services-1"
                      width="65px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-3.png")}
                      alt="delivery-services-1"
                      width="60px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-4.png")}
                      alt="delivery-services-1"
                      width="60px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-5.png")}
                      alt="delivery-services-1"
                      width="70px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-6.png")}
                      alt="delivery-services-1"
                      width="45px"
                    />
                  </Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Col>
              <Col xl={6} lg={6} md={12}>
                <Row>
                  <Col className="mt-4" xl={6} lg={6} md={6} sm={12}>
                    <h4 className={`${classes["footer-title"]}`}>
                      Delivery Services
                    </h4>
                    <div className="vstack gap-3">
                      <img
                        src={require("../../assets/images/common/footer/delivery/delivery-services-1.png")}
                        alt="delivery-services-1"
                        width="142px"
                      />
                      <img
                        src={require("../../assets/images/common/footer/delivery/delivery-services-2.png")}
                        alt="delivery-services-2"
                        width="142px"
                      />
                      <img
                        src={require("../../assets/images/common/footer/delivery/delivery-services-3.png")}
                        alt="delivery-services-3"
                        width="142px"
                      />
                      <span>
                        <img
                          className="me-2"
                          src={require("../../assets/images/common/footer/delivery/delivery-services-4.png")}
                          alt="delivery-services-4"
                          width="142px"
                        />
                        <img
                          src={require("../../assets/images/common/footer/delivery/delivery-services-5.png")}
                          alt="delivery-services-5"
                          width="80px"
                        />
                      </span>
                      <span>
                        <img
                          className="me-3"
                          src={require("../../assets/images/common/footer/delivery/delivery-services-6.png")}
                          alt="delivery-services-6"
                          width="75px"
                        />
                        <img
                          src={require("../../assets/images/common/footer/delivery/delivery-services-7.png")}
                          alt="delivery-services-7"
                          width="120px"
                        />
                      </span>
                    </div>
                  </Col>
                  <Col className="mt-4" xl={6} lg={6} md={6} sm={12}>
                    <h4 className={`${classes["footer-title"]}`}>
                      Verified by
                    </h4>
                    <img
                      className="me-3"
                      src={require("../../assets/images/common/footer/verified/verified-by-1.png")}
                      alt="delivery-services-1"
                      width="100px"
                    />
                    <img
                      src={require("../../assets/images/common/footer/verified/verified-by-2.png")}
                      alt="delivery-services-2"
                      width="92px"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* End Footer One */}

        {/* Start Footer Two */}
        <div className={`${classes["footer-two"]}`}>
          <Container>
            <Row>
              <Col className="mt-5" xl={3} lg={3} md={6} sm={12}>
                <h5 className={`${classes["footer-two-title"]}`}>
                  The Top Online Shopping <br /> Experience with Lazada
                  Philippines
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                  none
                </p>
              </Col>
              <Col className="mt-5" xl={3} lg={3} md={6} sm={12}>
                <h5 className={`${classes["footer-two-title"]}`}>
                  The Best Products and Deals? <br />
                  Nasa Lazada Yan!
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                 
                </p>
                <h6 className={`${classes["footer-two-sub-title"]}`}>
                  From Products to Services, It is Assured,
                  <br /> Sure Ka Sa Lazada!
                </h6>
                <p className={`${classes["footer-two-body-text"]}`}>
                
                </p>
                <h6 className={`${classes["footer-two-sub-title"]}`}>
                  LAZWALLET CONVENIENCE
                </h6>
                <p className={`${classes["footer-two-body-text"]}`}>
                 
                </p>
              </Col>
              <Col className="mt-5" xl={3} lg={3} md={6} sm={12}>
                <h5 className={`${classes["footer-two-sub-title"]}`}>
                  SECURED PAYMENT AND CASH ON <br /> DELIVERY
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                 
                </p>
                <h5 className={`${classes["footer-two-sub-title"]}`}>
                  SOLID CUSTOMER COMMUNICATION
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                  
                </p>
                <h5 className={`${classes["footer-two-sub-title"]}`}>
                  AUTHENTIC PRODUCT GUARANTEED
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                 
                  <span className={`${classes["footer-link-text"]}`}>
                    
                  </span>
                 
                </p>
              </Col>
              <Col className="mt-5" xl={3} lg={3} md={6} sm={12}>
                <h5 className={`${classes["footer-two-sub-title"]}`}>
                
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                 
                </p>
                <h5 className={`${classes["footer-two-sub-title"]}`}>
                  
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                  
                  <span className={`${classes["footer-link-text"]}`}>
                    
                  </span>
                 
                  <span className={`${classes["footer-link-text"]}`}>
                   
                  </span>{" "}
                 
                  <span className={`${classes["footer-link-text"]}`}>
                  
                  </span>
                  
                </p>
                <div>
                  <hr />
                  <ul className={`${classes["ul-links"]}`}>
                    <li>
                      <Link className={`${classes["custom-link"]}`} to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${classes["custom-link"]}`}
                        to="/privacy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* End Footer Two */}

        {/* Start Footer Three */}
        <div className={`${classes["footer-three"]}`}>
          <Container className={`${classes["responsive-footer"]}`}>
            <Row>
              <Col className="mt-5" xl={5} lg={5} md={12} sm={12}>
                {/* Start Skeletal Loading Div */}
                <div className={this.state.loaderDiv}>
                  <div className="ph-col-12 mb-2">
                    <div className="ph-row">
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                    </div>
                  </div>
                </div>
                {/* End Skeletal Loading Div */}

                <h4
                  className={`${classes["footer-three-title"]} ${this.state.mainDiv}`}
                >
                  {ReactHtmlParser(this.state.address)}
                </h4>
                {/* Start Map Grid */}
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/indonesia.png")}
                  alt="indonesia.png"
                  width="30px"
                />
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/malaysia.png")}
                  alt="malaysia.png"
                  width="30px"
                />
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/philippines.png")}
                  alt="philippines.png"
                  width="30px"
                />
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/singapore.png")}
                  alt="singapore.png"
                  width="30px"
                />
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/thailand.png")}
                  alt="thailand.png"
                  width="30px"
                />
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/vietnam.png")}
                  alt="vietnam.png"
                  width="30px"
                />
                {/* Google Translate Api */}
                <div className="mt-3" id="google_translate_element"></div>

                {/* End Map Grid */}
              </Col>
              <Col className="mt-5" xl={7} lg={7} md={12} sm={12}>
                <Row>
                  <Col className="mb-4" xl={6} lg={6} md={12} sm={12}>
                    <h4 className={`${classes["footer-three-title"]}`}>
                      Follow Us
                    </h4>
                    {/* Start Social Icon Grid */}
                    <a
                      href={this.state.facebook_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className={`${classes["social-icon"]} img-fluid me-1`}
                        src={require("../../assets/images/common/footer/social/facebook.png")}
                        alt="facebook.png"
                        width="30px"
                      />
                    </a>

                    <a
                      href={this.state.twitter_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className={`${classes["social-icon"]} img-fluid me-1`}
                        src={require("../../assets/images/common/footer/social/twitter.png")}
                        alt="twitter.png"
                        width="30px"
                      />
                    </a>

                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/google-plus.png")}
                      alt="google-plus.png"
                      width="30px"
                    />

                    <a
                      href={this.state.instagram_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className={`${classes["social-icon"]} img-fluid me-1`}
                        src={require("../../assets/images/common/footer/social/instagram.png")}
                        alt="instagram.png"
                        width="30px"
                      />
                    </a>

                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/youtube.png")}
                      alt="youtube.png"
                      width="30px"
                    />

                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/pinterest.png")}
                      alt="pinterest.png"
                      width="30px"
                    />

                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/blogger.png")}
                      alt="blogger.png"
                      width="30px"
                    />
                    {/* End Social Icon Grid */}
                  </Col>
                  <Col xl={6} lg={6} md={12} sm={12}>
                    <div
                      className={`${classes["responsive-download-wrapper"]} hstack gap-1`}
                    >
                      <img
                        className={`${classes["responsive-lazada-icon"]} img-fluid me-1`}
                        src={require("../../assets/images/common/footer/lazada-icon.png")}
                        alt="lazada-icon.png"
                        width="60px"
                      />
                      <div>
                        <span className={`${classes["download-text-1"]}`}>
                          Go where your heart beats
                          <br />
                        </span>
                        <span className={`${classes["download-text-2"]}`}>
                          {" "}
                          Download the App
                        </span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <a
                        href={this.state.ios_app_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className={`${classes["download-icon"]} me-2`}
                          src={require("../../assets/images/common/footer/appstore.png")}
                          alt="appstore.png"
                          width="130px"
                        />
                      </a>
                      <a
                        href={this.state.android_app_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className={`${classes["download-icon"]}`}
                          src={require("../../assets/images/common/footer/googleplay.png")}
                          alt="googleplay.png"
                          width="135px"
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* Start Skeletal Loading Div */}
              <div className={this.state.loaderDiv}>
                <div className="ph-col-12">
                  <div className="ph-row">
                    <div className="ph-col-2"></div>
                    <div className="ph-col-10 empty"></div>
                  </div>
                </div>
              </div>
              {/* End Skeletal Loading Div */}
              <h4
                className={`${classes["footer-copyright"]} ${this.state.mainDiv}`}
              >
                {ReactHtmlParser(this.state.copyright_text)}
              </h4>
            </Row>
          </Container>
        </div>
        {/* End Footer Three */}
      </Fragment>
    );
  }
}

export default FooterDesktop;
