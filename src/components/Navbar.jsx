import React from 'react'
import { navLinks, navIcons } from '../constants'
import dayjs from 'dayjs'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className='font-bold'>Olyad Mulugeta</p>

                <ul>{navLinks.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
            </div>
            <dev className='flex gap-2 flex-row' >
                <ul>{navIcons.map(({ id, img }) => <li key={id}><img src={img} alt="icon" /></li>)}</ul>
                <time > {dayjs().format('ddd MMM D h:mm A')} </time>
            </dev>
        </nav>
    )
}

export default Navbar