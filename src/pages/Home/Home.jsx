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

  handleModalLink = (link) => {
    window.location.href = link;
  }

  handleAlertClose = (event) => {
    event.preventDefault();
    
    this.setState({ successMessage: "" });
  }

  handleViewLinkCase = (event, id) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (element.classList.contains('fa-caret-right')) {
      element.classList.remove('fa-caret-right');
      element.classList.add('fa-caret-down');
    } else {
      element.classList.remove('fa-caret-down');
      element.classList.add('fa-caret-right');
    }

    // document.getElementById(id).remove('fa-caret-right');
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
        <Header
          handleModalLink={this.handleModalLink}
        />

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
          handleViewLinkCase={this.handleViewLinkCase}
        />

      </div>
    );
  };
};

export default Home;
