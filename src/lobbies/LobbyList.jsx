import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Lobby from './Lobby';
import { listLobbies } from '../utils/Api';
import Error from '../components/Error';


export default function LobbyList() {
  const [page, setPage] = useState(undefined);

  const showList = (lobbies) => setPage(
    <Accordion>
      {lobbies.map((x) => <Lobby lobby={x} key={x.id} />)}
    </Accordion>,
  );

  // Runs only after mounted for the first time.
  useEffect(() => listLobbies(showList, () => setPage(<Error />)), []);

  return (
    <div>
      {page}
    </div>
  );
}
