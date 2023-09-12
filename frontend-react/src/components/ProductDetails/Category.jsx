import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class Category extends Component {
  render() {
    const CategoryLists = this.props.ProductData;
    const Category = this.props.Category;
    const MyView = CategoryLists.map((CategoryList, i) => {
      if (CategoryList.special_price === "na") {
        return (
          <Col
            key={i.toString()}
            className="mb-2 p-1"
            xl={2}
            lg={2}
            md={2}
            sm={4}
            xs={6}
          >
            <Link
              className="custom-links"
              to={"/productdetails/" + CategoryList.id}
            >
              <Card className="card-product">
                <Card.Img
                  variant="top"
                  src={CategoryList.image}
                  alt="3b-button-3"
                />
                <Card.Body>
                  <span className="card-product-title">
                    {CategoryList.title}
                  </span>
                  <br />
                  <span className="card-product-price">
                    {CategoryList.price}VND
                  </span>
                  <br /> <br />
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col
            key={i.toString()}
            className="mb-2 p-1"
            xl={2}
            lg={2}
            md={2}
            sm={4}
            xs={6}
          >
            <Link
              className="custom-links"
              to={"/productdetails/" + CategoryList.id}
            >
              <Card className="card-product">
                <Card.Img
                  variant="top"
                  src={CategoryList.image}
                  alt="3b-button-3"
                />
                <Card.Body>
                  <span className="card-product-title">
                    {CategoryList.title}
                  </span>
                  <br />
                  <span className="card-product-price">
                    {CategoryList.special_price}VND
                  </span>
                  <br />
                  <strike className="card-product-discount">
                    {CategoryList.price}VND
                  </strike>
                  <span className="card-product-discount-percent">-15%</span>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });
    return (
      <Fragment>
        <Container className="mt-5 mb-5">
          <h2 className="section-header">{Category}</h2>

          {/* Start Product Card */}
          <div className="mx-2">
            <Row>{MyView}</Row>
          </div>
          {/* End Product Card */}
        </Container>
        <br />
      </Fragment>
    );
  }
}

export default Category;
