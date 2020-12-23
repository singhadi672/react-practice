import { render } from '@testing-library/react';
import React from 'react';
import "./SearchBar.css";

const sortByOptions = {
    "Best Match":"best_match",
    "Highest Rated":"rating",
    "Most Reviewed":"review_count",
}

class SearchBar extends React.Component{
    
        renderSearchByOptions(){

            return Object.keys(sortByOptions).map(sortByOption=>{
                let sortByValues = sortByOptions[sortByOption]
                return <li key={sortByValues}>{sortByOption}</li>;
            });
        }

        render(){
            return(
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                {this.renderSearchByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search Businesses" />
              <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
              <a>Let's Go</a>
            </div>
          </div>
          )
        }

        
    }
    
    export default SearchBar;