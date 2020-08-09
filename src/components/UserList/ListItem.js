import React from 'react';

const ListItem = (props) => {
  const {
    isSelected,
    user: { id, fName, lName },
  } = props;

  const styles = { bgColor: 'rgb(0,0,255)' };
  return (
    <li style={styles}>
      UserID: "{id}"; UserFullName:"{fName} {lName}";
    </li>
  );
};

export default ListItem;
