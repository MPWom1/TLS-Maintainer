import Navbar from './Components/Navbar';
import Table from './Components/Table';
import FormDialog from './Components/formPopUp';


function App() {
  return (
    <div className="App">
        <Navbar/> <FormDialog/>
      <div className='content'>
        <Table />
      </div>
    </div>
  );
}

export default App;


