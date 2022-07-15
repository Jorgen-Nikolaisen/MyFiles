import React, {Component} from 'react'
import styled from 'styled-components';
import { Footer } from '../../Components/Footer';
import CardList from '../../Components/Projects/MonsterRolodex/Card-list';
import { FilterHolder } from '../../Components/Projects/MonsterRolodex/MainRolodex';
import SearchBox from '../../Components/Projects/MonsterRolodex/SearchBox';
import { TopBar } from '../../Components/TopBar';


class Monster extends Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: "",
        }
    }

    componentDidMount(){
        console.log("Compnent did mount");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => this.setState(() => {
            return {monsters: users}
        }))
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return{searchField};
        })
    }

    render(){
        const  {monsters, searchField} = this.state;
        const {onSearchChange} = this
        const filteredNames = monsters.filter((element) => {
            return element.name.toLowerCase().includes(searchField);
         });
         
        return(
            <>
            <TopBar></TopBar>
             <FilterHolder>
               <SearchBox className="SearchBox" onChangeHandler={onSearchChange} placeholder="Search names"></SearchBox>
                <CardList monsters={filteredNames}></CardList>
            </FilterHolder>
            <Footer></Footer>
            </>
           
            
        )
    }
}

export const MonsterRolodex = Monster
