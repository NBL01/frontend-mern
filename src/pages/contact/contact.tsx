import { Col, Container, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../components/layouts/default-layout";
import "./contact.css";
import React from "react";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout title="Contact">
      <section id="contact" className="contact">
        <Container data-aos="fade-up">
          <div className="section-title">
            <h2 className="text-center">Contact</h2>
          </div>
          <Row data-aos="fade-up" data-aos-delay={100}>
            <Col lg={6}>
              <Row>
                <Col md={12}>
                  <div
                    className="info-box bg-white"
                    style={{ paddingTop: "20px" }}
                  >
                    <i className="bx bx-map" />
                    <h3>Our Address</h3>
                    <p>Prospekt Mangilik Yel., Astana 020000</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div
                    className="info-box mt-4 bg-white"
                    style={{ paddingTop: "20px" }}
                  >
                    <i className="bx bx-envelope" />
                    <h3>Email Us</h3>
                    <p>
                      support@gmail.com
                      <br />
                      211116@astanait.edu.kz
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div
                    className="info-box mt-4 bg-white"
                    style={{ paddingTop: "20px" }}
                  >
                    <i className="bx bx-phone-call" />
                    <h3>Call Us</h3>
                    <p>
                      +7 777 777 77 77
                      <br />
                      +7 712 345 67 89
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  toast.success("Thanks for your feedback 🙂");
                  navigate("/");
                }}
                className="php-email-form bg-white"
              >
                <Row>
                  <Col className=" form-group">
                    <Form.Control
                      type="text"
                      name="name"
                      className="bg-surface-secondary"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </Col>
                  <div className="col form-group">
                    <Form.Control
                      type="email"
                      className="bg-surface-secondary"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </Row>
                <div className="form-group">
                  <Form.Control
                    type="text"
                    className="bg-surface-secondary"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <Form.Control
                    as={"textarea"}
                    className="bg-surface-secondary"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};

export default Contact;
