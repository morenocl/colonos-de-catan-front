import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SVG from 'svg.js';

import { dispatchDraw } from './Board.ducks';
import {
  WIDTH, HEIGHT,
} from '../../components/Board/BoardUtils';
import showHexagons from '../../components/Board/ShowHexagons';
import showRobber from '../../components/Board/ShowRobber';
import showEdges from '../../components/Board/ShowEdges';
import showVertices from '../../components/Board/ShowVertices';
import {
  BuildingType, HexagonPosition, HexagonType, RoadPosition,
} from '../../utils/ApiTypes';


const mapStateToProps = (state) => ({
  cities: state.Game.board.cities,
  hexagons: state.Game.board.hexagons,
  roads: state.Game.board.roads,
  robber: state.Game.board.robber,
  settlements: state.Game.board.settlements,
});

const mapDispatchToProps = ({
  setDraw: dispatchDraw,
});

export const Board = (props) => {
  const {
    cities, hexagons, roads, robber, settlements,
  } = props;
  const { setDraw } = props;

  useEffect(() => {
    const draw = SVG('board').size(WIDTH, HEIGHT);
    setDraw(draw);

    // Show board.
    showHexagons(draw, hexagons);

    // Show robber.
    showRobber(draw, robber);

    // Show roads for each player.
    roads.forEach((x) => {
      const { colour, positions } = x;
      showEdges(draw, colour, positions);
    });

    // Show settlements for each player.
    settlements.forEach((x) => {
      const { colour, positions } = x;
      showVertices(draw, colour, positions, 'settlement');
    });

    // Show cities for each player.
    cities.forEach((x) => {
      const { colour, positions } = x;
      showVertices(draw, colour, positions, 'city');
    });
  });

  return (<div id="board" />);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);


Board.propTypes = {
  cities: PropTypes.arrayOf(BuildingType).isRequired,
  hexagons: PropTypes.arrayOf(HexagonType).isRequired,
  roads: PropTypes.arrayOf(RoadPosition).isRequired,
  robber: HexagonPosition.isRequired,
  settlements: PropTypes.arrayOf(BuildingType).isRequired,
  setDraw: PropTypes.func.isRequired,
};
