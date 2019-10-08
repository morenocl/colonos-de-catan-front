import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Lobby from './Lobby';
import { listLobbies } from '../utils/Api';


export default function LobbyList() {
  const [page, setPage] = useState(undefined);

  function setList(lobbies) {
    setPage(
      <Accordion>
        {lobbies.map((x) => <Lobby lobby={x} key={x.id} />)}
      </Accordion>,
    );
  }

  // Runs only after mounted for the first time.
  useEffect(() => listLobbies(setList, console.log), []);

  return (
    <div>
      {page}
    </div>
  );
}
