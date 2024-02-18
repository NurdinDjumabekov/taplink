import React from 'react';
import './Establishment.scss';
import { useParams } from 'react-router-dom';
import './Establishment.scss';
import logo from '../../assets/icons/callMe.svg';

const Establishment = () => {
  const params = useParams();
  console.log(params?.id, 'params');
  return (
    <div className="establishment">
      <div className="container">
        <div className="establishment__inner">
          <div className="establishment__logo">
            <div>
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <h3>Ж/м Кок-Жар, ул. Новая 22</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              est. Perferendis sunt similique quas provident quasi blanditiis
              sed dolorem veritatis assumenda, hic pariatur inventore cumque
              iste fuga porro odio animi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Culpa, est. Perferendis sunt similique quas
              provident quasi blanditiis sed dolorem veritatis assumenda, hic
              pariatur inventore cumque iste fuga porro odio animi.
            </p>
          </div>
          <div className="establishment__card">
            <button>Выбрать специалиста</button>
            <button>Выбрать дату и время</button>
            <button>Выбрать услуги</button>
          </div>
          {/* <div className="establishment__promotion">
            <h2>Услуги по акции</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Establishment;
