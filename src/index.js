import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alert초기값 = true;

function reducer2(state = alert초기값, 액션) {
  if(액션.type === '닫힘') {
    state = false;
    return state;
  } else {
    return state;
  }
}


let 초기값 =  [
  { id : 0, name : '멋진신발', quan : 2 }, 
  { id : 1, name : '멋진신발2', quan : 5 }
];

function reducer(state = 초기값, 액션) {
                //default parameter 
  if(액션.type === '수량증가') {
    let 카피본 = [...초기값];
    카피본[0].quan++;
    return 카피본;
  } else if(액션.type === '수량감소'){
    let 카피본2 = [...초기값];
    카피본2[0].quan--;
    return 카피본2;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({reducer, reducer2}));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
