
import React, { Component } from 'react';
import './ContentRating.css';
import { render } from 'react-dom';

class ContentRating extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,

      // Event handler for the like button
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.likes + 1 + prevState.dislikes
        }));
      },

      // Event handler for the dislike button
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.likes + 1 + prevState.dislikes
        }));
      }
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
            <button className='like-button' onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislike}>
              Dislike ({this.state.dislikes})
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings} </p>
      </div> 
    );
  };
}


export default ContentRating;
