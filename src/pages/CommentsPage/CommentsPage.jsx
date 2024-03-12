import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { listComments } from "../../helpers/dataArr";
import { renderStars } from "../../helpers/renderStars";
import "./CommentsPage.scss";
import star from "../../assets/icons/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { addComments, takeComments } from "../../store/reducers/requestSlice";
import Modals from "../../components/Modals/Modals";
import { getNowDate } from "../../helpers/getNowDate";
import imgAlt from "../../assets/image/masterAlt.jpg";
import { dateFormat } from "../../helpers/dateFormat";

const CommentsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [lookModal, setLookModal] = useState(false);
  const [data, setData] = useState({
    codeid_user: 0,
    name: "",
    description: "",
  });
  const { everyMasterInComment, listComments } = useSelector(
    (state) => state.requestSlice
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(takeComments(id));
  }, []);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const sendNum = (e) => {
    e.preventDefault();
    dispatch(
      addComments({
        name: data?.name,
        description: data?.description,
        date: getNowDate(),
        codeid_user: +id,
      })
    );
    setLookModal(false);
  };

  return (
    <div className="commentsPage">
      <div className="establishment">
        <div className="container">
          <div className="establishment__logo">
            <div className="mainComm">
              <div className="logo">
                <img src={everyMasterInComment?.logo || imgAlt} alt="logo" />
              </div>
              <div className="mainText">
                {/* <p className="week">
                  {everyMasterInComment?.schedule?.map((con, ind) => (
                    <span key={ind}>
                      {con}
                      {ind !== listComments.schedule.length - 1 && ", "}
                    </span>
                  ))}
                </p> */}
                <h5>{everyMasterInComment.fio}</h5>
                <div className="mainText__rating">
                  <div className="star">
                    {renderStars(everyMasterInComment?.rating, star)}
                  </div>
                  <span>({everyMasterInComment?.countSchel})</span>
                </div>
              </div>
            </div>
            <p className="comDescr">{everyMasterInComment?.description}</p>
            <div className="commentsPage__inner">
              {listComments?.length === 0 ? (
                <p className="noneData">Комментарии отсутствуют</p>
              ) : (
                <>
                  {listComments?.map((com) => (
                    <div key={com?.id} className="everyCom">
                      <div className="everyCom__inner">
                        <div className="imgText">
                          <p>{com?.name?.[0]}</p>
                        </div>
                        <div className="moreText">
                          <h6>{com.name}</h6>
                          <span>{dateFormat(com?.date, "date")}</span>
                        </div>
                      </div>
                      <p className="comment">{com?.description}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <button className="zakaz" onClick={() => setLookModal(true)}>
          Оставить комментарий
        </button>
      </div>
      <div className="sendOrders">
        <Modals openModal={lookModal} setOpenModal={() => setLookModal()}>
          <form onSubmit={sendNum}>
            <input
              type="text"
              name="name"
              placeholder="Ваше ФИО"
              onChange={changeInput}
              value={data.name}
              required
            />
            <textarea
              name="description"
              placeholder="Ваш комментарий"
              value={data.description}
              onChange={changeInput}
              required
            ></textarea>
            <button className="sendData" type="submit">
              Отправить
            </button>
          </form>
        </Modals>
      </div>
    </div>
  );
};

export default CommentsPage;
