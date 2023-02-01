const Navbar = () => {
    return (
        <nav className="navbar">

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>  {/*google font Api*/}
        <i class="material-icons">cloud</i>                                                      {/*Cloud logo next to title*/}

            <h1>TLS Management</h1>                                                              {/*Title of page*/}

            <div className="links">
                <a href="/create" style={{                                                      //in-line styling to make "New Entry" box different than other ".navbar" a css
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Entry</a>
            </div>
        </nav>
    );
}
 
export default Navbar;