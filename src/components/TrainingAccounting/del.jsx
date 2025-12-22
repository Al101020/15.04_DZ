// import { type JSX } from 'react';

export const del = (e) => {
  // console.log(e.target);
  console.log(e.target.parentElement.closest('li'));
  console.log('del');
};