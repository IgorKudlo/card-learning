import React from 'react';
import { Card as CardLibrary } from '@mui/material';
import Typography from '@mui/material/Typography';
import s from './styles.module.css';

interface ICard {
  title?: string,
  children?: React.ReactNode,
}

const Card = ({ title, children }: ICard) => {
  return (
    <CardLibrary className={s.card}>
      {title && <Typography variant="h1" className={s.cardTitle}>{title}</Typography>}
      {children}
    </CardLibrary>
  );
};

export default Card;