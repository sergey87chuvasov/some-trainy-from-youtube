import React from 'react';
import './Quiz.css';

function Quiz() {
  return (
    <div className='container'>
      <h1>Quiz APP</h1>
      <hr />
      <h2>1. What the most popular car brand in the world?</h2>
      <ul>
        <li>Ferrari</li>
        <li>Lada</li>
        <li>Kia</li>
        <li>BMW</li>
      </ul>
      <button>Next</button>
      <div className='index'>1 of 5 questions</div>
    </div>
  );
}

export default Quiz;
