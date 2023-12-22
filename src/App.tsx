import { FC } from 'react';

import FormHook from './FormHook';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <FormHook />
    </div>
  );
};
