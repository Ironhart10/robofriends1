import React from 'react';
import './SearchBox.css';

const SearchBox = ({
    searchField,
    searchChange
}) => {

    return ( <
        div className = 'searchsection' >

        <
        input type = 'search'
        placeholder = 'Search Robots'
        onChange = {
            searchChange
        }
        /> < /
        div >
    );
}
export default SearchBox;
