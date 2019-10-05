import React, { useState, useEffect } from 'react';
import {
  Accordion,
} from 'react-bootstrap';

import Lobby from './lobby';
import { listLobbies } from '../utils/api';


export default function LobbyScreen() {
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
