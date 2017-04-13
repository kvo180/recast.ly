class App extends React.Component {

  constructor(props) {
    console.log (window.exampleVideoData);
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList}/>
        </div>
      </div>
    );  
  }
}

App.propTypes = {
  searchYouTube: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
