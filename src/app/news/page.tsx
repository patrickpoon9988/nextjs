import { configureStore } from '@reduxjs/toolkit'

export default async function News() {

    // put codes where above return method 
    // const data = await getData()

    const graphQLQuery = {
      query: '{hello}'
    }

    const graphQLQuery2 = {
      contractEvent : '{event_id}'
    }

    const graphQL = fetch("http://localhost:8080/graphql", 
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(graphQLQuery2)
      }
    )
    .then(res => res.json())
    .then(res => {
      console.log(res);
      console.log(JSON.stringify(graphQLQuery2));
    })

    return (
        <h4>Hello World!</h4>
    )
}