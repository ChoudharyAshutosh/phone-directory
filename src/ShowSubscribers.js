import React, {Fragment,Component} from 'react';
import Header from './Header';
import './ShowSubscribers.css'
class ShowSubscribers extends Component {
 
  clickHandler(mess){
    alert(mess);
  }
   render(){
    console.log("Render invoked");
  return (
    <Fragment>
      <Header heading="Phone Directory"/>
      <div className="container-body">
      <button className="success">Add</button>
      <div className="container">
        <span className="container-item heading">Name</span>
        <span className="container-item heading">Phone</span>
        </div>
        {this.props.subScribersList.map(sub=>{
        return <div className="container">
          <span className="container-item name">{sub.name}</span>
          <span className="container-item phone">{sub.phone}</span>
          <button className="danger" onClick={this.clickHandler.bind(this, "Clicked")}>Delete</button>
        </div>
      }

      )

      }
    
     </div>
    </Fragment>
  );
}}

export default ShowSubscribers;