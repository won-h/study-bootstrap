import * as Styles from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';

interface TabsProps {
  items: Array<{ key: string; label: string }>;
  setClickView: (key: string) => void;
}

function SlideTabs({ ...props }: TabsProps) {
  const [radioValue, setRadioValue] = useState<string>(props.items[0].key);
  const handleTabButton = (key: string) => {
    props.setClickView(key);
  };

  return (
    <Styles.Tab>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={8}
        autoplay={false}
        loop={false}
        observer={true}
        observeParents={true}
      >
        {props.items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ToggleButton
                id={`radio-${index}`}
                type="radio"
                variant="secondary"
                name={`radio-${index}`}
                value={item.key}
                checked={radioValue === item.key}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick={() => handleTabButton(item.key)}
              >
                {item.label}
              </ToggleButton>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Styles.Tab>
  );
}

export default SlideTabs;
