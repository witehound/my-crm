import './App.css';
import EntryPage from '../src/Components/EntryPage/EntryPage'
import NewTicket from './Components/Pages/NewTicket/NewTicket';
import TicketListing from "./Components/Pages/TicketListing/TicketListing"
import Tickets from './Components/Pages/Tickets/Tickets';
import Dashboard from "../src/Components/Pages/Dashboard/Dashboard"
import AppLayout from './Components/Layout/AppLayout/AppLayout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"




function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path='/' element={<EntryPage/>}/>
       <Route path='/dashboard' element={<AppLayout><Dashboard/></AppLayout>}/>
       <Route path='/newticket' element={<AppLayout><NewTicket/></AppLayout>}/>
       <Route path='/ticketlisting' element={<AppLayout><TicketListing/></AppLayout>}/>
       <Route path='/tickets' element={<AppLayout><Tickets/></AppLayout>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
