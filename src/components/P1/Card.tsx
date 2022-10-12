import styled from 'styled-components';
import { CardProps } from './CardsContainer';
type Props = { cardContent: CardProps; dispatch: Function };

const MyCard = styled.div<{ isExpanded: boolean; img: string }>`
  height: 70%;
  margin: 0 10px;
  width: ${(props) => (props.isExpanded ? '90%' : '5%')};
  background: black;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border: 1px solid white;
  border-radius: 28px;
  transition: width 1s;
  cursor: pointer;
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
