import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ChoiceService.scss';
import { changeTypesService } from '../../store/reducers/requestSlice';
// import { listService } from "../../helpers/dataArr";
import {
  addBasketService,
  deleteBasketService,
} from '../../store/reducers/saveDataSlice';
import { changeAlertText } from '../../store/reducers/stateSlice';
import like from '../../assets/icons/goodSend.svg';
import delWhite from '../../assets/icons/delBtnWhite.svg';
import SelectTypeService from '../../components/SelectTypeService/SelectTypeService';

const ChoiceService = () => {
  const dispatch = useDispatch();
  const { basketUser } = useSelector((state) => state.saveDataSlice);
  const { listService } = useSelector((state) => state.requestSlice);

  const addBasket = (obj) => {
    const isServiceInBasket = basketUser?.service?.some(
      /// проверка есть ли id, если есть то не добавлять
      (i) => i?.codeid === obj?.codeid
    );

    if (isServiceInBasket) {
      dispatch(
        changeAlertText({
          text: 'Такая услуга уже есть у вас в корзине',
          backColor: '#c284e4',
          state: true,
        })
      );
    } else {
      if (basketUser?.service?.length === 3) {
        dispatch(
          changeAlertText({
            text: 'Вы за раз можете выбрать не больше 3х услуг',
            backColor: '#c284e4',
            state: true,
          })
        );
      } else {
        dispatch(
          changeAlertText({
            text: 'Мы добавили эту услугу в корзину',
            backColor: '#e484ba',
            state: true,
          })
        );
        dispatch(addBasketService(obj));
      }
    }
  };

  // console.log(typesService, "typesService");
  // console.log(basketUser, "basketUser");

  return (
    <div>
      <div className="serviceChoice">
        <SelectTypeService />
        <div className="serviceChoice__inner">
          {listService?.length === 0 ? (
            <p className="noneDataa">Данные отсутствуют</p>
          ) : (
            <>
              {listService?.map((i) => (
                <>
                  <div className="cards" key={i?.codeid}>
                    <div className="cards__img">
                      <img src={i?.image} alt="logo" />
                    </div>
                    <div className="cards__texts">
                      <h5>{i?.name}</h5>
                      <div>
                        <span>
                          Цена: <b>{i?.sum} сом</b>
                        </span>
                      </div>
                      {/* <p>{i?.descr}</p> */}
                    </div>
                    <div className="actionsBtn">
                      <button
                        className="actionsBtn__basket"
                        onClick={() => addBasket(i)}
                      >
                        Добавить
                      </button>
                      {basketUser?.service?.some(
                        (item) => item?.codeid === i?.codeid
                      ) ? (
                        <div>
                          <button
                            className="actionsBtn__check moreDel"
                            onClick={() =>
                              dispatch(deleteBasketService(i?.codeid))
                            }
                          >
                            <img src={delWhite} alt="like" />
                          </button>

                          {/* <button className="actionsBtn__basket">Убрать</button> */}
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoiceService;
