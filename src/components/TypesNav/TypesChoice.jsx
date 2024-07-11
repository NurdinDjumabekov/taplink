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
  const { filial } = useParams();

  const today = new Date();
  const dayWeekNum = today.getDay();
  const dayOfWeek = daysOfWeek?.[dayWeekNum];

  const navServices = () =>
    navigate(`/spec/${filial}/${getNowDate()}/${dayOfWeek}`);

  const navDate = () => navigate(`/date/${filial}`);

  React.useEffect(() => {
    dispatch(changeBasketUserCopy({ master: {}, service: [] }));
    dispatch(changeBasketUser({ master: [], service: [], certificate: [] }));
    ///// очищаю данные
  }, []);

  return (
    <div className="typesNav">
      <div className="container">
        <div className="typesNav__inner">
          <div onClick={navServices}>
            <div>
              <img src={choicesSpec} alt="choicesSpec" />
            </div>
            <button>Выбрать специалиста</button>
          </div>
          <div onClick={navDate}>
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
