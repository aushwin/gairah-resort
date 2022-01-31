import { Routes, Route } from "react-router-dom";
import { NavBar, Layout,Rooms } from "./components/index";
import Guest from './components/Guest/Guest'
const App = () => {
  return <div >
    <Layout>
    <NavBar />
    <Routes>
      <Route path='/rooms' element={<Rooms />}/>
      {/* //TODO: fix path */}
      <Route path='/customers' element={<Guest />} />
    </Routes>
   
    </Layout>
  </div>
}

export default App;