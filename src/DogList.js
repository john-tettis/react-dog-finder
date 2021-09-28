import React from 'react';
import {Link} from 'react-router-dom'


const DogList=({dogs})=>{


    return(
        <div className='dog-list'>
            {dogs.map(dog=>
                <div className='dog-list-item'>
                    <img className='dog-list-item-image' src={dog.src}></img>
                    <div className='dog-list-item-words'>
                        <h3>{dog.name}</h3>
                        <Link to={`/dogs/${dog.name}`}>See this pup!</Link>
                    </div>
                </div>)}
        </div>
    )
}

export default DogList;