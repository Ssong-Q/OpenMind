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
[오픈마인드](https://deploy-preview-63--stirring-starburst-4ddb41.netlify.app)


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
  
- <img src="https://img.shields.io/badge/eslint-F7B93E?style=flat-square&logo=eslint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-4B32C3?style=flat-square&logo=prettier&logoColor=white"/> <span style="background-color:#fff5dd">를 통해 일관된 코드를 작성하여 작업 환경 개선</span>

  <br/>
  
🚀 배포  
<br/>
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
    
 <br/>

🖼️ API, 디자인 코드잇 제공  
[@코드잇](https://codeit.notion.site/149a44fa9cdc4c49b876a3a5b4cc76ac)   👉 <span style="background-color:#ffdce0">본 페이지를 통해 제공하는 모든 자료는 저작권법에 의해 보호받는 ㈜코드잇의 자산이며, 무단 사용 및 도용, 복제 및 배포를 금합니다.</span>
  
<br/>

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


#### ✅ 요구사항
최신 chrome Browser 사용을 권장합니다
  
