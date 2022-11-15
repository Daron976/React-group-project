const defaultState = [];

// API data

const APIURLPATH = 'https://api.spacexdata.com/v3/missions';

// Actions

const FULLFILED = 'React-group-project/missions/FULLFILED';
const JOIN = 'React-group-project/missions/JOIN';
const LEAVE = 'React-group-project/missions/LEAVE';

// Action creators

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

export const join = (id) => ({
  type: JOIN,
  payload: { id },
});

export const leave = (id) => ({
  type: LEAVE,
  payload: { id },
});

// Thunks

export const fetchMissons = () => async (dispatch) => fetch(APIURLPATH)
  .then((res) => res.json())
  .then((data) => {
    dispatch(fullfiled(data));
  });

// Reducer

const missionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FULLFILED:
      return [...action.payload.obj];
    case JOIN:
      return state
        .map((mission) => {
          if (mission.mission_id !== action.payload.id) {
            return mission;
          }
          return {
            ...mission,
            reserved: true,
          };
        });
    case LEAVE:
      return state
        .map((mission) => {
          if (mission.mission_id !== action.payload.id) {
            return mission;
          }
          return {
            ...mission,
            reserved: false,
          };
        });
    default:
      return state;
  }
};

export default missionReducer;
