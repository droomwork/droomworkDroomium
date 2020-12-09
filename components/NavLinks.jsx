
import React from 'react';
import Link from 'next/link';
//import styles from '../styles/Header.module.css'

export const NavLinks=({navLinksClassName})=>(
    <div className={navLinksClassName}>
    <ul>
        <li>
            <Link href='/category'><a>Tech</a></Link>
            </li>
            <li>
            <Link href='/category'><a>Remote Job</a></Link>
            </li>

            <li>
            <Link href='/category'><a>Developer</a></Link>
            </li>
            <li>
            <Link href='/category'><a>Product Manager</a></Link>
        </li>
    </ul>
</div>
)

//styles.header_links