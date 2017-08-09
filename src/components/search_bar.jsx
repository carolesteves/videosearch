// All files should refer that they use react, so you'll have to import React from 'react'
// ", {Component}" is the same as writing "const Component = React.Component"
import React, {Component} from 'react';

// It creates a new class SearchBar and gives access to all the functionalities React.Component has. Without ES6,
// it is written class SearchBar extends React.Component. With ES6, it is as follows, with the detail
// of adding ", {Component}" at the import on the top.

// this is a class based component, that is used whenever we need a component that needs
// to be aware of state in some way
class SearchBar extends Component {
    // state is a plain JavaScript object that is used to record and react to user events. Each class
    // based component that is created has its own state object. When the component's state change, the
    // component re-renders, and also all of its children. Before using it, state must be initialized, as below:
    constructor(props) {
        // calls the parent method (whatever the hell this means)
        super(props);

        // term is the property that the user will type in the input
        // this way of setting state with = sign is done only in constructor
        this.state = { term: '' };
    }

    // all class based components must have a render method. Another way to do the arrow function below
    // {event => console.log(event.target.value)} is calling onChange={this.onChangeInput}
    // and create a method as follows:
    // onChangeInput(event) {
    //    console.log(event.target.value);
    // }
    render() {
        return (
            // the input below is a controlled component, because its value is set by state,
            // and not the other way around
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        // to change a state, use this.setState({ property: 'value' })
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

}

// In order to make the SearchBar component available for all the other files in the project, we have to export
// SearchBar as a default
export default SearchBar;
