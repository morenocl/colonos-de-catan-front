import PropTypes from 'prop-types';
import SVG from 'svg.js';

import {
  WIDTH, HEIGHT, hexPath, hexCenter, colour,
} from './BoardUtils';
import { HexagonType } from '../../utils/ApiTypes';


const drawBoard = (hexagons) => {
  const draw = SVG('board').size(WIDTH, HEIGHT);

  const drawHexagon = (hexagon) => {
    const { position, resource, token } = hexagon;
    const { level, index } = position;
    const { x, y } = hexCenter(level, index);

    draw.polygon(hexPath)
      .center(x, y)
      .rotate(90)
      .fill(colour(resource));

    draw.text(String(token))
      .center(x, y);
  };

  hexagons.forEach(drawHexagon);
};

export default drawBoard;


drawBoard.propTypes = {
  hexagons: PropTypes.arrayOf(
    HexagonType,
  ).isRequired,
};
