import React, { useEffect, useState } from "react";
import axios from 'axios';

const Fire = () => {
  const [Data, setData] = useState({
    name: '',
    inspiration: '',
    pioneers: [],
    notableUsers: [],
    strengths: [],
    weaknesses: [],
    techniques:[],
    advancedTechniques: [],
    description:''

  })
  useEffect(() => {
    axios.get('https://avatar-the-last-airbender-api.herokuapp.com/api/v1/bending/firebending')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('fire Data: ', res.data)
        let fireData = res.data;
        setData({ name: fireData.name, 
          pioneers: fireData.pioneers, 
          inspiration: fireData.inspiration, 
          notableUsers: fireData.notableUsers, 
          strengths: fireData.strengths, 
          weaknesses: fireData.weaknesses,
          techniques: fireData.techniques,
          advancedTechniques: fireData.advancedTechniques,
          description: fireData.description
         })
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (

    <div>
      <h1> Name: {Data.name}</h1>
      <h1> inspiration: {Data.inspiration}</h1>
      <h1> pioneers: {Data.pioneers}</h1>
      <h1> notableUsers: {Data.notableUsers}</h1>
      <h1> strengths: {Data.strengths}</h1>
      <h1> weaknesses: {Data.weaknesses}</h1>
      <h1> techniques: {Data.techniques}</h1>
      <h1> advancedTechniques: {Data.advancedTechniques}</h1>
      <h1> description: {Data.description}</h1>
      

    </div>
  );
};
  
export default Fire;