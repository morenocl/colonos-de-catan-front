import PropTypes from 'prop-types';

import {
  hexPath, hexCenter, colour,
} from './BoardUtils';
import { HexagonType } from '../../utils/ApiTypes';


const showHexagons = (draw, hexagons) => {
  const showHexagon = (hexagon) => {
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

  hexagons.forEach(showHexagon);
};

export default showHexagons;


showHexagons.propTypes = {
  draw: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
  hexagons: PropTypes.arrayOf(
    HexagonType,
  ).isRequired,
};
