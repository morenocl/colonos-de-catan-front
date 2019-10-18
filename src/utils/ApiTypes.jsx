import PropTypes from 'prop-types';


/* Game */

export const HexagonType = PropTypes.shape({
  position: PropTypes.shape({
    level: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  resource: PropTypes.string.isRequired,
  token: PropTypes.number.isRequired,
}).isRequired;

export const ActionType = PropTypes.oneOfType([
  PropTypes.shape({
    type: PropTypes.string.isRequired,
    payload:
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          HexagonType,
          PropTypes.arrayOf(
            HexagonType,
          ),
        ]),
      ),
  }).isRequired,
  PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
]).isRequired;

export const BoardType = PropTypes.shape({
  hexagons: PropTypes.arrayOf(PropTypes.shape({
    level: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
  })).isRequired,
}).isRequired;

export const HandType = PropTypes.shape({
  resources: PropTypes.arrayOf(PropTypes.string).isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
}).isRequired;

export const InfoType = PropTypes.shape({
}).isRequired;

export const GameStateType = PropTypes.shape({
  actions: PropTypes.arrayOf(ActionType),
  board: BoardType,
  hand: HandType,
  info: InfoType,
  stage: PropTypes.string,
}).isRequired;


/* Rooms */

export const RoomType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  max_players: PropTypes.number.isRequired,
});

export const RoomsStateType = PropTypes.shape({
  stage: PropTypes.string.isRequired,
  refresh: PropTypes.func.isRequired,
  rooms: PropTypes.arrayOf(RoomType).isRequired,
});
