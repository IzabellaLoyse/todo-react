import styled from 'styled-components';

export const Main = styled.main`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-top: 4rem;
`;

export const Container = styled.section`
  align-items: center;
  background-color: var(--color-gray-500);
  border-radius: var(--border-size);
  display: flex;
  flex-direction: column;
  height: 30rem;
  width: 26rem;
  min-height: 60vh;
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 700;
  letter-spacing: 0.101em;
  padding-top: 1rem;
`;

export const FormGroup = styled.div`
  align-items: center;
  display: flex;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

export const Input = styled.input`
  border-radius: 4px;
  color: var(--color-gray-900);
  font-size: 1rem;
  font-weight: 500;
  height: 2rem;
  margin-right: 0.5rem;
  min-width: 10%;
  padding: 1rem;
  width: 12rem;
`;

export const Button = styled.button`
  background-color: var(--color-sky-400);
  border-radius: var(--border-size);
  border: none;
  color: var(--color-sky-50);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  height: 2.3rem;
  transition: 200ms ease-in-out;
  width: 3rem;

  &:hover {
    background-color: var(--color-sky-500);
  }
`;

export const BigButton = styled(Button)`
  margin-bottom: 1rem;
  width: 6rem;
  height: 2rem;
  background-color: var(--color-sky-700);
`;

export const CardContainer = styled.div`
  height: auto;
  width: auto;
  margin-bottom: 2rem;
  max-height: 100%;
  overflow-y: scroll;
`;
