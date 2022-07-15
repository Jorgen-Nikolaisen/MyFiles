import { Component } from "react";
import styled from "styled-components";
import "./SearchBox.css"

class SearchBox extends Component {
    render(){
        return(
            <>
                <input
            className={`SearchBox ${this.props.className}`}
            type="search" 
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler} />
            </>
            
        )
    }
}

export default SearchBox 