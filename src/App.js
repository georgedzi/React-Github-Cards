import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import CardList from 'CardList/CardList';
import Form from 'Form/Form';


class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   };
  // }

  state = {
    profiles: []
  }

  addNewProfile = (profileData) => {
    console.log(profileData);
    this.setState(prevState => (
      {
        profiles: [...prevState.profiles, profileData]
      }
    ))
  };

  render() {
    return <div>
      <div className="header"> {this.props.title} </div>
      <Form onSubmit={this.addNewProfile}/>
      <CardList profiles={this.state.profiles}/>
    </div>
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired
}

export default App;
