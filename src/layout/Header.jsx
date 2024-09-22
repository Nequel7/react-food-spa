import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
            <nav className='deep-purple darken-3'>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Nequel Food</Link>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {/*<ul id="nav-mobile" className="right hide-on-med-and-down">*/}
                    {/*    <li>*/}
                    {/*        <Link to="#" target="_blank" rel="noreferrer">Repo</Link>*/}
                    {/*    </li>*/}

                    {/*</ul>*/}
                </div>
            </nav>
        </>
    );
}

export {Header}