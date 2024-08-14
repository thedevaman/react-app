function Nav()
{
    const styleObj = {
        textDecoration: "none",
        color: "white",
        display: "block",
        padding: "8px",
         fontSize: 20
    }
    return(
        <nav style={{
            width: "100%" ,
            backgroundColor: "skyblue"
          }}>
            <ul style={{
              padding: 0,
              margin: 0,
              display: "flex",
              listStyle: "none",
              justifyContent: 'space-evenly'
            }}>
              <li>
                <a href="#" style={styleObj}>Home</a>
                </li>
              <li>
                <a href="" style={styleObj}>Images</a>
                </li>
              <li>
                <a href="" style={styleObj}>Videos</a>
                </li>
              <li>
                <a href="" style={styleObj}>Movies</a>
                </li>
              <li>
                <a href="" style={styleObj}>Contact Us</a>
                </li>
            </ul>
          </nav>
    )
}
export default Nav