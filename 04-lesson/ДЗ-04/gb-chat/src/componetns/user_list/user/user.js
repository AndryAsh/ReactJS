// import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
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

export function User({ user, selected }) {
  /* return (
    <ListItemStyles
      className={styles.item}
      button={true}
      selected={selected}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={user.name} />
        <ListItemText className={styles.text} primary="author: last message" />
      </div>
    </ListItemStyles>
  ); */

  return (
    <ListItemStyles
      className={styles.item}
      button={true}
      selected={selected}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={user.name} />
        <ListItemText className={styles.text} primary="author: last message" />
      </div>
    </ListItemStyles>
  );

}
