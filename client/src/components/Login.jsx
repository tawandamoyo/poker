import React,{useState, useContext} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  function handleLogin() {
    console.log("submitting details");

    axios.post('/login', {
      username: username,
      password: password
    } )
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleLogin}>
                <label htmlFor="">
                    username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
                </label>
                <label htmlFor="">
                    password:
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)}></input>
                </label>
                <button type="submit">Login</button>
            </form>
            <button>Close</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
