import { Routes, Route } from "react-router-dom";
import { NavBar, Layout,Rooms } from "./components/index";
import Guest from './components/Guest/Guest'
import { useSelector } from "react-redux";
import AlertHandler from "./components/AlertHandler/AlertHandler";
const App = () => {
  const notificationMessage = useSelector(state=>state.notification.message)
  return <div >
    <Layout>
    <NavBar />
    {notificationMessage && <AlertHandler />}
    <Routes>
      <Route path='/rooms' element={<Rooms />}/>
      {/* //TODO: fix path */}
      <Route path='/guests' element={<Guest />} />
    </Routes>
   
    </Layout>
  </div>
}

export default App;