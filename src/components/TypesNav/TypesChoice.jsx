import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeListBtns } from "../../store/reducers/stateSlice";
import {
  changeBasketUserCopy,
  changeTypeLookSevices,
} from "../../store/reducers/saveDataSlice";
import "./TypesChoice.scss";
import arrow from "../../assets/icons/arrow.svg";
import choiceService from "../../assets/icons/choiceService.svg";
import choiceDate from "../../assets/icons/choiceDate.svg";
import choicesSpec from "../../assets/icons/choicesSpec.svg";
import { useNavigate, useParams } from "react-router-dom";

const TypesNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { typeLookSevices } = useSelector((state) => state.saveDataSlice);
  const { listBtns } = useSelector((state) => state.stateSlice);

  // console.log(typeLookSevices, 'typeLookSevices');

  const clickBtn = (codeid, link, link2) => {
    dispatch(changeTypeLookSevices(codeid));
    const newData = listBtns.map((button) => {
      return {
        ...button,
        bool: codeid === button.id,
      };
    });
    dispatch(changeListBtns(newData));
    navigate(`/${link}/${id}${link2 || +link2 === 0 ? `/${link2}` : ""}`);
    dispatch(changeBasketUserCopy({ master: {}, service: [] }));
  };

  const arrImg = [choicesSpec, choiceDate, choiceService];

  // console.log(listBtns, "listBtns");
  return (
    <div className="typesNav">
      <div className="container">
        <div className="typesNav__inner">
          {listBtns?.map((i) => (
            <div key={i.id} onClick={() => clickBtn(i?.id, i?.link, i?.link2)}>
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
