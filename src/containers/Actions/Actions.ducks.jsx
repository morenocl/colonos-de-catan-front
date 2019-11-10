// General actions.
const SET_ERROR = 'actions/SET_ERROR';
const SET_WAITING = 'actions/SET_WAITING';

// Running stage.
const SET_BUILDING = 'actions/SET_BUILDING';
const SET_BUYING = 'actions/SET_BUYING';
const SET_ROBBING = 'actions/SET_ROBBING';
const SET_BUILDING_CITY = 'actions/SET_BUILDING_CITY';
const SET_BUILDING_ROAD = 'actions/SET_BUILDING_ROAD';
const SET_BUILDING_SETTLEMENT = 'actions/SET_BUILDING_SETTLEMENT';

// Action payloads.
const SET_ROBBER_PAYLOAD = 'actions/SET_ROBBER_PAYLOAD';
const SET_VERTEX_PAYLOAD = 'actions/SET_VERTEX_PAYLOAD';
const SET_EDGE_PAYLOAD = 'actions/SET_VERTEX_EDGE';

export const dispatchError = () => ({
  type: SET_ERROR,
});

export const dispatchWaiting = () => ({
  type: SET_WAITING,
});

export const dispatchBuilding = () => ({
  type: SET_BUILDING,
});

export const dispatchBuying = () => ({
  type: SET_BUYING,
});

export const dispatchBuildingCity = () => ({
  type: SET_BUILDING_CITY,
});

export const dispatchBuildingRoad = () => ({
  type: SET_BUILDING_ROAD,
});

export const dispatchBuildingSettlement = () => ({
  type: SET_BUILDING_SETTLEMENT,
});

export const dispatchRobbing = () => ({
  type: SET_ROBBING,
});

export const dispatchRobberPayload = (position, username) => ({
  type: SET_ROBBER_PAYLOAD,
  payload: { position, username },
});

export const dispatchVertexPayload = (position) => ({
  type: SET_VERTEX_PAYLOAD,
  payload: position,
});

export const dispatchEdgePayload = (p0, p1) => ({
  type: SET_EDGE_PAYLOAD,
  payload: { p0, p1 },
});

const initialState = {
  stage: 'waiting',
  actionOnClick: null,
  robberPayload: {},
  vertexPayload: null,
  edgePayload: null,
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_BUYING:
      return { ...state, stage: 'running/buying' };

    case SET_BUILDING:
      return { ...state, stage: 'running/building' };

    case SET_BUILDING_CITY:
      return { ...state, stage: 'running/building/city', vertexPayload: null };

    case SET_BUILDING_ROAD:
      return { ...state, stage: 'running/building/road', edgePayload: null };

    case SET_BUILDING_SETTLEMENT:
      return { ...state, stage: 'running/building/settlement', vertexPayload: null };

    case SET_ERROR:
      return { ...state, stage: 'error' };

    case SET_EDGE_PAYLOAD:
      return { ...state, edgePayload: payload };

    case SET_ROBBER_PAYLOAD:
      return { ...state, robberPayload: payload };

    case SET_ROBBING:
      return { ...state, stage: 'running/robbing', robberPayload: {} };

    case SET_VERTEX_PAYLOAD:
      return { ...state, vertexPayload: payload };

    case SET_WAITING:
      return { ...state, stage: 'waiting' };

    default: return state;
  }
};

export default reducer;


/*
reducer.propTypes = {
  state: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf([
      SET_ERROR,
      SET_WAITING,
      SET_BUILDING,
      SET_BUYING,
      SET_ROBBING,
      SET_ROBBER_PAYLOAD,
    ]).isRequired,
    payload: PropTypes.func.isRequired,
  }).isRequired,
};
*/
