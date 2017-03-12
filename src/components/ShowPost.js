import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  handleDelete() {
    this.props.deletePost(this.props.params.id).then( () => {
        this.context.router.push('/');
    });
  }

  render() {

    if (!this.props.post) {
      return (
        <div>loading post</div>
      );
    }

    const { post } = this.props;

    return (
      <div>
      <Link to="/">Back to index</Link>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
        <button onClick={this.handleDelete}className="btn btn-danger">delete post</button>
      </div>
    );
  }

}

PostShow.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => (
  {post: state.posts.post}
);

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
