import React, { Children, createElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tag: keyof JSX.IntrinsicElements;
};

const Htext = ({ children, tag }: Props) => {
  return createElement(
    tag,
    { className: 'basis-3/5 font-montserrat text-3xl font-bolds uppercase' },
    children
  );
};

export default Htext;
