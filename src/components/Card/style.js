/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.article`
  margin-top: 1rem;
`;

export const CardContainer = styled.div`
  background-color: var(--color-sky-50);
  width: 18rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--border-size);
  flex-wrap: wrap;
  padding: 1rem;
`;

export const Description = styled.p`
  font-weight: 400;
  color: var(--color-gray-700);
  display: block;
  max-width: 200px;

  &[contenteditable]:focus {
    outline: 2px dashed var(--color-sky-700);
    padding: 0.2rem;
  }
`;

export const Checked = styled.s`
  color: var(--color-sky-700);
`;

export const FormButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid var(--color-gray-900);
  border-radius: 4px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--color-sky-700);
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    background-color: CanvasText;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 0.5rem;
`;
