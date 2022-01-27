import { Routes, Route } from "react-router-dom";
import { NavBar, Layout,Rooms } from "./components/index";
import Customers from './components/Customers/Customers'
const App = () => {
  return <div >
    <Layout>
    <NavBar />
    <Routes>
      <Route path='/rooms' element={<Rooms />}/>
      {/* //TODO: fix path */}
      <Route path='/customers' element={<Customers />} />
    </Routes>
   
    </Layout>
  </div>
}

export default App;