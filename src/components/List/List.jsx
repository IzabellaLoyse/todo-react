import { useState } from 'react';
import { FaBook } from 'react-icons/fa';
import Card from '../Card/Card';

import {
  BigButton,
  Button,
  CardContainer,
  Container,
  FormGroup,
  Input,
  Main,
  Title,
} from './style';

function List() {
  const [todoItem, setTodoItem] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (todoItems) => {
    if (todoItem === '') return;

    setList((prevState) => [
      { id: list.length + 1, description: todoItems },
      ...prevState,
    ]);

    setTodoItem('');
  };

  const handleRemoveItem = (todoId) => {
    setList((prevState) => prevState.filter((item) => item.id !== todoId));
  };

  const handleCompletedItem = (todoId, eventChecked) => {
    setList((prevState) =>
      prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, completed: eventChecked };
        }

        return item;
      }),
    );
  };

  const handleEditItem = (todoId, newTodo) => {
    setList((prevState) =>
      prevState.map((item) => {
        if (item.id === todoId) {
          return { ...item, description: newTodo };
        }

        return item;
      }),
    );
  };

  const handleDeleteAllItems = () => {
    setList([]);
  };

  return (
    <Main>
      <Container>
        <Title>
          Todo List <FaBook size={30} color="#0EA5E9" />{' '}
        </Title>

        <FormGroup>
          <Input
            type="text"
            id="task"
            name="task"
            placeholder="Tenho que..."
            value={todoItem}
            onChange={(event) => setTodoItem(event.target.value)}
          />

          <Button type="button" onClick={() => handleSubmit(todoItem)}>
            Criar
          </Button>
        </FormGroup>

        <CardContainer>
          {list.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              description={item.description}
              onRemove={handleRemoveItem}
              onCompleted={handleCompletedItem}
              onEdit={handleEditItem}
            />
          ))}
        </CardContainer>

        <BigButton type="button" onClick={handleDeleteAllItems}>
          Excluir Todos
        </BigButton>
      </Container>
    </Main>
  );
}

export default List;
