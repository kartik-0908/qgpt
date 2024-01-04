import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/models_navbar';
import Model_heading from '../components/model_heading';
import Chat from '../components/model_chat';
import ChatInput from '../components/model_input';

function Model1() {

  return (
    <div className='m1'>
      <div className='m1__nav'><Navbar /></div>
      <div className='m1__qna'>
        <div className='m1__qna__hd'>
          <Model_heading />
        </div>
        <div className='m1__qna__chat'><Chat/></div>
        <div className='m1__qna__input'><ChatInput/></div>
      </div>
    </div>
  )
}

export default Model1;
