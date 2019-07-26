import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import MainSection from '../../components/MainSection/MainSection';

import './Home.scss';

class Home extends Component {

  state = {
    emailError: '',
    nameError: '',
    messageError: '',
    email: '',
    message: '',
    name: '',
    successMessage: '',
  }

  handleAlertClose = (event) => {
    event.preventDefault();
    
    this.setState({ successMessage: "" });
  }

  handleOnChange = (event) => {
    event.preventDefault();

    const { name, email, message} = this.state;

    if (name !== "") this.setState({ nameError: "" });
    if (email !== "") this.setState({ emailError: "" });
    if (message !== "") this.setState({ messageError: "" });

    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmitMessage = (event) => {
    event.preventDefault();

    const errorMessage = "This field is required";

    const { 
      email, 
      name,
      message,
    } = this.state;

    if (name === "") this.setState({ nameError: errorMessage });
    if (email === "") this.setState({ emailError: errorMessage });
    if (message === "") this.setState({ messageError: errorMessage });

    if (name !== "" && email !== "" && message !== "") {
      this.setState({
        successMessage: "Message sent succesfully",
        nameError: "",
        emailError: "",
        messageError: "",
        name: "",
        email: "",
        message: "",
      })
    }
  }

  render = () => {
    const {
      email,
      name,
      message,
      emailError,
      nameError,
      messageError,
      successMessage,
    } = this.state;

    return (
      <div className="Home">

        {/* Header */}
        <Header />

        {/* Main Section */}
        <MainSection
          email={email}
          name={name}
          message={message}
          emailError={emailError}
          nameError={nameError}
          messageError={messageError}
          successMessage={successMessage}
          handleAlertClose={this.handleAlertClose}
          handleOnChange={this.handleOnChange}
          handleSubmitMessage={this.handleSubmitMessage}
        />

      </div>
    );
  };
};

export default Home;
