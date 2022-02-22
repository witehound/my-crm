import './App.css';
import EntryPage from '../src/Components/EntryPage/EntryPage'
import NewTicket from './Components/Pages/NewTicket/NewTicket';
import TicketListing from "./Components/Pages/TicketListing/TicketListing"
import Tickets from './Components/Pages/Tickets/Tickets';
import Dashboard from "../src/Components/Pages/Dashboard/Dashboard"
import AppLayout from './Components/Layout/AppLayout/AppLayout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';




function App() {
  const isAuth = true
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path='/' element={<EntryPage/>}/>
      <Route path='/dashboard' element={<PrivateRoute isAuth={isAuth}><AppLayout><Dashboard/></AppLayout></PrivateRoute>}/>
       <Route path='/newticket' element={<PrivateRoute isAuth={isAuth}><AppLayout><NewTicket/></AppLayout></PrivateRoute>}/>
       <Route path='/ticketlisting' element={<PrivateRoute isAuth={isAuth}isAuth={isAuth}><AppLayout><TicketListing/></AppLayout></PrivateRoute>}/>
       <Route path='/tickets/:tid' element={<PrivateRoute isAuth={isAuth}><AppLayout><Tickets/></AppLayout></PrivateRoute>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
