import React from 'react'
import Risk from './components/risks'
import Card from 'components/card/Card'
import CardDetails from './components/cardDetails';

const Risks = () => {
  return (
    <Card mt="100px">
      <Risk />
      <CardDetails />
    </Card>
    
  );
}

export default Risks
