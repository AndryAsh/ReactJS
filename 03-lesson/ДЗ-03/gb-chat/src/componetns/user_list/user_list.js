import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';

export function UserList({ userList }) {
    return (
        <>
            {
                userList.map((user) => (
                    <ListItemButton key={user.id}
                    >
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={user.name} />
                    </ListItemButton>
                ))
            }
        </>
    )
}

/* 
onClick={(event) => handleListItemClick(event, user.id)}
selected={selectedIndex === user.id}
*/