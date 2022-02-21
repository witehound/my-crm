import './App.css';
import EntryPage from '../src/Components/EntryPage/EntryPage'
import NewTicket from './Components/Pages/NewTicket/NewTicket';
import TicketListing from "./Components/Pages/TicketListing/TicketListing"
import Tickets from './Components/Pages/Tickets/Tickets';
import Dashboard from "../src/Components/Pages/Dashboard/Dashboard"
import AppLayout from './Components/Layout/AppLayout/AppLayout';




function App() {
  return (
    <div className="App">
     <AppLayout>
       {/* <Dashboard />*/}
       {/*<NewTicket />*/}
       <TicketListing />
     </AppLayout>
    </div>
  );
}

export default App;
