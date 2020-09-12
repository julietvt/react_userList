fetch('./users.json')
  .then((response) => response.json())
  .then(addUsersToList)
  .catch(console.error);

function addUsersToList(users) {
  const userListElem = document.getElementById('userList');
  users.forEach((user) => {
    userListElem.appendChild(createUsercardElem(user));
  });
}

function createUsercardElem(user) {
  const userListItem = document.createElement('li');
  userListItem.setAttribute('id', user.id);
  userListItem.classList.add('userListItem');
  userListItem.appendChild(createUserImageElem(user));
  userListItem.appendChild(createUserFullnameElem(user));
  return userListItem;
}

createUserImageElem(user){
    const userImg = document.createElement('img');
    userImg.setAttribute('src', user.imageSrc);
    userImg.setAttribute('alt', 'avatar');
    const userImgCont = document.createElement('div');
    userImgCont.classList.add('userPictureCont');
    userImgCont.appendChild(userImg);
    return userImgCont;


}

createUserFullnameElem({user,surname}){
    const userFullnameElem = document.createElement('h2');
    userFullnameElem.classList.add('userFullName');
    userFullnameElem.innerText = `${name} ${surname}`;
    return userFullnameElem;
}