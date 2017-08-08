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

// API Key to access youtube
// const is ES6 component, const doesn't change ever, if you try to change it's value, it returns an error
const API_KEY = 'AIzaSyAmsx6VhvMNDGMBvqgVRIFsNOzbs4HQaLk';

// Create a new component that should produce some HTML
// Instead of declaring the function with the keyword 'function'
// use the fat arrow (=>), an ESX pattern

// this is a functional based component, that is used when we're just taking in some information and outputting
// some JSX inside the DOM (JSX are all these HTML elements in the middle of js that render in the browser)
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key:API_KEY, term: 'surfboards'}, (videos) => {
            // when using ES6, if the key and the property have the same name,
            // instead of updating the state like this.setState({ videos: videos }), we can do as below:
            this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// Take this component's HTML and show in page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
