import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const image = (state={ imgData : "" }, action) => {
  switch(action.type) {
    case "ADD":
      return {
        imgData : action.imgData
      }
    case "REMOVE":
      return {
        imgData : ""
      };
    default: 
      return state;
  }
}
const imagePrimaryState = {
  textOverlay: null,
  fontSize: 30,
  fontFamily: "Georgia",
  color: "#000",
  alpha: 0.5,
  rotateDegree: -20,
  isPattern: true
}
const imageSettings = (state=imagePrimaryState, action) => {
  const newState = {...state};
  switch(action.type) {
    case "UPDATE_TEXT":
      newState.textOverlay = action.text;
      return newState;
    case "TOGGLE_PATTERN":
      newState.isPattern = !state.isPattern;
      return newState;
    case "UPDATE_ALPHA":
      newState.alpha = action.alpha;
      return newState;
    case "UPDATE_FONTSIZE":
      newState.fontSize = action.fontSize;
      return newState;
    case "UPDATE_FONTFAMILY":
      newState.fontFamily = action.fontFamily;
      return newState;
    case "UPDATE_COLOR":
      newState.color = action.color;
      return newState;
    case "UPDATE_ROTATEDEGREE":
      newState.rotateDegree = action.rotateDegree;
      return newState;
    case "RESET_SETTINGS":
      return imagePrimaryState;
    default :
      return state;
  }
}
const app = combineReducers({
  image,
  imageSettings
})
const store = createStore(app);
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  // console.log(store.getState())
}
render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
