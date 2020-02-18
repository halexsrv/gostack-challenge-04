import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rocketseat',
          avatar: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        },
        date: '04 Jun 2019',
        content: 'Post 01',
        comments: [
          {
            id: 1,
            author: {
              name: 'Rocketseat',
              avatar:
                'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
            },
            content:
              'Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01, Post 01 - Comment 01,',
          },
          {
            id: 2,
            author: {
              name: 'Rocketseat',
              avatar:
                'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
            },
            content: 'Post 01 - Comment 02',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Rocketseat',
          avatar: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        },
        date: '04 Jun 2019',
        content: 'Post 02',
        comments: [
          {
            id: 1,
            author: {
              name: 'Rocketseat',
              avatar:
                'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
            },
            content: 'Post 02 - Comment 01',
          },
          {
            id: 2,
            author: {
              name: 'Rocketseat',
              avatar:
                'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
            },
            content: 'Post 02 - Comment 02',
          },
          {
            id: 3,
            author: {
              name: 'Rocketseat',
              avatar:
                'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
            },
            content: 'Post 02 - Comment 03',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Rocketseat',
          avatar: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        },
        date: '04 Jun 2019',
        content: 'Post 03',
        comments: [
          {
            id: 1,
            author: {
              name: 'Rocketseat',
              avatar:
                'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
            },
            content: 'Post 03 - Comment 01',
          },
          {
            id: 2,
            author: {
              name: 'Rocketseat',
              avatar:
                'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
            },
            content: 'Post 03 - Comment 02',
          },
          {
            id: 3,
            author: {
              name: 'Rocketseat',
              avatar:
                'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
            },
            content: 'Post 03 - Comment 03',
          },
          {
            id: 4,
            author: {
              name: 'Rocketseat',
              avatar:
                'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
            },
            content: 'Post 03 - Comment 04',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
