// lodash is a package that allows us to render functions every other period of time
import _ from 'lodash';
// before everything, you have to import react,
// which is assigned to the variable React.
// Is is a concept of React that only the most parent component of an application should fetch outside data.
// This concept is called Downards Dataflow
import React, { Component } from 'react';

// React by itself doesn't render html to dom.
// In order to do so, we have to use react-dom,
// which is assigned to the variable ReactDOM.
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

// It is in index.js that all the components will be renderer
// therefore they might be imported here. When importing files,
// you have to refer to the specific path it is located. It's not
// necessary with libraries inside the node_modules folder
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// API Key to access youtube
// const is ES6 component, const doesn't change ever, if you try to change it's value, it returns an error
const API_KEY = 'AIzaSyAmsx6VhvMNDGMBvqgVRIFsNOzbs4HQaLk';

// Create a new component that should produce some HTML
// Instead of declaring the function with the keyword 'function'
// use the fat arrow (=>), an ESX pattern

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('shiba');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // when using ES6, if the key and the property have the same name,
            // instead of updating the state like this.setState({ videos: videos }), we can do as below:
            // this.setState({ videos });
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        // sets a delay to search
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        // to pass data from the parent component (in this case, App) to a child component (VideoList),
        // just define a property in the JSX tag, passing prop videos={this.state.videos}
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's HTML and show in page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
