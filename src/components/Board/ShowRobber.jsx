import PropTypes from 'prop-types';

import { hexCenter, robberShape, robberSize } from './BoardUtils';
import { HexagonPosition } from '../../utils/ApiTypes';
import { colours } from '../../utils/Constants';


const showRobber = (draw, position) => {
  const { level, index } = position;
  const { x, y } = hexCenter[level][index];

  draw[robberShape](robberSize)
    .center(x, y)
    .fill(colours.robber);
};

export default showRobber;


showRobber.proptypes = {
  draw: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  position: HexagonPosition.isRequired,
};
