import React from 'react';
import Risk from './components/risks';
import Card from 'components/card/Card';
import CardDetails from './components/cardDetails';

const Risks = () => {
  // Create an array with 10 elements
  const cardDetailsArray = Array.from({ length: 5 });

  return (
    <Card mt="100px">
      <Risk />
      {cardDetailsArray.map((_, index) => (
        <CardDetails key={index} />
      ))}
    </Card>
  );
};

export default Risks;
