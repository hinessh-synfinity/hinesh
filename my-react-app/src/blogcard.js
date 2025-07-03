import React, { Component } from 'react';
import { Clogs } from './utils';
import classes from './blogCardmodule.css';

class BlogCard extends Component {
  state = {
    likecount: 0
  };

  onLikeBtnClick = () => {
    this.setState((prevState) => {
      return { likecount: prevState.likecount + 1 };
    });
  };

  render() {
    Clogs(this.props);

    const { title, description } = this.props;

    return (
      <div className={classes.divStyle}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          Like count: <span className={classes.likeCount}>{this.state.likecount}</span>
        </p>
        <button onClick={this.onLikeBtnClick}>Like</button>
      </div>
    );
  }
}

export default BlogCard;
