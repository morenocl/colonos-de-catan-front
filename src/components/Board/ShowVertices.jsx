import PropTypes from 'prop-types';

import { buildingShape, buildingSize, vertexCenter } from './BoardUtils';


const showVertices = (draw, colour, ps, type, onClickMaker = () => null) => {
  const drawVertex = ({ level, index }) => {
    const { x, y } = vertexCenter[level][index];

    draw[buildingShape[type]](...buildingSize[type])
      .center(x, y)
      .fill(colour)
      .click(onClickMaker({ level, index }));
  };

  ps.forEach(drawVertex);
};

export default showVertices;


showVertices.proptypes = {
  draw: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  colour: PropTypes.string.isRequired,
  ps: PropTypes.arrayOf().isRequired,
  onClickMaker: PropTypes.func,
  type: PropTypes.oneOf([
    'city',
    'settlement',
  ]).isRequired,
};
