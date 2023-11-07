const { Kakao, location } = window;

export default function handleShareKakaoClick(name, image) {
  if (!Kakao.isInitialized()) Kakao.init('294992f2e77e06b1422d31ae80f76271');

  const shareUrl = location.href;

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '무엇이든 물어봐!',
      description: `${name}에게 질문을 남겨주세요👇`,
      imageUrl: `${image}`,
      link: {
        mobileWebUrl: shareUrl,
        webUrl: shareUrl,
      },
    },
    buttons: [
      {
        title: '질문 남기러 가기',
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
    ],
  });
}
