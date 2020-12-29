import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task-overview">
        <ul>
          {this.props.tasks.map((element) => {
            return <li key={element.id}>{element.value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
