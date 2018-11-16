export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: state.numberOfPresents + 1}
    default:
      return state;
  }  
}
