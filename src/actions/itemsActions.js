export function add (idx) {
  console.log(idx + ' idx was clicked')
  return { type: 'ADD', index: idx }
}

export function subtract () {
  return { type: 'SUBTRACT' }
}
