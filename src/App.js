import { Routes, Route } from "react-router-dom";
import { NavBar, Layout,Rooms } from "./components/index";
const App = () => {
  return <div>
    <Layout>
    <NavBar />
    <Routes>
      <Route path='/rooms' element={<Rooms />}/>
    </Routes>
   
    </Layout>
  </div>
}

export default App;