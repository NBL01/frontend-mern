import { ReactNode } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import DefaultLayout from "../layouts/default-layout";
import ImageLazy from "./lazy-image";
import React from "react";

type FormTypes = {
  children: ReactNode;
  title: string;
  image?: string;
  meta?: string;
};

const FormContainer = (props: FormTypes) => {
  return (
    <DefaultLayout title={props.meta}>
      <Container>
        <Row className=" justify-content-center py-6">
          <Col md={6}>
            <Card>
              <h1 style={{ color: "#e03a3c" }} className="text-center my-3">
                {props.title}
              </h1>
              {props.image && (
                <ImageLazy
                  imageUrl={props.image}
                  style={{ height: "250px", width: "100%" }}
                />
              )}
              <Card.Body>{props.children}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default FormContainer;
