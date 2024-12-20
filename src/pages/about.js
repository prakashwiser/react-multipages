import React from "react";
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";
import MainLayOut from "../Layout/MainLayOut";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Text from "../components/Text";
import Images from "../components/Images";
import Cards from "../components/Cards";
import { CardItems } from "../components/Cards";
import Contact from "../components/Contact";
import "../App.css";
import Navtabs from "../components/Navtabs";
import Bannerlogo from "../assets/images/Bannerlogo.jpg";
import Abouts from "../assets/images/about-1.jpg";

function About() {
  return (
    <MainLayOut>
      <MainLayOut style="bg-color py-lg-5">
        <Container>
          <Row className="my-lg-5">
            <MainLayOut style="col-12 col-lg-6 ">
              <Images style="w-100" link={Abouts} />
            </MainLayOut>
            <MainLayOut style="col-12 col-lg-6 mt-5 ">
              <Text
                style="h7 fw-bold text-center  text-center text-lg-start"
                text="About Me"
              />
              <Text
                style="mb-4  text-center text-lg-start"
                text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered  in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,"
              />
              <Navtabs />
            </MainLayOut>
          </Row>
        </Container>
      </MainLayOut>
      <MainLayOut>
        <Container>
          <MainLayOut style="text-center pt-5">
            <Text style="h7 fw-bold lh-base" text="My Awesome Service " />
            <Text
              style="w50 m-auto"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />
          </MainLayOut>
          <Row className="my-5">
            <Cards />
          </Row>
        </Container>
      </MainLayOut>
      <MainLayOut style="text-center">
        <Text style="h7 fw-bold lh-base" text="My Latest Project" />
        <Text
          style="w50 m-auto"
          text="There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration. Development Getting tickets 
          to the big show View Details Development Getting tickets to the big 
          show View Details"
        />
        <Container>
          <Row>
            <CardItems />
          </Row>
          <Button variant="danger" className="px-4 py-2 fs-5 my-5 uppercase">
            View More{" "}
          </Button>{" "}
        </Container>
      </MainLayOut>
      <MainLayOut style="bg-color py-5">
        <Container className="my-lg-5">
          <Row>
            <MainLayOut style="col-12 col-md-6">
              <Contact />
            </MainLayOut>
            <MainLayOut style="col-12 col-md-6">
              <Images style="w-100 mt-5 mt-lg-0" link={Bannerlogo} />
            </MainLayOut>
          </Row>
        </Container>
      </MainLayOut>
      <Footer />
    </MainLayOut>
  );
}

export default About;
