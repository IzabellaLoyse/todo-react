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

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <CardContainer>
        <Description>
          {isChecked ? <Checked>{description}</Checked> : description}
        </Description>

        <FormButtons>
          <Input
            type="checkbox"
            name="completed"
            id="completed"
            value={isChecked}
            checked={isChecked}
            onChange={() => {
              handleOnChange();
              onCompleted(id, isChecked);
            }}
          />

          <Button type="button" onClick={() => onRemove(id)}>
            <FaTrash size={18} color="#0369A1" />
          </Button>

          <Button type="button" onClick={() => onEdit(id)}>
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
