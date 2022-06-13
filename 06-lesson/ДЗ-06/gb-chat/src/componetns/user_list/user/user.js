import { useSelector } from 'react-redux';
import { ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import styles from './user.module.scss';
import styled from "@emotion/styled";

const ListItemStyles = styled(ListItem)`
  &.Mui-selected {
    background-color: #cab5aa;
  }
  &.Mui-selected:hover {
    background-color: #cab5aa;
  }
  &.MuiListItem-root:hover {
    background-color: #b89988;
  }
`;

export function User({ user, selected, deleteConversationByID }) {
  const message = useSelector((state) => {
    const messages = state.messages.messages[user] ?? [];
    return messages[messages.length - 1]
  });

  return (
    <ListItemStyles
      className={styles.item}
      button={true}
      selected={selected}
    >
      <ListItemIcon>
        <Button variant="contained" onClick={(event) => deleteConversationByID(user, event)}>Удалить</Button>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={user} />
        {message && (
          <ListItemText className={styles.text} primary={`${message.author}: ${message.text}`} />
        )}
      </div>
    </ListItemStyles>
  );
}
