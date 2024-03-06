export function NavBarSection() {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">LOGO</a>
                </div>
                <div className="flex-none gap-5">
                    <ul className="menu menu-horizontal">
                        <li><a>Link</a></li>
                        <li>
                            <details>
                                <summary>
                                    Link Selector
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                    <button className="btn btn-primary text-white">Register</button>
                    <button className="btn btn-primary text-white">Login</button>
                </div>
            </div>
        </>
    )
}