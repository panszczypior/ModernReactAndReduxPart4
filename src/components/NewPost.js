import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

const renderField = ({ input, type, label, compType,  meta: { error, touched, invalid } }) => {
  return (
  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
    <label htmlFor={input.name}>{label}</label>
    { compType === 'input' ?
        <input className="form-control" {...input} type={type} placeholder={label}/> :
      compType === 'textarea' ?
        <textarea className="form-control" {...input} type={type} placeholder={label}/> :
        <div>no compType</div>}
    {touched && error && <span>{error}</span>}
  </div>
  );
};

class NewPost extends React.Component {

  handleSubmit(props) {
    console.log(this.context)
    this.props.createPost(props)
    .then( () => {
      console.log('...',this);
      this.context.router.push('/')
    });
  }

  render() {

    const { handleSubmit, error } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
          <Field component={renderField} type="text" name="title" label="Title" compType="input" />
          <Field component={renderField} type="text" name="category" label="Category" compType="input"/>
          <Field component={renderField} type="text" name="content" label="Content" compType="textarea"/>
          <button className="btn btn-primary" type="submit">submit</button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
      </form>
    );
  }
}

const validate = ({ title, category, content }) => {
  const errors = {};

  if(!title) {
    errors.title = 'You must provide title'
  }
  if(!category) {
    errors.category = 'You must provide category'
  }
  if(!content){
    errors.content = 'You must provide content'
  }

  return errors;
}

NewPost.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { createPost })(reduxForm({
  form: 'NewPost',
  validate,
})(NewPost));
