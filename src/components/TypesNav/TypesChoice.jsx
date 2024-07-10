//////// hooks
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

/////// fns
import { changeBasketUser } from "../../store/reducers/saveDataSlice";
import { changeBasketUserCopy } from "../../store/reducers/saveDataSlice";

/////// imgs
import choiceDate from "../../assets/icons/choiceDate.svg";
import choicesSpec from "../../assets/icons/choicesSpec.svg";

/////// scss
import "./TypesChoice.scss";
import { getNowDate } from "../../helpers/getNowDate";
import { daysOfWeek } from "../../helpers/dataArr";

const TypesNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const today = new Date();
  const dayWeekNum = today.getDay();
  const dayOfWeekText = daysOfWeek?.[dayWeekNum];

  const navServices = () =>
    navigate(`/spec/1/${getNowDate()}/${id}/${dayOfWeekText}`);

  React.useEffect(() => {
    dispatch(changeBasketUserCopy({ master: {}, service: [] }));
    dispatch(changeBasketUser({ master: [], service: [], certificate: [] }));
    ///// очищаю данные
  }, []);

  return (
    <div className="typesNav">
      <div className="container">
        <div className="typesNav__inner">
          {/* {listBtns?.map((i) => (
            <div key={i.id} onClick={() => clickBtn(i?.id, i?.link, i?.link2)}>
              <div>
                <img src={arrImg?.[i.id - 1]} alt="" />
              </div>
              <button className={i?.bool ? "activeBtnChioce" : ""}>
                {i?.title}
              </button>
            </div>
          ))} */}
          <div onClick={navServices}>
            <div>
              <img src={choicesSpec} alt="choicesSpec" />
            </div>
            <button>Выбрать специалиста</button>
          </div>
          <div onClick={navServices}>
            <div>
              <img src={choiceDate} alt="choiceDate" />
            </div>
            <button>Выбрать свою дату</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesNav;
