import React, { Component } from 'react';
import ListItem from './ListItem';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          fName: 'firstname1',
          lName: 'lastname1',
        },
        {
          id: 2,
          fName: 'firstname2',
          lName: 'lastname2',
        },
        {
          id: 3,
          fName: 'firstname3',
          lName: 'lastname3',
        },
        {
          id: 4,
          fName: 'firstname4',
          lName: 'lastname4',
        },
        {
          id: 5,
          fName: 'firstname5',
          lName: 'lastname5',
        },
      ],
    };
  }
  userMap = (user) => {
    return <ListItem key={user.id} user={user} />;
  };

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.userMap)}</ul>;
  }
}
export default UserList;
