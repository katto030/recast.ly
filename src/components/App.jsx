import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import searchYoutube from '/src/lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //on click -> runs ajax, this.state.test = ajax returns

  render(videos = exampleVideoData) {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={videos} /></div>
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
