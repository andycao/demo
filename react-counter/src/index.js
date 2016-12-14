import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

import './style/css/index.css';

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <div>

  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    selfFunc={() => store.dispatch({ type: 'INCREMENT', data: 2 })}
  />
    <hr/>
    <button onClick={() => store.dispatch({type: 'INCREMENT'})}>trigger</button>
  </div>,
  rootEl
)

render()
//call back
store.subscribe(() => {
  render();
  console.log(store.getState());
})
