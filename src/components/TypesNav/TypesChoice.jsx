import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeListBtns } from "../../store/reducers/stateSlice";
import { changeTypeLookSevices } from "../../store/reducers/saveDataSlice";
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

  const clickBtn = (codeid, link) => {
    dispatch(changeTypeLookSevices(codeid));
    const newData = listBtns.map((button) => {
      return {
        ...button,
        bool: codeid === button.id,
      };
    });
    dispatch(changeListBtns(newData));
    console.log(link, "link");
    navigate(`/${link}/${id}`);
  };

  const arrImg = [choicesSpec, choiceDate, choiceService];

  console.log(listBtns, "listBtns");
  return (
    <div className="typesNav">
      <div className="container">
        <div className="typesNav__inner">
          {listBtns?.map((i) => (
            <div key={i.id} onClick={() => clickBtn(i?.id, i?.link)}>
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
