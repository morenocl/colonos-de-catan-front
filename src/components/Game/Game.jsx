import React from 'react';

/* eslint-disable import/no-named-as-default */
import Actions from '../../containers/Actions/Actions';
import Board from '../../containers/Board/Board';
import Hand from '../../containers/Hand';
import Info from '../../containers/Info/Info';
/* eslint-enable import/no-named-as-default */


const GameScreen = () => (
  <div>
    <div className="d-flex flex-row justify-content-center">
      <div className="p-5">
        <Board />
      </div>
      <div className="p-5">
        <Info />
      </div>
    </div>

    <div className="d-flex flex-row justify-content-center">
      <div className="p-5">
        <Hand />
      </div>
      <div className="p-5">
        <Actions />
      </div>
    </div>
  </div>
);

export default GameScreen;
