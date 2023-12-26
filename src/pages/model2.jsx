import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/models_navbar';

function Model2() {

  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState('40px'); // Initial height
  const maxHeight = 80; // Maximum height limit in pixels

  const handleInput = () => {
    const scrollHeight = textareaRef.current.scrollHeight;
    if (scrollHeight > maxHeight) {
      textareaRef.current.style.overflowY = 'auto'; // Enable scrolling
      setTextareaHeight(`${maxHeight}px`);
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight; // Scroll to bottom
    } else {
      textareaRef.current.style.overflowY = 'hidden'; // Hide scrollbar
      setTextareaHeight(`${scrollHeight}px`);
    }
  };

  useEffect(() => {
    // Adjust height on mount
    handleInput();
  }, []);

  return (
    <div className='model_main_div'>
      <Navbar />
      <div className='qna_area'>
        <div className='qna_heading'>
          <div className='qna_heading_text'>
            Model 2
          </div>
        </div>
        <div className='qna_chat_area'>
          Chat
        </div>
        <div class="input-container">
          <div className='input_box'>
            <div className='input_area'>
              <textarea
                ref={textareaRef}
                onInput={handleInput}
                style={{ height: textareaHeight }}
                placeholder="Enter your text here"
              />
            </div>
            <div className="button_area">
              <button type="submit">↑</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model2;
