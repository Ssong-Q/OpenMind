const findKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
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
