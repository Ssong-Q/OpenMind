//n은 중간배열길이
//arr은 원본배열
//pageNum은페이지넘버

export default function getPageArray(n, arr, pagenum) {
  const sideLength = Math.floor(n / 2);
  const TOTAL_PAGE = arr[arr.length - 1];
  let midArr = [];

  //페이지 수가 부족할 때 같을 때
  if (n >= TOTAL_PAGE) {
    for (let i = 1; i <= TOTAL_PAGE; i++) {
      midArr.push(arr[i - 1]);
    }
    return midArr;
  }

  //그 외
  let fn = +pagenum - sideLength; //첫숫자
  let ln = +pagenum + sideLength; //끝숫자

  if (fn < 1) fn = 1;
  if (ln > TOTAL_PAGE) fn = arr[arr.length - n];

  for (let i = fn; i <= fn + (n - 1); i++) {
    midArr.push(arr[i - 1]);
  }

  return midArr;
}
