import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostsIndex extends React.Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {

    const posts = this.props.posts.map( (post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <strong >{post.title}</strong>
            <span className="pull-xs-right">{post.categories}</span>
          </Link>
        </li>
      );
    });

    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new"  className="btn btn-primary">
            Add post
          </Link>
        </div>
        <h3>posts</h3>
        <ul className="list-group">
          {posts}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({posts}) => (
  { posts: posts.all }
);

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
