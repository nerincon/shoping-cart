var initialState = {
  items: [
    {
      itemname: 'baseball bat',
      count: 0,
      price: 0
    },
    {
      itemname: 'soccer ball',
      count: 0,
      price: 0
    },
    {
      itemname: 'golf tee',
      count: 0,
      price: 0
    }
  ]
}

export function items (state, action) {
  if (state === undefined) {
    return initialState
  }

  var newState

  switch (action.type) {
    case 'ADD':
      // make a copy of state
      newState = {...state}
      newState.items = [...state.items]

      return newState

    case 'SUBTRACT':
      // make a copy of state
      newState = {...state}
      newState.items = [...state.items]

      // update the new state
      return newState

    default:
      return state
  }
}

export default items
