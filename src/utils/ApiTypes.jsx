import PropTypes from 'prop-types';


/* Game */

export const HexagonPosition = PropTypes.shape({
  level: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
});

export const BuildingPosition = HexagonPosition;

export const RoadPosition = PropTypes.arrayOf(
  BuildingPosition,
);

export const HexagonType = PropTypes.shape({
  position: HexagonPosition.isRequired,
  resource: PropTypes.string.isRequired,
  token: PropTypes.number.isRequired,
});

export const ActionsType = PropTypes.arrayOf(
  PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(
          PropTypes.number,
        ),
      ]),
    ),
  }),
);

export const BuildingType = PropTypes.shape({
  colour: PropTypes.string.isRequired,
  positions: PropTypes.arrayOf(HexagonPosition).isRequired,
});

export const BoardType = PropTypes.shape({
  cities: PropTypes.arrayOf(BuildingType).isRequired,
  hexagons: PropTypes.arrayOf(PropTypes.shape({
    level: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
  })).isRequired,
  robber: HexagonPosition.isRequired,
  settlements: PropTypes.arrayOf(BuildingType).isRequired,
});

export const HandType = PropTypes.shape({
  resources: PropTypes.arrayOf(PropTypes.string).isRequired,
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const InfoType = PropTypes.shape({
});

export const GameStateType = PropTypes.shape({
  actions: ActionsType,
  board: BoardType,
  hand: HandType,
  info: InfoType,
  stage: PropTypes.string,
});


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
