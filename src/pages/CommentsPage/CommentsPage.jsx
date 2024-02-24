import React from "react";
import { useParams } from "react-router-dom";
// import { listComments } from "../../helpers/dataArr";
import { renderStars } from "../../helpers/renderStars";
import "./CommentsPage.scss";
import star from "../../assets/icons/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { takeComments } from "../../store/reducers/requestSlice";

const CommentsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { everyMasterInComment, listComments } = useSelector(
    (state) => state.requestSlice
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(takeComments(id));
  }, []);

  console.log(everyMasterInComment, "everyMasterInComment");
  console.log(listComments, "listComments");

  return (
    <div className="commentsPage">
      <div className="establishment">
        <div className="container">
          <div className="establishment__logo">
            <div className="mainComm">
              <div className="logo">
                <img src={everyMasterInComment?.logo} alt="logo" />
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
                          <span>{com?.date}</span>
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
      </div>
    </div>
  );
};

export default CommentsPage;
