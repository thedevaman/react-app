import Nav from "./Nav"
import Footer from "./Footer"
import Section from "./Section"
function App()
{
 
    return(
      
      <div>
        <h3>Date/Time:{JSON.stringify(new Date())}</h3>
        <h1>this is Root Component Provided by React</h1>
       
       <Nav />
       <Section />
       <Footer />
      </div>
    )
}

export default App