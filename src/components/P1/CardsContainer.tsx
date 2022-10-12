import { useReducer } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { myCards } from './cardConstants';
type Props = {};

export type CardProps = {
  id: number;
  name: string;
  img: string;
  expanded: boolean;
};

type CardAction = {
  type: 'EXPAND';
  payload: number;
};
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  height: 100vh;
  margin: 0 50px;
`;

const cardsReducer = (state: CardProps[], action: CardAction) => {
  switch (action.type) {
    case 'EXPAND':
      return state.map((card) => {
        if (card.id === action.payload) {
          return { ...card, expanded: !card.expanded };
        } else {
          return { ...card, expanded: false };
        }
      });
    default:
      return state;
  }
};

export default function CardsContainer({}: Props) {
  const [cardsContent, dispatch] = useReducer(cardsReducer, myCards);
  console.log(cardsContent);
  return (
    <CardContainer>
      {cardsContent.map((c: CardProps) => (
        <Card key={c.id} cardContent={c} dispatch={dispatch} />
      ))}
    </CardContainer>
  );
}
