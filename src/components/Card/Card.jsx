/* eslint-disable no-useless-return */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import {
  Button,
  CardContainer,
  Checked,
  Container,
  Description,
  FormButtons,
  Input,
} from './style';

function Card({ id, description, onRemove, onCompleted, onEdit }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [updateItem, setUpdateItem] = useState();

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOnEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleUpdateItem = (event) => {
    if (event && updateItem.length > 0) {
      onEdit(id, updateItem);
      setIsEdit(!isEdit);
    } else {
      alert('Não é permitido campo vazio');
      return;
    }
  };

  return (
    <Container>
      <CardContainer>
        {isEdit ? (
          <Description
            contentEditable={isEdit}
            suppressContentEditableWarning
            onInput={(event) => setUpdateItem(event.currentTarget.textContent)}
            onBlur={handleUpdateItem}
          >
            {description}
          </Description>
        ) : (
          <Description>
            {!isChecked ? description : <Checked>{description}</Checked>}
          </Description>
        )}

        <FormButtons>
          <Input
            type="checkbox"
            name="completed"
            id="completed"
            value={isChecked}
            checked={isChecked}
            disabled={isEdit === true}
            onChange={() => {
              handleOnChange();
              onCompleted(id, !isChecked);
            }}
          />

          <Button type="button" onClick={() => onRemove(id)}>
            <FaTrash size={18} color="#0369A1" />
          </Button>

          <Button type="button" onClick={handleOnEdit}>
            <FaPencilAlt size={18} color="#087c6b" />
          </Button>
        </FormButtons>
      </CardContainer>
    </Container>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onCompleted: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Card;
