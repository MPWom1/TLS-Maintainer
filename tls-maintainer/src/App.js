import Navbar from './Components/Navbar';
import Table from './Components/Table';
import FormDialog from './Components/formPopUp';
import BoxComponentTotal from './Components/MetricBoxes/metricBoxTotal';
import BoxComponentExpired from './Components/MetricBoxes/metricBoxExpired'
import BoxComponentTenDays from './Components/MetricBoxes/metricBoxTenDays';
import BoxComponentThirtyDays from './Components/MetricBoxes/metricBoxThirtyDays';
import BoxComponentNinetyDays from './Components/MetricBoxes/metricBoxNinetyDays';
import BoxComponentOneEightyDays from './Components/MetricBoxes/metricBoxOneEightyDays';
import Logo from './Components/logo';
import Grid from '@mui/material/Grid';


function App() {

  return (
    <div className="App">
      <Grid container rowSpacing={1}>
        <Logo/> <Navbar/> <FormDialog/>
      </Grid>
      <div className='content'>
        <Grid container rowSpacing={1}>
          <BoxComponentTotal /> <BoxComponentExpired /> <BoxComponentTenDays /> <BoxComponentThirtyDays /> <BoxComponentNinetyDays /> <BoxComponentOneEightyDays />
        </Grid>
        <Table />
      </div>
    </div>
  );
}

export default App;