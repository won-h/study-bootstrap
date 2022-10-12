import styled from '@emotion/styled';
import { Button } from 'react-bootstrap';
import slideArrow from 'assets/images/pc/peoplestory/arrow-white.svg';
import btnArrow from 'assets/images/common/icon/select-arrow.svg';

export const OuterWrap = styled.div`
  position: relative;
  height: 908px;
  box-sizing: border-box;
`;
export const OuterWrapBg = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  margin-left: calc(-50vw + 50%);
  background: #191e28;
`;
export const OuterWrapInner = styled.div(
  ({ theme }) => ` 
  position: relative;
  width: 1240px;
  margin: 0 auto;
  color: white;
  padding-top: 80px;
  ${theme.mq.tablet} {
    width: calc(100% - 48px);
    padding-top: 50px;
  }
  ${theme.mq.mobile} {
    width: calc(100% - 32px);
    padding-top: 50px;
  }

  h3 {
    margin: 0;
    font-size: 36px;
    line-height: 1.3;
    ${theme.mq.mobileTablet} {
      font-size: 28px;
    }
  }

  .swiper {
    overflow: visible;
  }
`
);
export const InterviewQ = styled.div(
  ({ theme }) => ` 
  display: flex;
  gap: 15px;
  height: 70px;
  line-height: 1.42;
  letter-spacing: -0.2px;
  font-weight: 500;
  p {
    margin: 0;
    font-size: 24px;
    &:first-of-type img {
      display: block;
      width: 70px;
    }
    ${theme.mq.mobileTablet} {
      font-size: 16px;
      &:first-of-type img {
        width: 52px;
      }
    }
  }
`
);
export const SwiperWrap = styled.div(
  ({ theme }) => ` 
  position: relative;
  margin-top: 42px;

  .interview {
    & > .swiper-wrapper {
      & > .swiper-slide {
        opacity: 0 !important;
        z-index: -1;
        transition: all 0.3s;

        &.swiper-slide-active {
          opacity: 1 !important;
          z-index: 1;
          // animation: slideUp 0.3s forwards;

          @keyframes slideUp {
            0% {
              opacity: 0 !important;
              bottom: -40px;
            }
            100% {
              opacity: 1 !important;
              bottom: 0;
            }
          }
        }

        .swiper {
          margin-top: 45px;
          ${theme.mq.mobileTablet} {
            margin-top: 30px;
          }
          .swiper-slide {
            width: 392px;
            box-sizing: border-box;
            color: #20222d;
            transition: all 0.3s;
            opacity: 0.2;
            &.swiper-slide-active,
            &.swiper-slide-next,
            &.swiper-slide-next + .swiper-slide {
              opacity: 1;
            }
            ${theme.mq.mobileTablet} {
              width: 328px;
            }
          }
          .swiper-button-prev,
          .swiper-button-next {
            &.swiper-button-disabled {
              opacity: 0.3;
            }
            &::after {
              background-image: url(${slideArrow});
            }
          }
          .swiper-button-prev {
            &::after {
              transform: scale(-1);
            }
          }
          .swiper-scrollbar {
            opacity: 1 !important;
            background: transparent;
            bottom: -25px;
            left: 0;
            .swiper-scrollbar-drag {
              opacity: 1 !important;
              background: #4a4a55;
            }
          }
        }
      }
    }
    & > .swiper-button-prev,
    & > .swiper-button-next {
      left: -15px;
      top: auto;
      bottom: -88px;
      &.swiper-button-disabled {
        opacity: 0.3;
      }
      &::after {
        background-image: url(${slideArrow});
        background-size: 24px;
      }
    }
    & > .swiper-button-prev {
      &::after {
        transform: scale(-1);
      }
    }
    & > .swiper-button-next {
      left: 74px;
    }
    & > .swiper-pagination {
      width: auto;
      left: 25px;
      bottom: -80px;
      font-size: 24px;
      font-weight: bold;
      color: #737378;
      .swiper-pagination-current {
        color: white;
      }
    }
  }
`
);
export const SlideButton = styled.div``;
export const SlideImg = styled.div`
  width: 100%;
  height: 161px;
  background: cadetblue;
  img {
    width: 100%;
  }
`;
export const SlideText = styled.div`
  height: 48px;
  color: #20222d;
  line-height: 24px;
`;

export const InterviewBox = styled.div(
  ({ theme }) => ` 
  padding: 30px;
  width: 392px;
  height: 455px;
  box-sizing: border-box;
  border-radius: 8px;
  ${theme.mq.tablet} {
    width: 328px;
    height: 355px;
  }
  ${theme.mq.mobile} {
    width: 100%;
    padding: 24px;
    overflow: auto;
  }
`
);
export const InterviewTitle = styled.div(
  ({ theme }) => ` 
  display: flex;
  gap: 20px;
  align-item: center;

  img {
    width: 50px;
  }
  h4 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    word-break: keep-all;
    & + p {
      margin: 0;
      margin-top: 4px;
      font-size: 14px;
    }
    ${theme.mq.mobileTablet} {
      font-size: 16px;
    }
  }
`
);
export const InterviewContents = styled.div`
  margin-top: 20px;
  text-align: justify;
`;

export const WeWork = styled.div`
  margin-top: 40px;
`;

export const CategoryBtn = styled(Button)(
  ({ theme }) => ` 
  margin-top: 40px;
  height: 60px;
  border-radius: 8px;
  padding: 0 20px;
  background: white;
  border: 1px solid #dcdcdc;
  font-weight: bold;
  text-align: left;

  &:after {
    content: '';
    background-image: url(${btnArrow});
    width: 16px;
    height: 16px;
    margin-left: 20px;
    margin-top: -3px;
    display: inline-block;
    vertical-align: middle;
  }

  ${theme.mq.mobileTablet} {
    width: 100%;

    &:after {
      position: absolute;
      margin-top: 4px;
      right: 20px;
    }
  }

  .labelCount {
    color: #b70132;
  }
`
);

export const WorkDetail = styled.div(
  ({ theme }) => `
  margin-top: 40px;

  ${theme.mq.pc} {
    .my-masonry-grid {
      display: flex;
      margin-left: -32px; /* gutter size offset */
      width: auto;
    }
    .my-masonry-grid_column {
      padding-left: 32px; /* gutter size */
      background-clip: padding-box;
    }
  
    /* Style your items */
    .my-masonry-grid_column > div {
      /* change div to reference your elements you put in <Masonry> */
      margin-bottom: 32px;
    }
  }
`
);

export const DetailItem = styled.div(
  ({ theme }) => `
  padding: 20px;
  background: #f5f8fc;
  border-radius: 8px;

  h4 {
    font-size: 16px;
    font-weight: bold;
    ${theme.mq.pc} {
      font-size: 20px;
    }
    & + p {
      margin-top: 12px;
    }
  }
`
);

export const Like = styled.div(
  ({ theme }) => `
  margin-top: 20px;
  color: #5a6c8d;

  ul {
    margin-top: 12px;
    li {
      position: relative;
      padding-left: 8px;
      &:before {
        content: "";
        position: absolute;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: #6e7b94;
        top: 10px;
        left: 0;
      }
    }
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
  ${theme.mq.pc} {
    margin-top: 30px;
    h4 {
      font-size: 16px;
    }
  }
`
);
export const EmploymentBtn = styled.div`
  margin-top: 40px;
  text-align: center;
`;
