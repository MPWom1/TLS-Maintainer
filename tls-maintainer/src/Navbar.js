const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>TLS Management</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{                  //in-line styling to make "New Entry" box different than other ".navbar" a css
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Entry</a>
            </div>
        </nav>
    );
}
 
export default Navbar;