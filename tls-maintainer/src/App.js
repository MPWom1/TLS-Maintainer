import Navbar from './Components/Navbar';
import Table from './Components/Table';
import FormDialog from './Components/formPopUp';
import BoxComponent from './Components/metricBox';

function App() {
  return (
    <div className="App">
        <Navbar/> <FormDialog/>
      <div className='content'>
        <BoxComponent />
        <Table />
      </div>
    </div>
  );
}

export default App;