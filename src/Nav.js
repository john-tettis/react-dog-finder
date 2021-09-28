import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'


const Nav=({dogs})=>{
    let {pathName} = useLocation()


return(
    <nav className='nav'>
        <ul className='nav-list'>
            <li key='dogs-link' className='nav-list-item'>
                <NavLink to='/dogs' isActive={()=>['/dogs'].includes(pathName)} >
                    Dogs
                </NavLink>
            </li>

            {dogs.map(d=>
            <li key={d.name}className='nav-list-item'>
                <NavLink to={`/dogs/${d.name}`}>
                    {d.name}
                </NavLink>
            </li>)}
        </ul>
    </nav>
)

}

export default Nav