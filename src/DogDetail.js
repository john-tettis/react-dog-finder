import React from 'react'
import {useParams, Redirect } from 'react-router-dom'


const DogDetail=({dogs})=>{
    console.log(dogs)
    let name = useParams().name

    let dog = dogs.find(d=>d.name===name)
    if(!dog){
        return <Redirect to='/dogs'/>
    }
    return(
        <div className='dog-detail'>
            <h1>Dog details</h1>
            <hr className='dog-detail-line'/>
            <div className='dog-detail-container'>
                <img src={dog.src}/>
                <ul className='dog-detail-list'>
                    <li key={'dog-name'}className='dog-detail-list-item'>
                    <strong>Name: </strong> {dog.name}
                    </li>
                    <li key={'dog-age'}className='dog-detail-list-item'>
                    <strong>Age: </strong> {dog.age}
                    </li>
                    <li key={'dog-facts'}className='dog-detail-list-item facts'>
                        <strong>Facts: </strong>
                        <ul>{dog.facts.map(f=><li key={f}>{f}</li>)}</ul>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}


export default DogDetail