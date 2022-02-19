import './App.css';
import EntryPage from '../src/Components/EntryPage/EntryPage'
import AppLayout from './Components/Layout/AppLayout/AppLayout';
import Dashboard from "./Components/Pages/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
     {/*<EntryPage />*/}
     <AppLayout>
       <Dashboard />
     </AppLayout>
    </div>
  );
}

export default App;
