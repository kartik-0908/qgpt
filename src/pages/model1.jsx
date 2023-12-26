import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/models_navbar';

function Model1() {

  // const textareaRef = useRef(null);
  // const [textareaHeight, setTextareaHeight] = useState('40px'); // Initial height
  // const maxHeight = 150; // Maximum height limit in pixels

  // const handleInput = () => {
  //   const scrollHeight = textareaRef.current.scrollHeight;
  //   if (scrollHeight > maxHeight) {
  //     textareaRef.current.style.overflowY = 'auto'; // Enable scrolling
  //     setTextareaHeight(`${maxHeight}px`);
  //     textareaRef.current.scrollTop = textareaRef.current.scrollHeight; // Scroll to bottom
  //   } else {
  //     textareaRef.current.style.overflowY = 'hidden'; // Hide scrollbar
  //     setTextareaHeight(`${scrollHeight}px`);
  //   }
  // };

  // useEffect(() => {
  //   // Adjust height on mount
  //   handleInput();
  // }, []);

  return (
    <div className='main_div'>
      <Navbar />
        <div className='qna_area'>
            <div className='qna_heading'>
            <h2>WELCOME</h2>
            </div>
            <div className='qna_heading'>
                <h2>Choose any of the model you want to work with</h2>
            </div>
            <div className='qna_heading'>
                <h2>←--------------</h2>
            </div>
        </div>
    </div>
  )
}

export default Model1;
