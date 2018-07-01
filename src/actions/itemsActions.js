// import axios from 'axios'

export function add (idx) {
  return { type: 'ADD', payload: idx }
}

export function subtract (idx) {
  return { type: 'SUBTRACT', payload: idx }
}

// export const thunkFunc = () => dispatch => {
//     axios.get('https://api.ipify.org/?format=json').then(res => {
//       dispatch({type: 'TEST', payload: res.data})
//     })
// };

export const test = (payload) => {
  return {
    type: 'TEST',
      payload
  }
}
