import React from 'react';
import ImageGallery from 'react-image-gallery';
import VideoEmbed from './VideoEmbed';

class VideoGallery extends React.Component {
  constructor(props){
    super(props);
    this.state={

    };
  }

  render() {

    const videos = [       
    {         original: "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg",         
              thumbnail: "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg",       
            },       

    {         original: "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg",
              thumbnail: "https://www.quackit.com/pix/routeburn_track/routeburn_flats_t.jpg"
              }
            ]

    return (
      <div className="mt-5 ml-5">
        <ImageGallery items={videos} />
      </div>
    );
  }

}
export default VideoGallery;