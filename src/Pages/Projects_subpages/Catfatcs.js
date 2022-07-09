import styled from "styled-components";
import axios from "axios";
import React, {useState, useEffect} from 'react'
import { TopBar } from "../../Components/TopBar";
import { Footer } from "../../Components/Footer";

const FactsArticle = styled.article`
height: 70vh;
width: 80%;
margin: 10% 10% 10% 10%;
background-color: rgba(224,242,227, 0.3);
border-radius: 1rem;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
font-weight: bold;
`

export const CatFacts = () => {
    const [data, setData] = useState();
    const [apiError, setApiError] = useState();
    const getCatData = () => {
        axios
        .get("https://catfact.ninja/facts")
        .then((res) => {
            setData(res.data.data);
        })
        .catch(setApiError(true));
    }
    useEffect(() => {
        getCatData();
    }, []);
    if (data) {
        return(
            <>
                <TopBar/>
                    <FactsArticle>
                        <h2>CatFacts API</h2> <br></br>
                        {data.map((item, idx)=> {
                            return <p key={idx}>{item.fact}</p>
                        })}
                    </FactsArticle>
                <Footer/>
            </>
            
        )
    }
    else if (apiError){
        return(
            <>
                <TopBar/>
                    <article>
                        <p>Content failed to load, please try again</p>
                    </article>
                <Footer/>
            </>
            
        )
    }
}
