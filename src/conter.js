import React from "react";

class Counter extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

 render(){
 
   return(
    <div>
      <h2 className={"text-warning bg-dark"}>Counter : </h2>
      <span className={"display-2"}> {this.state.counter} </span>
      <br />
      <br />
      <br />
      <button className={"btn btn-light bg-warning"} onClick={()=> this.setState({ counter: this.state.counter + 1 })}> Click to add one  </button>
    </div>

   )
 }

}
export default Counter;
