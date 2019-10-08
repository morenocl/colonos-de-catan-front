import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';

import Lobby from './Lobby';
import { listLobbies } from '../utils/Api';


export default function LobbyList() {
  const [page, setPage] = useState(undefined);

  const showList = (lobbies) => setPage(
    <Accordion>
      {lobbies.map((x) => <Lobby lobby={x} key={x.id} />)}
    </Accordion>,
  );

  const showError = () => setPage(
    <Alert variant="danger">
      <Alert.Heading>
        Error
      </Alert.Heading>
      There was an error requesting data from server.
      Check your internet connection.
    </Alert>,
  );

  // Runs only after mounted for the first time.
  useEffect(() => listLobbies(showList, showError), []);

  return (
    <div>
      {page}
    </div>
  );
}
