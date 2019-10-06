import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Hexagon from './hexagon';
import { boardStatus } from '../utils/api';


export default function Board(props) {
  const { id } = props;
  const [page, setPage] = useState(undefined);

  function toHexagon(hexagon) {
    const { position, resource, token } = hexagon;
    const { level, index } = position;

    return (
      <Hexagon
        level={level}
        index={index}
        resource={resource}
        token={token}
        key={`(${level},${index})`}
      />
    );
  }

  function setBoard(hs) {
    setPage(
      <div>
        {hs.map(toHexagon)}
      </div>,
    );
  }

  // Runs only after mounted for the first time.
  // Must use [] to mimic componentDidMount.
  // eslint-disable-next-line
  useEffect(() => boardStatus(id, setBoard, console.log), []);

  return (
    <div>
      { page }
    </div>
  );
}


Board.propTypes = {
  id: PropTypes.number.isRequired,
};
