const defaultState = [];

// API data

const APIURLPATH = 'https://api.spacexdata.com/v3/rockets';

// Actions

const FULLFILED = 'React-group-project/RocketApi/FULLFILED';

// Action creators

export const fullfiled = (obj) => ({
  type: FULLFILED,
  payload: { obj },
});

// Thunks

export const fetchRockets = () => async (dispatch) => fetch(APIURLPATH)
  .then((res) => res.json())
  .then((data) => {
    dispatch(fullfiled(data));
  });

// Reducer

const rocketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FULLFILED:
      return [...action.payload.obj];
    default:
      return state;
  }
};

export default rocketReducer;
