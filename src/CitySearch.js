import React, { Component } from 'react';

class CitySearch extends Component {
    //define class component state
    state = { 
        query:'',
        suggestions: []
}

    //event handler for <input> change event
    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
        query: value,
        suggestions,
    });
};

    //event handler for click
    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion
    });
  }
  render() {
    return (
      <div className="CitySearch">
        <p>City Search</p>
          <input type="text" className="city" value={this.state.query} onChange={this.handleInputChanged} />
          <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
        ))}
        <li key='all'>
        <b>See all cities</b>
         </li>
          </ul>
      </div>
    );
  }
}

export default CitySearch;