import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function DynamicRoute() {
  const title = ['Apple', 'Orange'];
  const { slug, id } = useParams();

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>{`${title[parseInt(slug, 10)]} ${id}`}</h1>
        </Col>
      </Row>
    </Container>
  );
}
