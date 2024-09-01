
import React, { Component } from 'react';
import './ContentRating.css';
import { render } from 'react-dom';

class ContentRating extends React.Component
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      likes: 0,
      dislikes: 0
    };
  }

  render() {
    return (
      // The UI structure
      <div className='content-rating'>
          <p>
            Do you love me baby, or do you love my money
          </p>
          <div className='rating-buttons'>
            <button className='like-button'>
              Like ({this.state.likes})
            </button>
            <button className='dislike-button'>
              Dislike ({this.state.dislikes})
            </button>
          </div>
      </div> 
    );
  }

export default ContentRating;
