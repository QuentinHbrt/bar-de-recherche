import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        
    }
      
    handleChange(e) {
        console.log(e.target);
        console.log(e.target.value);
        this.props.handleMoviesChange(e.target.value.toLowerCase());

        this.setState({ search: e.target.value });
    }
    render(){
        const value = this.props.value;
        return (
        <div>
            <label htmlFor="search">Titre :</label>
            <input id="search" value={value} onChange={this.handleChange}></input>
            <p>Il y a x films</p>
        </div>);
    }
}

export default SearchBar;