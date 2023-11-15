export default function createPageArray(total, pageNum, arrLen) {
  let pageArray = [];

  //1. arrLen>=TotalPage
  if (arrLen >= total) {
    for (let i = 1; i <= total; i++) {
      pageArray.push(i);
    }
    return pageArray;
  }

  //2. arrLen<TotalPage
  let SIDE = Math.floor(arrLen / 2);
  let firstNum = +pageNum - SIDE;
  let lastNum = +pageNum + SIDE;

  //배열의 시작 숫자 조정하기
  if (firstNum < 1) firstNum = 1;
  if (lastNum > total) firstNum = total - (arrLen - 1);

  //배열만들기
  for (let i = firstNum; i <= firstNum + (arrLen - 1); i++) {
    pageArray.push(i);
  }

  return pageArray;
}
