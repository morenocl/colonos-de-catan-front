import React from 'react';

/* eslint-disable import/no-named-as-default */
import ActionButton from './ActionButton';
import BankTrade from './BankTrade';
import Robbing from './Robbing';
import BuildingVertex from './BuildingVertex';
/* eslint-enable import/no-named-as-default */


const actionsContainers = {
  moveRobber: <ActionButton type="move_robber" />,
  buying: <BankTrade />,
  knightRobbing: <Robbing type="play_knight_card" />,
  robberRobbing: <Robbing type="move_robber" />,
  buildingCity: <BuildingVertex type="upgrade_city" />,
  buildingSettlement: <BuildingVertex type="build_settlement" />,
};

export default actionsContainers;
