export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return {count: state.count + 1}
    default:
      return state;
  }
}
