import * as Styled from './StyleFeedCard';
import { CompleteBadge, ButtonEdit } from 'components';
import { ReactComponent as More } from 'assets/icon/more.svg';
import { ThumbsDownButton, ThumbsUpButton, ProfileImage } from 'components';
import logo from '../../../assets/icon/edit.svg'; //추후 삭제-테스트용

function FeedCard() {
  return (
    <Styled.CardContainer>
      <Styled.Header>
        <CompleteBadge />
        <More />
      </Styled.Header>
      <Styled.Question>
        <Styled.QuestionTime>질문</Styled.QuestionTime>
        <Styled.QuestionContent>
          좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?
        </Styled.QuestionContent>
      </Styled.Question>
      <Styled.AnswerContainer>
        <ProfileImage src={logo} />
        <Styled.AnswerBox>
          <Styled.AnswerProfile>
            <Styled.AnswerName>아초는 고양이</Styled.AnswerName>
            <Styled.AnswerDate>2주전</Styled.AnswerDate>
          </Styled.AnswerProfile>
          <Styled.AnswerContent>
            그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
            찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를
            청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에
            피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은
            방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다.
            이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃
            보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가
            그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는
            봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.
          </Styled.AnswerContent>
        </Styled.AnswerBox>
      </Styled.AnswerContainer>
      <Styled.Footer>
        <Styled.FooterIcons>
          <Styled.FooterIconContainer>
            <ThumbsUpButton />
          </Styled.FooterIconContainer>
          <Styled.FooterIconContainer>
            <ThumbsDownButton />
          </Styled.FooterIconContainer>
        </Styled.FooterIcons>
        <ButtonEdit />
      </Styled.Footer>
    </Styled.CardContainer>
  );
}

export default FeedCard;
