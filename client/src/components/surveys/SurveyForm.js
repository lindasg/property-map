import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, field => {
      return (
        <Field
          type="text"
          component={SurveyField}
          label={field.label}
          name={field.name}
          key={field.name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

//errors will be automaticly attached as props(.meta) of Field
function validate(formValues) {
  const errors = {};
  _.each(formFields, ({ name, label }) => {
    if (!formValues[name]) {
      errors[name] = `You must provide ${label}`;
    }
  });

  if (validateEmails(formValues.recipients)) {
    errors.recipients = validateEmails(formValues.recipients);
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
