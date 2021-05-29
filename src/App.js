import TransferList from "./components/TransfersList.tsx";
import TicketsList from "./components/TicketsList.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TransferList/>
      <TicketsList/>
    </div>
  );
}

export default App;
