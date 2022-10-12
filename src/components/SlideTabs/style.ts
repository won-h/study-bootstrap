import styled from '@emotion/styled';

export const Tab = styled.div`
  width: auto;

  .swiper-slide {
    width: auto;

    a,
    label {
      display: block;
      padding: 12px 20px;
      border-radius: 24px;
      background: #f6f6f6;
      color: #20222d;
      border: 0;
    }

    &.active {
      a {
        background: black;
        font-weight: bold;
        color: white;
      }
    }
    input:checked + label {
      background: black;
      font-weight: bold;
      color: white;
    }
  }
`;
