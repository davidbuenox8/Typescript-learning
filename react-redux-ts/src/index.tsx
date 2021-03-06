import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './Components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

//interesting way of making a component
/* const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
}; 
ReactDOM.render(<App color="red" />, document.querySelector('#root'));
*/
