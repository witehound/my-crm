import './App.css';
import EntryPage from '../src/Components/EntryPage/EntryPage'
import NewTicket from './Components/Pages/NewTicket/NewTicket';
import TicketListing from "./Components/Pages/TicketListing/TicketListing"
<<<<<<< HEAD
<<<<<<< HEAD
import Tickets from './Components/Pages/Tickets/Tickets';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "../src/Components/Pages/Dashboard/Dashboard"
import AppLayout from './Components/Layout/AppLayout/AppLayout';



=======
>>>>>>> parent of 2706d24 (message page for client and operator)


function App() {
  return (
  <div className="App">
  <Router>
      <Routes>
          <Route exact path='/' element={<EntryPage/>}/>
      </Routes>
  </Router>
  </div>
=======

function App() {
  return (
    <div className="App">
     {/*<EntryPage />*/}
     <AppLayout>
       {/* <Dashboard />*/}
       {/*<NewTicket />*/}
       <TicketListing />
     </AppLayout>
    </div>
>>>>>>> parent of 2706d24 (message page for client and operator)
  );
}

export default App;
