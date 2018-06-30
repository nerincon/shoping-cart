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

function items (state, action) {
  console.log('reducer start---------------')
  if (state === undefined) {
    return initialState
  }
  console.log('reducer again---------------')
  var newState

  switch (action.type) {
    case 'ADD':
      console.log('got add to reducer')
      // make a copy of state
      newState = {...state}
      newState.items = [...state.items]
      newState.items.count += 1

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
