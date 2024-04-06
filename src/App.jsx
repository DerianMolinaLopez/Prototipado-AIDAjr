import Header from "./components/Header"
import Main from "./components/Main"
import NavegacionDesplegable from "./components/NavegacionDesplegable"
import MenuDesplegable from "./components/MenuDesplegable"
import { useState } from "react"
function App() {
//?FUENTE DE ROBOTS Bauhaus 95
const [isVisible,setVisible] = useState(false)
  return (
    <div className="w-11/12">
      {/*<Header />*/}
      <NavegacionDesplegable isVisible={isVisible}
                             setVisible={setVisible}/>
      {isVisible && <MenuDesplegable/>}
      <Main/>
      
    </div>
  )
}

export default App
