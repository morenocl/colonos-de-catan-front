import {
  boards, cards, cities, hexagons,
  resources, roads, robber, settlements, info,
} from './BoardData';
import { actions } from './ActionsData';
import { room, rooms } from './RoomData';
import { users } from './UsersData';


const data = {
  timeout: 500,
  waiting: {},
  totalWait: 5,
  cardsToBuy: 3,
  resourcesToBuy: 3,
  actions,
  boards,
  board: {
    cities, hexagons, roads, robber, settlements,
  },
  hand: {
    resources,
    cards,
  },
  info,
  rooms,
  room,
  users,
  getRooms: [
    "Oops! That page couldn't be found",
    'The server was unable to complete your request',
    'Sorry, something went wrong',
  ],
};

export default data;
