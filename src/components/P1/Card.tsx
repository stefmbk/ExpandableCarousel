import styled from 'styled-components';
import { CardProps } from './CardsContainer';
type Props = { cardContent: CardProps; dispatch: Function };

const MyCard = styled.div<{ isExpanded: boolean; img: string }>`
  height: 70%;
  margin: 0 10px;
  background: black;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border: 1px solid white;
  border-radius: 28px;
  transition: flex 2s;
  cursor: pointer;
  flex: ${(props) => (props.isExpanded ? '1' : '0.05')};
  @media (max-width: 768px) {
    width: 70%;
    flex: ${(props) => (props.isExpanded ? '1' : '0.05')};
  }
`;

export default function Card({ cardContent, dispatch }: Props) {
  return (
    <MyCard
      isExpanded={cardContent.expanded}
      img={cardContent.img}
      onClick={() => dispatch({ type: 'EXPAND', payload: cardContent.id })}
    ></MyCard>
  );
}
