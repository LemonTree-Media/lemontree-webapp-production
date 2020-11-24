import React, { useState, Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Icofont from "react-icofont";
import BlurImg from '../../../assets/BlurImg.jpeg';
// import axios from "axios";

import VideoEmbed90 from "../../VideoEmbed90";
import IdeaNetworkOverlay from "../IdeaNetworkOverlay";

class VideoContainer extends Component {
  constructor() {
    super();
    this.state = {
      // data: [],
      buttonClicked: false,
      setShow: false,
      show: false
    };
  }

  // componentDidMount() {
  //   axios.get("http://localhost:3000/ideas").then((res) => {
  //     console.log(res);
  //     this.setState({
  //       data: res.data
  //     });
  //   });
  // }

  render() {
    const { videoType, industry, videoStyle, budget, ideas } = this.props;
    console.log({ videoType, industry, videoStyle, budget });
    return (
      <div>
        {ideas?.map((data) => {
          return (
            <React.Fragment>
              <div className="m-2 mb-4 video-description">
                <div className="m-0 p-2 d-flex justify-content-between align-items-center">
                  <div>
                  
                    <b>
                      &nbsp;&nbsp;{data.creator.firstname} {data.creator.lastname.charAt(0)}.
                    </b>
                  </div>
                  <div>
                    <Button
                      className="btn-xs mr-3"
                      onClick={() =>
                        this.setState({ setShow: true, buttonClicked: true })
                      }
                    >
                      View Portfolio &nbsp;
                      <Icofont size="1" icon="play-alt-1" />
                    </Button>
                    <Button className="btn-xs" variant="success">
                      Add to Shortlist &nbsp;
                      <Icofont size="1" icon="ui-add" />
                    </Button>
                  </div>
                </div>
                <VideoEmbed90 videoLink={data.embedLink} />
                <div className="mx-3">
                  <div className="py-2 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold">
                      {data.client} | {data.title}
                    </h4>
                    <p className="gray">{data.budget}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}

        {this.state.buttonClicked &&
          ideas?.map((data) => {
            return (
              <React.Fragment>
                <Modal
                  className="creativeModal"
                  show={() => this.setState({ show: false })}
                  onHide={() => this.setState({ setShow: false })}
                >
                  <Modal.Body>
                    <IdeaNetworkOverlay
                      {...data}
                      creativePic={data.creator.photo}
                      bio={data.creator.bio}
                      firstname={data.creator.firstname}
                      lastname={data.creator.lastname}
                      rating={data.creator.rating}
                      jobs={data.creator.jobs}
                      role={data.creator.role}
                      industry={data.creator.industry}
                      expertise={data.creator.expertise}
                      language={data.creator.language}
                      location={data.creator.location}
                      client={data.creator.client}
                    />
                  </Modal.Body>

                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      size="sm"
                      show={() => this.setState({ show: false })}
                      onClick={() =>
                        this.setState({
                          setShow: false,
                          buttonClicked: false
                        })
                      }
                    >
                      Return
                    </Button>
                  </Modal.Footer>
                </Modal>
              </React.Fragment>
            );
          })}
      </div>
    );
  }
}

export default VideoContainer;