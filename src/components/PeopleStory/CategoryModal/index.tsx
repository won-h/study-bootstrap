import * as Styles from './style';
import { Modal, Button, Form } from 'react-bootstrap';

export interface Item {
  key: number;
  label: string;
}

interface CategoryModalProps {
  isShow: boolean;
  items: Array<Item>;
  selectedCategories: Array<Item>;
  onClose: () => void;
  onComplete: () => void;
  onSelect: (items: Array<Item>) => void;
}

function CategoryModal({ ...props }: CategoryModalProps) {
  return (
    <>
      <Modal show={props.isShow} centered backdrop="static">
        <Styles.ModalBody>
          <h4>궁금한 분야를 선택해주세요</h4>
          <Styles.PopClose onClick={props.onClose} />
          <Form.Group className="CategorySelect">
            {props.items.map((item, idx) => {
              const isChecked = !!props.selectedCategories.find((c) => c.key === item.key);
              return (
                <Form.Check
                  key={item.key}
                  type="checkbox"
                  id={`category${idx}`}
                  name={`category${idx}`}
                  label={item.label}
                  value=""
                  onChange={() => {
                    if (isChecked) {
                      props.onSelect(props.selectedCategories.filter((c) => c.key !== item.key));
                    } else {
                      props.onSelect([
                        ...props.selectedCategories,
                        {
                          key: item.key,
                          label: item.label,
                        },
                      ]);
                      // console.log(item.key);
                    }
                  }}
                  checked={isChecked}
                />
              );
            })}
          </Form.Group>
        </Styles.ModalBody>
        <Styles.ModalFooter>
          <Button
            onClick={() => {
              props.onComplete();
              props.onClose();
            }}
            variant="dark"
          >
            선택완료
          </Button>
        </Styles.ModalFooter>
      </Modal>
    </>
  );
}

export default CategoryModal;
