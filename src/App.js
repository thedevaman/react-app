function App()
{
 
    return(
      
      <div>
        <h3>Date/Time:{JSON.stringify(new Date())}</h3>
        <h1>this is Root Component Provided by React</h1>
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
              <a href="#" style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                padding: "8px",
                 fontSize: 20
              }}>Home</a>
              </li>
            <li>
              <a href="" style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                padding: "8px",
                 fontSize: 20
              }}>Images</a>
              </li>
            <li>
              <a href="" style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                padding: "8px",
                 fontSize: 20
              }}>Videos</a>
              </li>
            <li>
              <a href="" style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                padding: "8px",
                 fontSize: 20
              }}>Movies</a>
              </li>
            <li>
              <a href="" style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                padding: "8px",
                 fontSize: 20
              }}>Contact Us</a>
              </li>
          </ul>
        </nav>

        <section style={{
          width: '75%',
          padding: 34,
          backgroundColor: "#f5f5f5",
          margin: "48px auto"

        }}>
          <h4>this is section</h4>
        </section>

        <footer style={{
          backgroundColor: '#323232',
          textAlign: 'center',
          color: 'white',
          padding: 100
        }}>
          <h4>this is footer</h4>
        </footer>
      </div>
    )
}

export default App