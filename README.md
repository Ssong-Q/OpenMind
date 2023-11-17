# 코드잇 프론트엔드 부트캠프 1기 기초 프로젝트

## 오픈마인드
질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼 서비스입니다.

<br/>

### 🗓 개발 기간 
2023.11.03 ~ 2023.11.17

<br />


### 👨‍👩‍👧‍👧 팀원소개
|                      민서영                     |                 송규경                |                 안지수                |                   안혜정                  |
|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|:-------------------------------------:|
| 👉[@seoyoung-min](https://github.com/seoyoung-min) | &nbsp;&nbsp;&nbsp;&nbsp;👉[@Ssong-Q](https://github.com/Ssong-Q) &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👉[@An-jisu](https://github.com/An-jisu)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;👉[@hyejungan](https://github.com/hyejungan) &nbsp;&nbsp;&nbsp;|

<br/>


### 🌐 Demo 
[오픈마인드](https://open-your-mind.netlify.app/)


<br/>


### 🖥️ 프론트엔드 개발 환경
---
⚒️ Tech stack
<div style="display:flex">
  <a>
    <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  </a>
  <a>
  	<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  </a>
  <a>
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  </a>
  <a>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
  </a>
  <a>
    <img src="https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=Styledcomponents&logoColor=white"/>
  </a>
  <a>
    <img src="https://img.shields.io/badge/React router-CA4245?style=for-the-badge&logo=Reactrouter&logoColor=white"/>
  </a>
  <a>
    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
</div>

<br/>

🤲 협업툴
- [<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">](https://james-song.notion.site/Part2-1-ffa195f9fc5a4e338818d836fb9cdcd3?pvs=4)
   <span style="background-color:#fff5dd">협업 규칙, git-flow전략, commit & pr & merge 규칙, 명명 컨벤션, 폴더 구조 등 공유</span>
- [<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">](https://discord.gg/5k55ehYn)
   <span style="background-color:#fff5dd">공지사항, 오늘할일, 논의내용 소통 목적으로 사용</span>
   
- [<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">](https://github.com/Ssong-Q/OpenMind.git)  
   + <span style="background-color:#f4f4bf">브랜치 전략</span>
      : <span style="background-color:#fff5dd">Main(배포용) 브랜치> Dev(Development; 개발) 브랜치> feature/(기능) 브랜치
      : 각 기능브랜치에서 push. develop branch로 Squash and Merge. origin에서 pull --rebase를 통해 직선적인 git graph를 고려함.
  
- <img src="https://img.shields.io/badge/eslint-F7B93E?style=flat-square&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-4B32C3?style=flat-square&logo=prettier&logoColor=white"/> <span style="background-color:#fff5dd">를 통해 일관된 코드를 작성하여 작업 환경 개선</span>

  <br/>
  
🚀 배포  
<br/>
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
    
 <br/>

🖼️ API, 디자인 코드잇 제공  
[@코드잇](https://codeit.notion.site/149a44fa9cdc4c49b876a3a5b4cc76ac)   👉 <span style="background-color:#ffdce0">본 페이지를 통해 제공하는 모든 자료는 저작권법에 의해 보호받는 ㈜코드잇의 자산이며, 무단 사용 및 도용, 복제 및 배포를 금합니다.</span>
  
<br/>

🫵 각 스택 결정이유
* vscode
   - VSCode는 Windows, macOS 등 다양한 운영 체제에서 모두 사용 가능하고, 다양한 테마, 확장 기능, 사용자 정의 설정 등을 통해 기능을 확장할 수 있으며 기존 팀원이 모두 사용하고 친숙한 IDE를 선택했습니다.
* css-in-js
   - 스타일 관련 스택으로 Css-in-Js로 결정했습니다. 각 요소의 클래스명을 신경쓰지 않고, 동적으로 속성을 넣어 스타일 변화를 줄 수 있기 때문입니다. 그 중에서도 팀원들이 가장 익숙한 방식의 Styled-Component를 선택했습니다.
* netlify
   - GitHub 등과의 연동을 통해 손쉽게 배포 파이프라인을 구축하고, CI/CD (Continuous Integration/Continuous Deployment)를 쉽게 설정할 수 있어 선택했습니다.

### 🏗️ 프로젝트 구조
---
public
* index.html

src
* assets
   - icons
* components
   - common
   - containers
   - App.js
* api
* pages
* hooks
* utils
* styles
   - GlobalStyle

<br/>

### 📝 프로젝트 소개
---
🔎 미리 보기  

![](https://velog.velcdn.com/images/hijung/post/7512cdfc-81fb-4a0a-bf1a-c40e92e78f61/image.gif)

#### ⭐️ 주요 기능
- 중복되지 않은 닉네임을 입력하면 질문 받을 계정을 생성할 수 있습니다.
  <span style="background-color:#fff5dd">중복된 닉네임 사용시 경고창이 뜹니다.</span>
- 게스트로 입장하여 질문을 작성할 수 있습니다.
- 질문 목록 페이지 개별피드에서 질문을 확인, 생성할 수 있습니다.
- 계정으로 입장하면 다른 유저가 남긴 질문에 대해 답변을 작성, 수정, 거절 할 수 있습니다.
- 👍 <span style="background-color:#b9e8fd">좋아요</span> 👎 <span style="background-color:#ffdce0">싫어요</span> 를 표현할 수 있습니다.
- header의 image를 클릭하여 계정을 관리할 수 있습니다.
- 메인페이지의 토글아이콘을 클릭하여 크리스마스테마로 변경할 수 있습니다.


#### 🤔 고민했던 부분
- 닉네임을 정규식을 통해 띄어쓰기 등을 사용하지 못하게 한정시키고, 첫 렌더링 시 등록된 닉네임과 비교해 중복 등록을 막았습니다.
   ```js
  let regex = /^[a-zA-Z0-9가-힣]*$/;
    if (!regex.test(name)) ,,,
  ,,,
  if (allList[0].includes(name)) {
          setIsError(true);
          setErrorMessage('이미 존재하는 닉네임 입니다. 다시 입력해주세요.')

- 닉네임 등록 후 localStorage에 저장하게 하고, 이 후 로그인 시 해당 localStorage에 닉네임이 없는 경우 로그인을 막았습니다.
  ```js
  if (getLocalStorage(name)) {
    const storedId = getLocalStorage(name);
    const { id: userId } = await getSubjects(storedId);
    navigate(`/post/${userId}/answer`);

- 질문대상이 되는 사용자들의 데이터에서 닉네임과 랜덤 사진으로 카드섹션을 만들고, 기본 8개로 limit을 설정하여 페이지네이션을 통해 데이터를 더 불러오도록 했습니다.
  이때, 페이지를 나눠주는 페이지 번호 양 끝단에 화살표를 두어 이동하게 했고, 클릭된 번호의 주변번호만 보이게 하기 위해 새로운 배열을 만들어서 나타나게 했습니다.
  ```js
  let arrLen = width > 767 ? 7 : 5;
  let pageArr = createPageArray(TOTAL_PAGE, pageNum, arrLen);
  ```js
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
🔎 ![](https://velog.velcdn.com/images/hijung/post/1361a3f9-882a-4696-a7eb-d9c55426b7ca/image.png)
- uselocation으로 pathname의 id값을 가져와 페이지 번호의 이동, 뒤로가기 시 페이지에 맞는 offset적용되어 리렌더링되도록 했습니다.
  ```js
  <Route path="list">
    <Route path=":page/:sorted" element={<QuestionListPage />} />
  </Route>
  ,,,
  const location = useLocation();
  const pageNum = location.pathname.split('/')[2];
  const [num, setNum] = useState(+pageNum);
  ,,,
  useEffect(() => {
    onClick(limit * (Number(pageNum) - 1)); //setOffset변화를 줌
    setNum(+pageNum);
  }, [location]);

- intersectionObserver를 이용해 infinit scroll(무한스크롤)을 구현했고, 브라우저 엔진이 useRef 요소의 가시성 변화를 감지하여 렌더링 하도록 했습니다.
  next값이 없을때, hasNaxt를 이용해 DOM 요소가 보이지 않도록 했습니다.
  ```js
    const [hasNext,setHasNext] = useState(true);
    ,,,
    const observer = new IntersectionObserver(observeCallback, {
    threshold: 0.4,
    });
    ,,,
    useEffect(() => {
    observer.observe(target.current);
    }, [location, offset]);
    ,,,
    {hasNext && <Styled.ObserveTargetBox ref={target} />}
    
- 질문 작성 후 모달창이 닫혔을때, 바로 폼에 적용되어 보여질 수 있도록 했습니다.
  ```js
    const formData = JSON.stringify({ content: `${value}` });
    const response = await postSubjectsQuestion(subjectId, formData);
    if (questionData.data.length) {
      setQuestionData((prevData) => {
      const { data: prevArray } = prevData;
      return { data: [response, ...prevArray] };


#### ✅ 요구사항
최신 chrome Browser 사용을 권장합니다
  
