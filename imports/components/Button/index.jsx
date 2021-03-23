import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  type,
  className,
}) => {
  if (to) {
    return (
      <Link className={className} to={to}>{children}</Link>
    );
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={className}
    >
      {children}
    </button>
  );
};

export default styled(Button)`
    background-color: blue;
    color: white;
    font-size: unset;
    text-decoration: none;
    font-family: sans-serif;
    cursor: pointer;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    margin: 0.2rem;

    ${({ outlined }) => outlined && css`
        background-color: transparent;
        color: blue;
        border: 2px solid blue;
        padding: 0.25rem 0.45rem;
    `}
`;
