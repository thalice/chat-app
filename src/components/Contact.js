import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = { online: false };
  }

  changeState() {
    this.setState({ online: !this.state.online });
  }

  render() {
    return (
      <figure className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />

        <div className="status">
          <p>{this.props.name}</p>
          <span className="status-text" onClick={() => this.changeState()}>
            {this.state.online ? "online" : "offline"}
          </span>

          <span
            className={this.state.online ? "status-online" : "status-offline"}
            onClick={() => this.changeState()}
          ></span>
        </div>
      </figure>
    );
  }
}

export default Contact;
