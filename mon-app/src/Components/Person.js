import React from 'react';

class Person extends React.Component {
 state = {
   fullName: "Achouri Ichrak",
   bio: "learning the web developement",
   photo: "./reading.jpg",
   job : "Full Stack JS student",
   show: true,
 };
  render() {
    return (
      <div className='Person'>
        <h1> {this.state.fullName}</h1>
        <h2>{this.state.job}</h2>
        <p>{this.state.bio}</p>
        <img 
          src={this.state.photo}
          alt='reading'
          style={{ width: 400, height: 500, borderRadius: "25%" }}/>
      
      </div>
    )
  }
}

export default Person;