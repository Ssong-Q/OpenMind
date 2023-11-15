const findKeyByValue = (object, name) => {
  return Object.keys(object).find((key) => object[key] === name);
};

const existKeyById = (object, id) => {
  return Object.keys(object).includes(id);
};

export const deleteLocalStorage = (id) => {
  const userObject = { ...JSON.parse(localStorage.getItem('user')) };
  delete userObject[id];

  //결과가 빈배열이라면
  if (Object.keys(userObject).length === 0) {
    localStorage.removeItem('user');
  } else {
    localStorage.setItem('user', JSON.stringify(userObject));
  }
};

export const setLocalStorage = (id, name) => {
  // localStorage에 user property 값이 없을 때,
  if (!localStorage.getItem('user')) {
    localStorage.setItem('user', JSON.stringify({ [id]: name }));
  } else {
    // localStorage에 user property 값이 있을 때,
    localStorage.setItem(
      'user',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('user')),
        [id]: name,
      })
    );
  }
};

export const getLocalStorage = (name) => {
  const userInfo = localStorage.getItem('user');
  let userId;
  if (!userInfo) {
    // localStorage의 user property가 null 값일 때
    userId = '';
  } else {
    // localStorage의 user property에 값이 있을 때
    const parsedInfo = JSON.parse(userInfo);
    userId = findKeyByValue(parsedInfo, name)
      ? findKeyByValue(parsedInfo, name)
      : null;
  }
  return userId;
};

export const checkLocalStorage = () => {
  const userInfo = localStorage.getItem('user');
  let userId;
  if (!userInfo) {
    // localStorage의 user property가 null 값일 때
    userId = false;
  } else {
    // localStorage의 user property에 값이 있을 때
    userId = true;
  }
  return userId;
};

export const checkLocalStorageById = (id) => {
  const userInfo = localStorage.getItem('user');
  let userId;
  if (!userInfo) {
    // localStorage의 user property가 null 값일 때
    userId = false;
  } else {
    // localStorage의 user property에 값이 있을 때
    const parsedInfo = JSON.parse(userInfo);
    userId = existKeyById(parsedInfo, id);
  }
  return userId;
};
