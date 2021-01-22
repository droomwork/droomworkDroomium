
import React from 'react';
import Link from 'next/link';
//import styles from '../styles/Header.module.css'

export const NavLinks=({navLinksClassName})=>(
    <div className={navLinksClassName}>
    <ul>
        <li>
            <Link href='/category/TechBiz'><a>TechBiz</a></Link>
            </li>
            <li>
            <Link href='category/how_to'><a>How To</a></Link>
            </li>

            <li>
            <Link href='category/stories'><a>Stories</a></Link>
            </li>
            <li>
            <Link href='/category'><a>Lifestyle</a></Link>
        </li>
    </ul>
</div>
)

//styles.header_links