import React, { useEffect } from 'react';
import Risk from './components/risks';
import Card from 'components/card/Card';
import CardDetails from './components/cardDetails';
import { connect, useDispatch } from 'react-redux';
import { listEvents } from 'redux/events/action';
const Risks = ({ events, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  // Trier les événements par date de création et sélectionner les 5 plus récents
  const recentEvents = events
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Assurez-vous que 'createdAt' est la propriété correcte
    .slice(0, 5);

  return (
    <Card mt="100px">
      <Risk />
      <CardDetails events={recentEvents} loading={loading} />
    </Card>
  );
};

const mapStateToProps = ({ EventReducer }) => ({
  events: EventReducer.events,
  loading: EventReducer.loading,
});

export default connect(mapStateToProps)(Risks);