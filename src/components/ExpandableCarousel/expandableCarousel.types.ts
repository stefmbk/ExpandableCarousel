export type CardContent = {
  id: number;
  name: string;
  img: string;
  expanded: boolean;
};

export type CardAction = {
  type: 'EXPAND';
  payload: number;
};
