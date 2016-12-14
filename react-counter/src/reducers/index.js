export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const num = action.data || 1;
      return state + num;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
}
