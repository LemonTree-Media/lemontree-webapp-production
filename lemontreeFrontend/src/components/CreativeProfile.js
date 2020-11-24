import React, { Component } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from "axios";

import CreativeProfileVideo from './CreativeProfile/CreativeProfileVideo';
import CreativeProfileText from './CreativeProfile/CreativeProfileText';

import jacob from '../assets/jacob.jpeg';

class CreativeProfile extends Component {
    constructor(){
      super();
      this.state = {
        data: [],
        buttonClicked: false
      };
      this.getDetails = this.getDetails.bind(this);
    }


    componentDidMount(){
      axios.get("http://localhost:3000/creatives").then(res => {
          console.log(res);
          this.setState({
            data: res.data
          });
      });
    }

    getDetails() {
    if (!this.state.buttonClicked) {
      this.setState({
        buttonClicked: true
      });
    }
  }


    render(){
      return (
        <div className="mx-medium mb-5 mt-5 justify-content-center">
          <Row className="row">
            <Col className="col" xl={4} xs={12} md={12}>

              <div>{this.state.data.map(data => {
                    return (
                      <React.Fragment>
                         <CreativeProfileText 
                            name = {data.firstname + ' ' + data.lastname}
                            img = {data.photo}
                            bio = {data.bio}
                            rating = {data.rating}
                            jobs = {data.jobs}
                            industry = {data.industry}
                            expertise = {data.expertise}
                            role = {data.role}
                            language = {data.language}
                            location = {data.location}
                            client = {data.client}
                            />
                      </React.Fragment>
                    );
                  })} </div>

             
            </Col>

          
                <Col className="col" xl={8} xs={12} md={12}>
                    <CreativeProfileVideo         
                    />
                </Col>
          </Row>


          <div className="container-fluid" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-xs-12" style={{ textAlign: "center" }}>
            <button
              className="btn btn-primary"
              style={{ position: "absolute", marginLeft: "50%" }}
              onClick={this.getDetails}
            >
              Click
            </button>
            <div
              className="container-fluid"
              style={{
                position: "absolute",
                textAlign: "center",
                marginTop: "50px"
              }}
            >
              {this.state.buttonClicked
                ? this.state.data.map(data => {
                    return (
                      <React.Fragment>
                        <p>
                          {" "}
                          <b>name</b> : {data.location}
                        </p>
                        <p>
                          <b>age</b> : {data.experience}
                        </p>
                        <hr />
                      </React.Fragment>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
        </div>
      );
    }
    
}

export default CreativeProfile;
