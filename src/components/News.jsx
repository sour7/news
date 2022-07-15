import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container= styled.div`
    /* border:2px solid red; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 18px;
    width:95%;
    margin:auto;

`
const Text= styled.p`
    text-align: left;
`


const News = () => {
    const [data, setData] = useState([])
    const [loading, setLoading]= useState(true)
    
    
    useEffect(() => {


        fetch(`https://gnews.io/api/v4/search?q=example&token=7a2abb6b2961cd47d4de6b704e8c3c05`)
            .then(res => res.json())
            .then(data => setData(data.articles))
            setLoading(false)
    }, [])
console.log(data)

if(loading){
    return(
        <h5>Loading...</h5>
    )
}else{
  return (
    <div>
        <Container>
       {
                data.map((e) =>
                    <div>
                        <img src={e.image} alt=""  style={{"width":"340px","height":"250px"}}/>
                        <h2 style={{"textAlign":"left"}}>{e.title}</h2>
                        <h5 style={{"textAlign":"left"}}>{e.description}</h5>
                      
                       <Text>{e.content}
                       <a href={e.url}>Read more...</a>
                       </Text>
                       
                    </div>
                )
            }
       </Container>
     
    </div>
  )}
}

export default News
