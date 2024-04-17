import { configureStore } from '@reduxjs/toolkit'

export default async function News() {

    // put codes where above return method 
    // const data = await getData()

    const graphQLQuery = {
      query: '{hello}'
    }

    const graphQLQuery2 = {
      query: `{
        hello
        contractEvent {
          batch_name
          event_id
          image_name
          quarter_name
        }
      }`
    }

    const graphQLQuery3 = {
      query: `{
        hello
        contractImage(image_id: 999) {
          contract_name
          image_name
        }
      }`
    }


    const graphQL = fetch("http://localhost:8080/graphql", 
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(graphQLQuery3)
      }
    )
    .then(res => res.json())
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

    return (
        <h4>Hello World!</h4>
    )
}