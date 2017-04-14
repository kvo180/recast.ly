class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };

    this.handleVideoListEntryClick = this.handleVideoListEntryClick.bind(this);
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    }

    this.props.searchYouTube(options, videos => {
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      }) 
    });
  }

  handleVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div className="container">
        <Nav onSearchChangeHandler={this.getYouTubeVideos}/>
        <div className="col-xs-12">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-xs-12">
          <VideoList 
            videos={this.state.videoList} 
            onClickHandler={this.handleVideoListEntryClick}
          />
        </div>
      </div>
    );  
  }
}

// App.propTypes = {
//   searchYouTube: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
