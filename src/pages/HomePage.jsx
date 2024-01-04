import React from 'react';
import Navbar from '../components/models_navbar';

function HomePage() {
  return (
    <div className='main_div'>
      <div className='main_div__nav'><Navbar /></div>
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

export default HomePage;
