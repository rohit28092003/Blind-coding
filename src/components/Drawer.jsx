import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { RiPlayList2Line } from "react-icons/ri";
import Q1 from './Question1';
import { useNavigate } from 'react-router-dom';

export default function DrawerBasic() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <Button  variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
      <RiPlayList2Line size={25} marginTop={20} />
       Problem List
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {/* {['➤ Question 1', '➤ Question 2', '➤ Question 3', '➤ Question 4'].map((text) => (
              <ListItem key={text}>
                <ListItemButton >{text}</ListItemButton>
              </ListItem>
            ))} */}
            <ListItem>
              <ListItemButton  onClick={()=>navigate('/ques1')}>
              ➤ Question 1
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton  onClick={()=>navigate('/ques2')}>
              ➤ Question 2
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton  onClick={()=>navigate('/ques3')}>
              ➤ Question 3
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton  onClick={()=> navigate('/ques4')}>
              ➤ Question 4
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
    </>
    
  );
}