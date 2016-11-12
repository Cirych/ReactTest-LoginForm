import React, { Component } from 'react';
import { Button } from 'react-bootstrap/lib';
import LoginModal from '../Components/LoginModal/LoginModal';
import LoginForm from '../Components/LoginForm/LoginForm';
import fetchData from './fetchData';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalShow: false,
      validationState: null,
      isLoading: false
    };

    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(data) {
    this.setState({ isLoading: true, validationState: null });
    fetchData(data)
      .then((data) => {
        this.setState({ isLoading: false });
        data.Auth === 'Logged'
          ? this.setState({ validationState: 'success' })
          : this.setState({ validationState: 'error' });
      });
  }

  render() {
    return (
      <div className="App">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ loginModalShow: true })}>
          Login
        </Button>

        <LoginModal
          title="Login"
          bsSize="small"
          show={this.state.loginModalShow}
          onHide={() => this.setState({ loginModalShow: false })}>
          <LoginForm
            onSubmit={(e) => this.submitLogin(e)}
            validationState={this.state.validationState}
            isLoading={this.state.isLoading}
            />
        </LoginModal>

      </div>
    );
  }
}

export default App;
