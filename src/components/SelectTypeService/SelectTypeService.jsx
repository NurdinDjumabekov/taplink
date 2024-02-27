import React, { useState } from 'react';
import {
  changeTypesService,
  searchService,
  takeListService,
} from '../../store/reducers/requestSlice';
import { useDispatch, useSelector } from 'react-redux';
import './SelectTypeService.scss';
import arrow from '../../assets/icons/arrow.svg';
import { changeSearchService } from '../../store/reducers/inputSlice';
import debounce from 'debounce';

const SelectTypeService = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const { listTypesService } = useSelector((state) => state.requestSlice);
  const { searchInput } = useSelector((state) => state.inputSlice);

  const clickType = (codeid) => {
    const newData = listTypesService.map((button) => {
      return {
        ...button,
        bool: codeid === button.codeid,
      };
    });
    dispatch(changeTypesService(newData));
    dispatch(takeListService({ id: codeid, text: searchInput }));
    setActive(!active);
  };

  const searchInputRef = React.useRef(null);

  const searchData = debounce((e) => {
    e.preventDefault();
    // const codeidBool = listTypesService?.find(
    //   (item) => item?.bool === true
    // )?.codeid;
    // console.log(codeidBool);
    // dispatch(takeListService({ id: codeidBool, text: searchInput }));
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  }, 500);

  // console.log(listTypesService, "listTypesService");

  return (
    <div className="typesSel">
      <div className="serviceChoice__parent">
        <div className="serviceChoice__type__mobile">
          {listTypesService?.map((type) => (
            <button
              key={type?.codeid}
              onClick={() => setActive(!active)}
              className={type?.bool ? 'activeBtnTypeMobile' : 'none'}
            >
              <p>{type?.name}</p>
              {type?.bool && (
                <img
                  src={arrow}
                  alt="arrow"
                  className={active ? 'activeBtn' : 'disactiveBtn'}
                />
              )}
            </button>
          ))}
          {active && (
            <div className="choice">
              {listTypesService?.map((type) => (
                <button
                  key={type?.codeid}
                  onClick={() => clickType(type?.codeid)}
                >
                  <p className={type?.bool ? 'activeInner' : ''}>
                    {type?.name}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
        {/* <form onSubmit={searchData}>
          <input
            type="text"
            placeholder="Поиск"
            ref={searchInputRef}
            // onChange={(e) => {
            //   dispatch(changeSearchService(e.target.value));
            //   searchData(e);
            // }}
            value={searchInput}
          />
          <button type="submit"></button>
        </form> */}
      </div>
    </div>
  );
};

export default SelectTypeService;

{
  /* <div className="typesSelDesc">
        <div className="serviceChoice__type">
          {listTypesService?.map((type) => (
            <button
              key={type?.codeid}
              onClick={() => clickType(type?.codeid)}
              className={type?.bool ? "activeBtnType" : ""}
            >
              {type?.name}
            </button>
          ))}
        </div>
        <form onSubmit={searchData}>
          <input type="text" placeholder="Поиск" ref={searchInputRef} />
          <button type="submit"></button>
        </form>
      </div> */
}
