import PropTypes from 'prop-types';

import { hexCenter, robberShape, robberSize } from './BoardUtils';
import { HexagonPosition } from '../../utils/ApiTypes';


const showRobber = (draw, position) => {
  const { level, index } = position;
  const { x, y } = hexCenter[level][index];

  draw[robberShape](robberSize)
    .center(x, y)
    .fill('#000000');
};

export default showRobber;


showRobber.proptypes = {
  draw: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  position: HexagonPosition.isRequired,
};
