
import React, { useEffect, useState } from "react";
import axios from 'axios';



function Avatars() {
    const [Data, setData] = useState({
        name: '',
        photoUrl: '',
        affiliation: '',
        allies: [],
        enemies: [],
        position: '',
        predecessor: ''
    })
    useEffect(() => {
        axios.get('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar')
            .then(res => {
                console.log('Response from main API: ', res)
                console.log('avatarData : ', res.data[0])
                setData(res.data)

                // let randomCharData = res.data[0];
                // setData({ name: randomCharData.name, photoUrl: randomCharData.photoUrl, affiliation: randomCharData.affiliation, allies: randomCharData.allies,  enemies: randomCharData.enemies, position: randomCharData.position})
            })
            .catch(err => {
                console.log('not working');
                //console.log(err);
            })
    }, [])
    // console.log("Data");
    let index = 2;
    function addIndex() {
        if (index < Data.length-1) {
            index = index + 1;
        }
        else {
            index = 0;
        }
        console.log(index);
    }

    function subIndex() {
        if (index > 0) {
            index = index - 1;
        }
        else {
            index = Data.length-1;
        }
        console.log(index);
    }

    return (

        <div>
            <button onClick={subIndex}>Prev</button>

            <button onClick={addIndex}>Next</button>
            {/* <h1> Name: {Data[index].name}</h1>
            <h1> affiliation: {Data[index].affiliation}</h1>
            <h1> allies: {Data[index].allies}</h1>
            <h1> enemies: {Data[index].enemies}</h1>
            <h1> position: {Data[index].position}</h1>
            <h1> predecessor: {Data[index].predecessor}</h1>

            <img src={Data[index].photoUrl} alt={Data[index].name} /> */}

        </div>
    );
};

export default Avatars;