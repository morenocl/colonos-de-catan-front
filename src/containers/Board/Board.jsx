import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SVG from 'svg.js';

import { dispatchDraw } from './Board.ducks';
import {
  WIDTH, HEIGHT,
} from '../../components/Board/BoardUtils';
import showHexagons from '../../components/Board/ShowHexagons';
import { HexagonType } from '../../utils/ApiTypes';


const mapStateToProps = (state) => ({
  hexagons: state.Game.board.hexagons,
});

const mapDispatchToProps = ({
  setDraw: dispatchDraw,
});

export const Board = ({ hexagons, setDraw }) => {
  // Set draw after mounting,
  // and show board.
  useEffect(() => {
    const draw = SVG('board').size(WIDTH, HEIGHT);
    setDraw(draw);
    showHexagons(draw, hexagons);
  });

  return (<div id="board" />);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);


Board.propTypes = {
  hexagons: PropTypes.arrayOf(HexagonType).isRequired,
  setDraw: PropTypes.func.isRequired,
};
