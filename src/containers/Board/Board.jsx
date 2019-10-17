import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import drawBoard from '../../components/Board/Board';
import { HexagonType } from '../../utils/ApiTypes';


const mapStateToProps = (state) => ({
  hexagons: state.Game.board.hexagons,
});

export const Board = ({ hexagons }) => {
  // Draw after mounting.
  useEffect(() => { drawBoard(hexagons); });

  return <div id="board" />;
};

export default connect(mapStateToProps)(Board);


Board.propTypes = {
  hexagons: PropTypes.arrayOf(HexagonType).isRequired,
};
