import React from "react";
import "./ChoiceSpecialist.scss";
import star from "../../assets/icons/star.svg";
import { renderStars } from "../../helpers/renderStars";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeTemporaryIdMaster } from "../../store/reducers/saveDataSlice";
import { randomId } from "../../helpers/randomId";
import imgAlt from "../../assets/image/masterAlt.jpg";
import moreInfo from "../../assets/icons/moreInfo.svg";
import choicesSpec from "../../assets/icons/choicesSpec.svg";

const ChoiceSpecialist = () => {
  const { listMasters } = useSelector((state) => state.requestSlice);
  console.log(listMasters, "listMasters");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickDate = (id) => {
    console.log(id);
    navigate(`/date/${id}`);
    dispatch(changeTemporaryIdMaster(id));
  };

  const clickComents = (id) => {
    navigate(`/com/${id}`);
  };

  return (
    <div className="spec">
      <div className="containerMini">
        <div className="spec__inner">
          {listMasters?.length === 0 ? (
            <p className="noneDataa">В этом филиале мастера отсутствуют</p>
          ) : (
            <>
              <div
                className="spec__everybody"
                // onClick={() => clickDate(randomId(listMasters))}
              >
                <div className="mainLogo">
                  <img src={choicesSpec} alt="мастер" />
                </div>
                <h5>Любой специалист</h5>
              </div>
              {listMasters?.map((spec) => (
                <div key={spec?.codeid} className="spec__every">
                  <div
                    className="spec__content"
                    // onClick={() => clickDate(spec?.codeid)}
                  >
                    <div className="spec__content__more">
                      <div className="mainLogo">
                        <img
                          src={spec?.logo ? spec?.logo : imgAlt}
                          alt="мастер"
                        />
                      </div>
                      <div className="mainText">
                        <p>
                          {spec?.schedule?.map((con, ind) => (
                            <span key={ind}>
                              {con}
                              {ind !== spec.schedule.length - 1 && ", "}
                            </span>
                          ))}
                        </p>
                        <h5>{spec.fio}</h5>
                        <div className="mainText__rating">
                          <div className="star">
                            {renderStars(spec?.rating, star)}
                          </div>
                          <span>{spec?.countSchel} отзывов</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="moreComment"
                      onClick={() => clickComents(spec?.codeid)}
                    >
                      <img src={moreInfo} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoiceSpecialist;

{
  /* <h4 onClick={() => clickDate(spec?.codeid)}>
Выбрать время для записи
</h4> */
}
