import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import Main from './Main'

const Sidebar = () => {
    const [open, setOpen] = useState(true)


    return (

        <>
            <nav>
                <li><Link>MY Demo Company </Link><Link onClick={() => open ? setOpen(false) : setOpen(true)} style={{ position: "relative", top: "3px", left: "7px" }} className={open ? `fa-solid fa-bars` : "fa-solid fa-bars-staggered"}></Link></li>
                <ul>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </ul>
            </nav>

            <aside style={{marginLeft:open?"0px":"-250px" }}  >
                <Link to='/contents'>Dashboard</Link>
                <Link to='/pichart'>Pi Chart</Link>
                <Link to="/search-functionality">Search Functionality</Link>
                {/* <Link to="/object-update">Update Object</Link>
                <Link to="/memo-hook">Memo Hook</Link> */}
                <Link to="/qr-reader">QR-Reader</Link>
                <Link to="/country-city">Dropdown city</Link>
                <Link to="/check-delete">Check And Delete</Link>

            </aside>

            <main style={{ width: !open && "100%" }}>
                {/* {child} */}
                <Main/>
            </main>
            {/* <Main open={open} /> */}

        </>
    )
}

export default Sidebar