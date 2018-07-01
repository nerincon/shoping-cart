var initialState = {
    items: [
        {
            itemname: 'baseball bat',
            count: 0,
            price: 0,
            startprice: 15
        },
        {
            itemname: 'soccer ball',
            count: 0,
            price: 0,
            startprice: 25
        },
        {
            itemname: 'golf tee',
            count: 0,
            price: 0,
            startprice: 3
        }
    ]
}

function items(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            const items = state.items.map((item, i) => {
                if (action.payload === i) {
                    return {
                        ...item,
                        count: item.count += 1,
                        price: item.price += item.startprice
                    }
                }
                return item
            });

            return {...state, items};

        case 'SUBTRACT':
            if (state.items[action.payload].count > 0) {
                const itemsSubtract = state.items.map((item, i) => {
                    if (action.payload === i) {
                        return {
                            ...item,
                            count: item.count -= 1,
                            price: item.itemname === 'baseball bat' ? item.price -= 15 : item.itemname === 'soccer ball' ? item.price -= 25 : item.price -= 3
                        }
                    }
                    return item
                });
                return {...state, items: itemsSubtract}
            }
            return state

        default:
            return state
    }
}

export default items
