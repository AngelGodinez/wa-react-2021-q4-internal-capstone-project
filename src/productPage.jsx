import React from 'react';
import { useParams } from 'react-router';

export default function ProductPage() {
  const { productId } = useParams();
  console.log({productId});
  return (
    <div>
      <h1>This is PRODUCT PAGE</h1>
    </div>
  )
}
