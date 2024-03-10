import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeListBtns } from "../../store/reducers/saveDataSlice";
import { changeTypeLookSevices } from "../../store/reducers/saveDataSlice";
import "./TypesChoice.scss";
import arrow from "../../assets/icons/arrow.svg";
import choiceService from "../../assets/icons/choiceService.svg";
import choiceDate from "../../assets/icons/choiceDate.svg";
import choicesSpec from "../../assets/icons/choicesSpec.svg";
import { useNavigate } from "react-router-dom";

const TypesNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { listBtns, typeLookSevices } = useSelector(
    (state) => state.saveDataSlice
  );

  // console.log(typeLookSevices, 'typeLookSevices');

  const clickBtn = (id, link) => {
    dispatch(changeTypeLookSevices(id));
    const newData = listBtns.map((button) => {
      return {
        ...button,
        bool: id === button.id,
      };
    });
    dispatch(changeListBtns(newData));
    navigate(`/${link}`);
  };

  const arrImg = [choicesSpec, choiceDate, choiceService];

  return (
    <div className="typesNav">
      <div className="container">
        <div className="typesNav__inner">
          {listBtns?.map((i) => (
            <div key={i.id} onClick={() => clickBtn(i?.id, i.link)}>
              <div>
                <img src={arrImg?.[i.id - 1]} alt="" />
              </div>
              <button className={i?.bool ? "activeBtnChioce" : ""}>
                {i?.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypesNav;
