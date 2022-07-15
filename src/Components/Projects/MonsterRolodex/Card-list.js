import { Card } from "@material-ui/core";
import { Component } from "react";
import styled from "styled-components";

const MonsterSection = styled.section`
  width: 85vw;
  height: 110vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`
const MonsterCard = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
    &:hover{
        transform: scale(1.05);
    }
`


class CardList extends Component{
    

    render(){
        const {monsters} = this.props
        return(
            <MonsterSection>
                {monsters.map((element) => {
                    const { name, email, id} = element
                    return(
                    <MonsterCard key={id}>
                        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </MonsterCard>
                    
                )})}
            </MonsterSection>
        )
    }
}

export default CardList