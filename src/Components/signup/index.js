import React, { Component } from 'react';
import { firebase } from '../../firebase';

import FormField from '../ui/formFields';
import { validate } from '../ui/misc';
import { log } from 'util';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formdata: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email',
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: '',
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
      },
    },
  };

  updateForm(element) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      console.log('Email is: ' + dataToSubmit.email);
      console.log('Password is: ' + dataToSubmit.password);
      firebase
        .auth()
        .createUserWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          this.props.history.push('/');
        })
        .catch(error => {
          console.log('Error is: ' + error);

          this.setState({
            formError: true,
          });
        });
    } else {
      this.setState({
        formError: true,
      });
    }
  }

  render() {
    return (
      <div className="">
        <div className="login_wrapper" style={{ margin: '100px' }}>
          <form autocomplete="off" onSubmit={event => this.submitForm(event)}>
            <h2>Register Here</h2>
            <hr />
            <FormField id={'email'} formdata={this.state.formdata.email} change={element => this.updateForm(element)} />

            <FormField
              id={'password'}
              formdata={this.state.formdata.password}
              change={element => this.updateForm(element)}
            />
            {this.state.formError ? <div className="error_label">Something is wrong, try again.</div> : null}
            <div class="login_or_register_container">
              <button className="form_button" onClick={event => this.submitForm(event)}>
                Sign Up
              </button>
              <Link to="/sign_in">Already have an account? Log in now ›</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
