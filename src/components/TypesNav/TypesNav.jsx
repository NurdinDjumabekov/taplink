import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeListBtns,
  changeTypeLookSevices,
} from '../../store/reducers/stateSlice';
import './TypesNav.scss';
import arrow from '../../assets/icons/arrow.svg';

function Next(props) {
  const { className, onClick } = props;
  return (
    <div className={className} style={{ display: 'none' }} onClick={onClick} />
  );
}

function Prev(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div className={className} style={{ ...style, display: 'none' }}></div>
      <img onClick={onClick} src={arrow} alt=">" className="arrowSlider" />
    </>
  );
}

const TypesNav = () => {
  const dispatch = useDispatch();

  const { listBtns } = useSelector((state) => state.stateSlice);

  const settings = {
    dots: false,
    infinite: true,
    variableWidth: true,
    centerPadding: '10px',
    speed: 500,
    nextArrow: <Prev />,
    prevArrow: <Next />,
    initialSlide: 0,
    beforeChange: (oldIndex, newIndex) => {
      dispatch(changeTypeLookSevices(+newIndex + 1));
      const newData = listBtns.map((button) => {
        return {
          ...button,
          bool: +newIndex + 1 === +button.id,
        };
      });
      dispatch(changeListBtns(newData));
    },
  };

  const clickBtn = (id) => {
    dispatch(changeTypeLookSevices(id));
    const newData = listBtns.map((button) => {
      return {
        ...button,
        bool: id === button.id,
      };
    });
    dispatch(changeListBtns(newData));
  };

  return (
    <>
      <div className="typesNavDesc">
        {listBtns?.map((i) => (
          <button
            key={i.id}
            onClick={() => clickBtn(i?.id)}
            className={i?.bool ? 'activeBtnChioce' : ''}
          >
            {i?.title}
          </button>
        ))}
      </div>
      <Slider {...settings} className="typesNavMobile">
        {listBtns?.map((i) => (
          <div
            key={i.id}
            onClick={() => clickBtn(i?.id)}
            className={`btnSlider ${i?.bool ? 'activeBtnChioceMob' : ''}`}
          >
            {i?.title}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TypesNav;
