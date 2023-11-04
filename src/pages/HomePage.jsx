import { NavBar, UserCard } from 'components';
import profile from '../assets/profile-image.svg';

const HomePage = () => {
  return (
    <>
      <NavBar>질문하러 가기</NavBar>
      <UserCard src={profile} name="아초는고양이" count="9" />
    </>
  );
};

export default HomePage;
