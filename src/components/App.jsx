import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import searchYouTube from '/src/lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPlaying: exampleVideoData[0],
      videoList: [],
      searchBar: ''
    };
  }

  onTitleClick(video) {
    this.setState({
      currPlaying: video,
    });
  }

  componentDidMount() {
    searchYouTube('Cute cat video', (data) => {
      this.setState({
        currPlaying: data[0],
        videoList: data.slice(1)
      }, () => console.log(data));
    });
  }


  onSearchClick() {
    searchYouTube(this.state.searchBar, (data) => {
      this.setState({
        currPlaying: data[0],
        videoList: data.slice(1)
      }, () => console.log(data));
    });
  }

  onSearchChange(event) {
    this.setState({
      searchBar: event.target.value
    });
  }

  //on click -> runs ajax, this.state.test = ajax returns

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search click={this.onSearchClick.bind(this)} change={this.onSearchChange.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currPlaying}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList click={this.onTitleClick.bind(this)} videos={this.state.videoList}/></div>
          </div>
        </div>
      </div>
    );
  }
}



// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><Search /></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><VideoPlayer /></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList /></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
