import reducer  from  './Chat/chatSlice';
import * as actions  from  './Chat/chatSlice';
import App from './App';
import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import  '@testing-library/jest-dom';
import moment from "moment";

test('render test', () => {
  render(<App />);

  screen.debug();
});


it(`handle action `, ()=>{
  function reducer(addMessage) {
    return undefined;
  }

  expect(reducer(undefined, {

    payload: {
      timeStamp: moment().valueOf()

    }
  })).toEqual({  timeStamp: moment().valueOf()})
})