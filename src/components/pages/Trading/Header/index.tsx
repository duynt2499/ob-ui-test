import { modalSearchState } from '@/recoil/states/modalSearchState';
import { modalSettingState } from '@/recoil/states/modalSettingState';
import classNames from 'classnames';
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import ModalSetting from './ModalSetting';
import SearchFiled from './SearchFiled';
import SettingConnect from './SettingConnect';
import styles from './styles.module.css';

const Header = () => {
  const [isShow, setIsShow] = useRecoilState(modalSettingState);
  const setIsShowModalSearch = useSetRecoilState(modalSearchState);

  return (
    <div className="2-full flex h-16 items-center justify-between">
      <div className="flex-1 ">
        <div className="flex items-center justify-between pr-7">
          <h1 className="">Trading</h1>
          <button
            onClick={() => setIsShowModalSearch(true)}
            data-cy="search-btn"
          >
            <SearchFiled />
          </button>
        </div>
      </div>
      <div className="relative flex w-[360px] items-center justify-end">
        <SettingConnect />
        <ModalSetting />
      </div>

      <div
        onClick={() => {
          setIsShow(false);
        }}
        className={classNames(
          styles.backdrop,
          styles.show,
          isShow ? '' : 'hide'
        )}
      ></div>
    </div>
  );
};

export default Header;
