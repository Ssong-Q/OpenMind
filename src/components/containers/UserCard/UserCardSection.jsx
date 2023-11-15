import { UserCard } from 'components';
import * as Styled from './StyleUserCard';

const UserCardSection = ({ data }) => {
  return (
    <Styled.Section>
      {data.map((data) => {
        const { id, name, imageSource, questionCount } = data;
        return (
          <UserCard
            key={id}
            id={id}
            src={imageSource}
            name={name}
            count={questionCount}
          />
        );
      })}
    </Styled.Section>
  );
};

export default UserCardSection;
