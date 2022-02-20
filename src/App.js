import './App.css';
import EntryPage from '../src/Components/EntryPage/EntryPage'
import AppLayout from './Components/Layout/AppLayout/AppLayout';
import Dashboard from "./Components/Pages/Dashboard/Dashboard"
import NewTicket from './Components/Pages/NewTicket/NewTicket';
import TicketListing from "./Components/Pages/TicketListing/TicketListing"

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
  );
}

export default App;
