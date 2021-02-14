import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: ""
    };
  }
  render() {
    return (
      <div className="mainContainer">
        <div className="container">
          <input type="text" className="InputField" placeholder="Reverse Your Name" onChange={e=> this.setState({txt: e.target.value})}/>
          <h2 className="title">Reversed Name</h2>
          <div className="reversed">{this.state.txt.split("").reverse().join("").toLowerCase()}</div>
        </div>
      </div>
    );
  }
}

export default App;