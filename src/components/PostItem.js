import React, { Component } from 'react';

class PostHeader extends Component {
  render() {
    const { author, date } = this.props;

    return (
      <div className="post-header">
        <img className="avatar" src={author.avatar} />
        <div className="details">
          <span className="author-name">{author.name}</span>
          <span className="post-date">{date}</span>
        </div>
      </div>
    );
  }
}

class PostComment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="post-comment">
        <img src={comment.author.avatar} className="avatar" />
        <p>
          <span>{comment.author.name} </span>
          {comment.content}
        </p>
      </div>
    );
  }
}

class PostItem extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="post-item">
        <PostHeader author={post.author} date={post.date} />
        <p className="post-content">{post.content}</p>
        <hr />
        {post.comments.map(comment => (
          <PostComment key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }
}

export default PostItem;
