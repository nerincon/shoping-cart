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

function items(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            // make a copy of state
            const items = state.items.map((item, i) => {
                if (action.payload === i) {
                    return {
                        ...item,
                        count: item.count += 1
                    }
                }
                return item
            });

            return {...state, items};

        case 'SUBTRACT':
            // make a copy of state
            if (state.items[action.payload].count > 0) {
                const itemsSubtract = state.items.map((item, i) => {
                    if (action.payload === i) {
                        return {
                            ...item,
                            count: item.count -= 1
                        }
                    }
                    return item
                });
                return {...state, items: itemsSubtract}
            }
            return state
        case 'TEST':
            return {...state, test: action.payload};

        default:
            return state
    }
}

export default items
