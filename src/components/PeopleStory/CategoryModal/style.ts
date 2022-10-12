import styled from '@emotion/styled';
import { Modal } from 'react-bootstrap';
import smClose from 'assets/images/common/icon/gray-close-sm.svg';
import mdClose from 'assets/images/common/icon/gray-close-md.svg';

export const ModalBody = styled(Modal.Body)`
  padding: 24px;
  h4 {
    text-align: left;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .CategorySelect {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px 0;

    .form-check {
      width: 50%;
      padding: 0;

      input {
        position: absolute;
        width: 0;
        height: 0;
        z-index: -1;
      }
      label {
        cursor: pointer;
      }
      input:checked + label {
        font-weight: bold;
        &:after {
          content: '';
          background: url(${smClose});
          position: absolute;
          width: 12px;
          height: 12px;
          margin-left: 5px;
          margin-top: 5px;
        }
      }
    }
  }
`;

export const PopClose = styled.button`
  position: absolute;
  background: url(${mdClose});
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
  top: 24px;
  right: 24px;
`;

export const ModalFooter = styled(Modal.Footer)`
  border-top: 0;
  Button {
    width: 100%;
    border: 0;
    padding: 12px 0;
    border-radius: 4px;
  }
`;
