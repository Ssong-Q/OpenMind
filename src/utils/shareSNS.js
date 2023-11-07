//링크 복사
export const copyUrl = async (sharedUrl) => {
  await navigator.clipboard.writeText(sharedUrl);
};

//Facebook
export const shareFacebook = (sharedUrl) => {
  window.open(
    `http://www.facebook.com/sharer/sharer.php?u=${sharedUrl}`,
    '_blank'
  );
};

//KakaoTalk
const { Kakao } = window;

export const shareKakao = (name, src, sharedUrl) => {
  // 중복 initailization 방지, 괄호안에는 서비스 고유 키
  if (!Kakao.isInitialized()) Kakao.init('294992f2e77e06b1422d31ae80f76271');

  // 메시지 템플릿 - feed
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '무엇이든 물어봐!',
      description: `${name}에게 질문을 남겨주세요👇`,
      imageUrl: `${src}`,
      link: {
        mobileWebUrl: sharedUrl,
        webUrl: sharedUrl,
      },
    },
    buttons: [
      {
        title: '질문 남기러 가기',
        link: {
          mobileWebUrl: sharedUrl,
          webUrl: sharedUrl,
        },
      },
    ],
  });
};
