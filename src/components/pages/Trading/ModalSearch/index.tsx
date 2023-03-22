import Modal from 'src/components/Modal';
import Image from 'next/image';
import { SEARCH_INFORMATION } from '@/api/fakeData';
import { useSetRecoilState } from 'recoil';
import { setlimitOrder } from '@/recoil/store';
import { PairToken } from '@/api/models';
import {
  ArrowDownGreen,
  ArrowDownRed,
  SearchIcon,
  Star3Icon,
  StarIcon,
} from '@/assets';

type ModalSearchProps = {
  onClose: () => void;
};

const ModalSearch: React.FC<ModalSearchProps> = ({ onClose }) => {
  const setOrder = useSetRecoilState(setlimitOrder);
  const handleSearch = (item: PairToken) => {
    setOrder({
      action: 'BUY',
      sell: {
        token: item[0].token,
        value: 0,
        image: item[0].image,
      },
      buy: {
        token: item[1].token,
        value: 0,
        image: item[1].image,
      },
    });
    onClose();
  };
  return (
    <Modal onClose={onClose} width={920}>
      <div>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Image src={SearchIcon} />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="h-12 bg-white p-2.5 px-10 text-sm"
            placeholder="Try usdt-usdc"
          />
          <div className="absolute inset-y-0 right-0 z-10 flex items-center pr-3">
            <button
              onClick={onClose}
              className="rounded-lg bg-blackDefault px-2 py-1 font-bold text-white"
            >
              ESC
            </button>
          </div>
        </div>
        <span className="mt-9 block text-sm text-disabled">Recent Search</span>
        <div className="mt-5 flex flex-wrap gap-2">
          {SEARCH_INFORMATION.recentSearch.map((item, i) => (
            <button
              className="btn-default"
              key={`${item}-${i}`}
              onClick={() => handleSearch(item)}
            >
              {item[0].token}/{item[1].token}
            </button>
          ))}
        </div>
        <hr className="mt-8 mb-9" />
        <div className="flex">
          <div className="w-1/2 border-r border-r-blackBg pl-4">
            <span className="mb-7 block text-sm font-bold text-disabled">
              Your Favorited
            </span>
            {SEARCH_INFORMATION.favoritedList.map((item, i) => (
              <div
                className="mb-12 flex items-center justify-between pr-9"
                key={`${item.pairToken}-${i}`}
              >
                <Image src={item.pairToken[0].image} width={16} height={16} />
                <Image src={item.pairToken[1].image} width={16} height={16} />
                <span className="ml-2 text-sm">{item.pairToken[0].token}</span>
                <hr className="mx-1 w-2" />
                <span className="mr-2 text-sm">{item.pairToken[1].token}</span>
                {item.percentChanged >= 0 && (
                  <>
                    <div className="flex w-24 items-center gap-1">
                      <span className="text-right text-xs text-success">
                        +{item.percentChanged}%
                      </span>
                      <Image src={ArrowDownGreen} />
                    </div>
                    <span className="text-bold mr-10 w-16 text-sm text-success">
                      {item.priceChanged}
                    </span>
                  </>
                )}
                {item.percentChanged < 0 && (
                  <>
                    <div className="flex w-24 items-center gap-1">
                      <span className="text-right text-xs text-danger">
                        +{item.percentChanged}%
                      </span>
                      <Image src={ArrowDownRed} />
                    </div>
                    <span className="text-bold mr-10 w-16 text-sm text-danger">
                      {item.priceChanged}
                    </span>
                  </>
                )}
                <Image src={StarIcon} />
              </div>
            ))}
          </div>

          <div className="w-1/2 pl-8">
            <span className="mb-7 block text-sm font-bold text-disabled">
              Top Search
            </span>
            {SEARCH_INFORMATION.topSearch.map((item, i) => (
              <div
                className="mb-12 flex items-center justify-between pr-9"
                key={`${item.pairToken}-${i}`}
              >
                <Image src={item.pairToken[0].image} width={16} height={16} />
                <Image src={item.pairToken[1].image} width={16} height={16} />
                <span className="ml-2 text-sm">{item.pairToken[0].token}</span>
                <hr className="mx-1 w-2" />
                <span className="mr-2 text-sm">{item.pairToken[1].token}</span>
                {item.percentChanged >= 0 && (
                  <>
                    <div className="flex w-24 items-center gap-1">
                      <span className="text-right text-xs text-success">
                        +{item.percentChanged}%
                      </span>
                      <Image src={ArrowDownGreen} />
                    </div>
                    <span className="text-bold mr-10 w-16 text-sm text-success">
                      {item.priceChanged}
                    </span>
                  </>
                )}
                {item.percentChanged < 0 && (
                  <>
                    <div className="flex w-24 items-center gap-1">
                      <span className="text-right text-xs text-danger">
                        +{item.percentChanged}%
                      </span>
                      <Image src={ArrowDownRed} />
                    </div>
                    <span className="text-bold mr-10 w-16 text-sm text-danger">
                      {item.priceChanged}
                    </span>
                  </>
                )}
                <Image src={Star3Icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default ModalSearch;