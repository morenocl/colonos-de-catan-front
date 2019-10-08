import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import SVG from 'svg.js';

import {
  WIDTH, HEIGHT, hexPath, center, colour,
} from './boardUtils';
import { boardStatus } from '../utils/Api';


function drawBoard(hs) {
  const draw = SVG('board').size(WIDTH, HEIGHT);

  function drawHexagon(hexagon) {
    const { position, resource, token } = hexagon;
    const { level, index } = position;
    const { x, y } = center(level, index);

    draw.polygon(hexPath)
      .center(x, y)
      .rotate(90)
      .fill(colour(resource));

    draw.text(token)
      .center(x, y);
  }

  hs.forEach(drawHexagon);
}

export default function Board(props) {
  const { id } = props;
  const [error, setError] = useState(undefined);

  const showError = () => setError(
    <Alert variant="danger">
      <Alert.Heading>
        Error
      </Alert.Heading>
        There was an error requesting data from server. Check your internet connection.
    </Alert>,
  );

  // Runs only after mounted for the first time.
  // Must use [] to mimic componentDidMount.
  useEffect(() => boardStatus(id, drawBoard, showError), [id]);

  return (
    <div>
      {error}
      <div id="board" />
    </div>
  );
}


Board.propTypes = {
  id: PropTypes.number.isRequired,
};
