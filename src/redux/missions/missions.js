const defaultState = [];

// API data

const APIURLPATH = 'https://api.spacexdata.com/v3/missions';

// Actions

const FULLFILED = 'React-group-project/missions/FULLFILED';

// Action creators

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
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
      return [...state, ...action.payload.obj];
    default:
      return state;
  }
};

export default missionReducer;
