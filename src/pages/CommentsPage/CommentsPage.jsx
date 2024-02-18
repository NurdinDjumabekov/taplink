import React from 'react';
import { useParams } from 'react-router-dom';
import { listComments } from '../../helpers/dataArr';
import { renderStars } from '../../helpers/renderStars';
import './CommentsPage.scss';
import star from '../../assets/icons/star.svg';

const CommentsPage = () => {
  const { id } = useParams();

  return (
    <div className="commentsPage">
      <div className="establishment">
        <div className="container">
          <div className="establishment__logo">
            <div className="mainComm">
              <div className="logo">
                <img src={listComments?.logo} alt="logo" />
              </div>
              <div className="mainText">
                <p className="week">
                  {listComments?.schedule?.map((con, ind) => (
                    <span key={ind}>
                      {con}
                      {ind !== listComments.schedule.length - 1 && ', '}
                    </span>
                  ))}
                </p>
                <h5>{listComments.name}</h5>
                <div className="mainText__rating">
                  <div className="star">
                    {renderStars(listComments?.rating, star)}
                  </div>
                  <span>({listComments?.countSchel})</span>
                </div>
              </div>
            </div>
            <p className="comDescr">{listComments?.descr}</p>
            <div className="commentsPage__inner">
              {listComments?.arrComm?.map((com) => (
                <div className="everyCom">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;
