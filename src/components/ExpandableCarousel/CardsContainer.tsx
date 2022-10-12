import { useReducer } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { myCards } from './expandableCarousel.constants';
import { CardAction, CardContent } from './expandableCarousel.types';
type Props = {};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  height: 100vh;
  margin: 0 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 50px 0;
    height: calc(100vh - 100px);
  }
`;

const cardsReducer = (state: CardContent[], action: CardAction) => {
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
  return (
    <CardContainer>
      {cardsContent.map((c: CardContent) => (
        <Card key={c.id} cardContent={c} dispatch={dispatch} />
      ))}
    </CardContainer>
  );
}
