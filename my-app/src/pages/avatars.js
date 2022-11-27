import React, { useEffect, useState } from "react";
import axios from 'axios';


function Avatars() {


    const [Data, setData] = useState({
        name: '',
        photoUrl: '',
        affiliation: '',
        allies: [],
        enemies: [],
        position: ''
    })
    useEffect(() => {
        axios.get('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar')
            .then(res => {
                console.log('Response from main API: ', res)
                console.log('avatar Data: ', res.data[0])
                res.data.forEach(element=>{
                    console.log(element);
                    // let randomCharData = element;

                    // setData({ name: randomCharData.name, photoUrl: randomCharData.photoUrl, affiliation: randomCharData.affiliation, allies: randomCharData.allies, enemies: randomCharData.enemies, position: randomCharData.position })
                    setData(res.data);
                }

                )
                // ata({ name: randomCharData.name, photoUrl: randomCharData.photoUrl, affiliation: randomCharData.affiliation, allies: randomCharData.allies, enemies: randomCharData.enemies, position: randomCharData.position })
            })
            .catch(err => {
                Data = [{name: '',
                photoUrl: '',
                affiliation: '',
                allies: [],
                enemies: [],
                position: ''}];

                console.log("hi");

                console.log(err);
            })
    }, [])
    let index = 0;
    let curr = Data[0];

    console.log("curr");

     console.log(curr);
    function addIndex() {
        if (index < Data.length - 1) {
            index = index + 1;
        }
        else {
            index = 0;
        }
        console.log(index);
        curr = Data[index];
        console.log(curr);
    }

    function subIndex() {
        if (index > 0) {
            index = index - 1;
        }
        else {
            index = Data.length - 1;
        }
        console.log(index);
        curr = Data[index];
        console.log(curr);
    }

   return (

        <div>
            <button onClick={subIndex}>Prev</button>

            <button onClick={addIndex}>Next</button>
            {/* <h1> Name: {Data[0].name}</h1>
            <h1> affiliation: {Data[0].affiliation}</h1>
            <h1> allies: {Data[0].allies}</h1>
            <h1> enemies: {Data[0].enemies}</h1>
            <h1> position: {Data[0].position}</h1>

            <img src={Data[0].photoUrl} alt={Data[0].name} /> */}

        </div>
    );

};

export default Avatars;