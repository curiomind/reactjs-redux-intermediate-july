import React from 'react';
import { useParams } from 'react-router-dom';

export default function DynamicRoute() {
  const title = ['Apple', 'Orange'];
  const { slug, id } = useParams();

  return (
    <h1>
      {title[parseInt(slug)]} {id}
    </h1>
  );
}
