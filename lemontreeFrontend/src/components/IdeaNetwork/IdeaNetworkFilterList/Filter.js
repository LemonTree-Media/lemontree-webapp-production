import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";



class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  componentDidMount(){
      axios.get("http://localhost:3000/ideas").then(res => {
          console.log(res);
          this.setState({
            data: res.data
          });
      });
    }



  render() {
    return (
    
      <div className="mb-3 mr-3 w-20 d-inline-block">
        <span className="mr-3 fixed-width-100">{this.props.name}:</span>
      
                <Select
                  value={this.state.options}
                  onChange={(options) => {
                    this.setState({ options });
                  }}
                  options={this.props.options}
                  isMulti
                  onChange={(options)=>{
                      this.setState({ options });
                      this.props.handleChange(options);
                    }
                  }
               />

      </div>
     
    );
  }
}


export default Filter;
