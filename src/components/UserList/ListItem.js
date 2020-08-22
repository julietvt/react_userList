import React from 'react';

const ListItem = (props) => {
  const {
    isSelected,
    onSelect,
    user: { id, fName, lName },
  } = props;

  const styles = { bgColor: 'rgba(0,0,0,0.5)' };
  return (
    <li style={styles}>
      <span>
        UserID: "{id}"; UserFullName:"{fName} {lName}";
      </span>
      <button onClick={onSelect}>Select</button>
    </li>
  );
};

export default ListItem;
