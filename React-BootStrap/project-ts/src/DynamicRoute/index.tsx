import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

interface ParamsTypes {
  slug: string;
  id: string;
}

export default function DynamicRoute(): JSX.Element {
  const title: string[] = ['Apple', 'Orange'];
  const { slug, id } = useParams<ParamsTypes>();

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
