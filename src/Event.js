import React, { Component } from "react";

class Event extends Component {
  state = {
    visible: true,
  };
  
  dateNewFormat = (eventDate) => {
    const newDate = `${new Date(eventDate)}`;
    return newDate;
  };

  showDetailsClick = () => {
    if (this.state.visible) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  };

  changeBtnText =()=>{
      if(this.state.visible=== true){
          return 'Show details';
      }else{
          return 'Hide details';
      }
  }

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h3 className="title">{event.summary}</h3>
        <p className="start-time">{this.dateNewFormat(event.start.dateTime)}</p>{" "}
        <p className="location">{event.location}</p>
        {!this.state.visible ? (
          <p className="description">{event.description}</p>
        ): null}
        <button
          className="btn-details"
          onClick={() => this.showDetailsClick(this.state)}
        >
          {this.changeBtnText()}
        </button>
      </div>
    );
  }
}
export default Event;
