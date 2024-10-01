
'use client';
import { useState } from 'react';
import { items } from '../../../../Items.json';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Bootstrap.module.css';

const BootstrapCarousel = () => {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} interval={4000}>
          <img style={{ width: '100%' }} src={item.imageUrl} alt="slides" />

          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <button className="btn btn-danger">Visit Docs</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default BootstrapCarousel;
