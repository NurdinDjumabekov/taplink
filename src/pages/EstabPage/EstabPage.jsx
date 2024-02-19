import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import "./EstabPage.scss";
import logo from "../../assets/icons/callMe.svg";
import { useDispatch, useSelector } from "react-redux";
import ChoiceSpecialist from "../ChoiceSpecialist/ChoiceSpecialist";
import ChoiceDate from "../ChoiceDate/ChoiceDate";
import ChoiceService from "../ChoiceService/ChoiceService";
import {
  changeListBtns,
  changeTypeLookSevices,
} from "../../store/reducers/stateSlice";

const EstabPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { typeLookSevices, listBtns } = useSelector(
    (state) => state.stateSlice
  );

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
      <div className="establishment">
        <div className="container">
          <div className="establishment__inner">
            <div className="establishment__logo">
              <div>
                <div className="logo">
                  <img
                    src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295972133291028.png"
                    alt="logo"
                  />
                </div>
                <h3>Ж/м Кок-Жар, ул. Новая 22</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                est. Perferendis sunt similique quas provident quasi blanditiis
                sed dolorem veritatis assumenda, hic pariatur inventore cumque
                iste fuga porro odio animi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Culpa, est. Perferendis sunt
                similique quas provident quasi blanditiis sed dolorem veritatis
                assumenda, hic pariatur inventore cumque iste fuga porro odio
                animi.
              </p>
            </div>
            <div className="establishment__card">
              {listBtns?.map((i) => (
                <button
                  key={i.id}
                  onClick={() => clickBtn(i?.id)}
                  className={i?.bool ? "activeBtnChioce" : ""}
                >
                  {i?.title}
                </button>
              ))}
            </div>
            {typeLookSevices === 1 && <ChoiceService />}
            {typeLookSevices === 2 && <ChoiceSpecialist />}
            {typeLookSevices === 3 && <ChoiceDate />}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default EstabPage;
