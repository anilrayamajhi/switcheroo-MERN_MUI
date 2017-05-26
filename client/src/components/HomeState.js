import React, { Component } from 'react';


var puke = (obj) => {
  return (
    <pre>{JSON.stringify(obj, null, ' ')}</pre>
  )
}

class HomeState extends Component {
  constructor(props){
    super(props);
    this.state ={};
  }

  render() {
    return(
      <div>
        {/* {puke(this.props)} */}
      </div>
    )
  }
}


export default HomeState;
