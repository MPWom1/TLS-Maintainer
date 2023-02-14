import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



//   const formSubmit = (event) => {
//     //event.preventDefault();
//     fetch("/database/postOne", {
//         method: "POST",
//         body: JSON.stringify({
            
//     }),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     });
//     handleClose();
//   };

  const [formInfo, setFormInfo] = useState({
    CN: "",
    Issued: "",
    Expires: ""
  });

  const handleChange = (event) => {
    setFormInfo((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
    }));
    };                                  
  

  const handleSubmit = (event) => {
    //event.preventDefault();
    fetch("/database/postOne", {
        method: "POST",
        body: JSON.stringify({
            formInfo
    }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    console.log(formInfo);

    setFormInfo({ CN: "", Issued: "", Expires: "" });
    handleClose();
};


  return (
    <div className='navbarButton'>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Entry
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Entry</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please insert a Common Name, its Date of Issue, and Date of Expiration.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
                type="text"
                name="CN"
                value={formInfo.CN}
                onChange={handleChange}

                label="Common Name (CN)"
                margin="dense"
                fullWidth
                variant="standard"
                required
            />
            <TextField
                type="date"
                name="Issued"
                value={formInfo.Issued}
                onChange={handleChange}

                label="Issued Date"
                margin="normal"
                variant="standard"
                required
                InputLabelProps={{ shrink: true }}              //Prevents label and date entered from overlapping
            />
            <TextField
                type="date"
                name="Expires"
                value={formInfo.Expires}
                onChange={handleChange}

                label="Expiration Date"
                margin="normal"
                variant="standard"
                required
                InputLabelProps={{ shrink: true }}              //Prevents label and date entered from overlapping
            />
        </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}