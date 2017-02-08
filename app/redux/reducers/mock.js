const initialState = {
  mock: null,
};

export default function (state = {}, action) {
  return Object.assign({}, state, {
    mock: 'This is a reducers mock'
  });;
}
