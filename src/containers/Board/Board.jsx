import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SVG from 'svg.js';

import { dispatchDraw } from './Board.ducks';
import {
  WIDTH, HEIGHT,
} from '../../components/Board/BoardUtils';
import showHexagons from '../../components/Board/ShowHexagons';
import showVertices from '../../components/Board/ShowVertices';
import showRobber from '../../components/Board/ShowRobber';
import {
  BuildingType, HexagonPosition, HexagonType,
} from '../../utils/ApiTypes';


const mapStateToProps = (state) => ({
  cities: state.Game.board.cities,
  hexagons: state.Game.board.hexagons,
  robber: state.Game.board.robber,
  settlements: state.Game.board.settlements,
});

const mapDispatchToProps = ({
  setDraw: dispatchDraw,
});

export const Board = (props) => {
  const {
    cities, hexagons, robber, settlements,
  } = props;
  const { setDraw } = props;
  // Set draw after mounting,
  // and show board.
  useEffect(() => {
    const draw = SVG('board').size(WIDTH, HEIGHT);
    setDraw(draw);
    showHexagons(draw, hexagons);
    settlements.forEach((x) => {
      const { colour, positions } = x;
      showVertices(draw, colour, positions, 'settlement');
    });
    cities.forEach((x) => {
      const { colour, positions } = x;
      showVertices(draw, colour, positions, 'city');
    });
    showRobber(draw, robber);
  });

  return (<div id="board" />);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);


Board.propTypes = {
  cities: PropTypes.arrayOf(BuildingType).isRequired,
  hexagons: PropTypes.arrayOf(HexagonType).isRequired,
  robber: HexagonPosition.isRequired,
  settlements: PropTypes.arrayOf(BuildingType).isRequired,
  setDraw: PropTypes.func.isRequired,
};
