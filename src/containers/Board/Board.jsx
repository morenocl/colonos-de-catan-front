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
  BuildingType, HexagonPosition, HexagonType, RoadType,
} from '../../utils/ApiTypes';


const mapStateToProps = (state) => ({
  cities: state.Game.board.cities,
  hexagons: state.Game.board.hexagons,
  roads: state.Game.board.roads,
  robber: state.Game.board.robber,
  settlements: state.Game.board.settlements,
  oldDraw: state.Board.draw,
});

const mapDispatchToProps = ({
  setDraw: dispatchDraw,
});

// Show cities, roads or settlements for each player.
const showConstructions = (display, draw, constructions, type) => {
  constructions.forEach(x => {
    display(draw, x.colour, x.positions, type)
  });
};

export const Board = (props) => {
  const {
    cities, hexagons, roads, robber, settlements,
  } = props;
  const { oldDraw, setDraw } = props;

  useEffect(() => {
    // We need to update SVG instance if it is null,
    // or if it lost reference to current node.
    const needToUpdate = !oldDraw || !oldDraw.clear;

    // Choose proper instance.
    const draw = needToUpdate ? SVG('board').size(WIDTH, HEIGHT) : oldDraw;

    // If an update is needed, store it.
    if (needToUpdate) setDraw(draw);

    // Clear current board.
    draw.clear();
    // Show hexagons and tokens.
    showHexagons(draw, hexagons);
    // Show robber.
    showRobber(draw, robber);
    // Show roads for each player.
    // Roads need to be drawn first, for aesthetic purposes.
    showConstructions(showEdges, draw, roads);
    // Show settlements for each player.
    showConstructions(showVertices, draw, settlements, 'settlement');
    // Show cities for each player.
    showConstructions(showVertices, draw, cities, 'city');
  });

  return (<div id="board" />);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);


Board.propTypes = {
  cities: PropTypes.arrayOf(BuildingType).isRequired,
  oldDraw: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  hexagons: PropTypes.arrayOf(HexagonType).isRequired,
  roads: PropTypes.arrayOf(RoadType).isRequired,
  robber: HexagonPosition.isRequired,
  settlements: PropTypes.arrayOf(BuildingType).isRequired,
  setDraw: PropTypes.func.isRequired,
};

Board.defaultProps = {
  oldDraw: null,
};
