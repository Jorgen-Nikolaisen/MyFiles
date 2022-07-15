import React, {Component} from 'react'
import styled from 'styled-components';

// 

class Monster extends Component{
    constructor(){
        super();
        this.state = {
            monsters: [],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => this.setState(() => {
            return {monsters: users}
        }))
    }

    render(){
        return(
            <> 
                {
                    this.state.monsters.map((element) => {
                        return(
                            <h1 key={element.id}>{element.name}</h1>
                            
                        )
                    })
                }

            </>
            
        )
    }
}

export const MonsterRolodex = Monster
