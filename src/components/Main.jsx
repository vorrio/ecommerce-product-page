import Slider from "./Slider";
import { useState } from "react";

//leading-[2rem] md:leading-[2.625rem]

export default function Main({ addCartItem, item }) {
  const [itemsCount, setIitemsCount] = useState(1);

  return (
    <>
      <main className="grid max-w-[1020px] gap-[32px] md:mx-[24px] md:grid-cols-2 md:pt-[90px] lg:mx-auto lg:gap-[120px]">
        <Slider images={item.images} />
        <div className="flex flex-col justify-center p-[24px] md:p-0">
          <p className="text-[0.875rem] font-bold uppercase text-orange ">
            {item.company}
          </p>
          <h1 className="mt-[16px] text-6xl font-bold ">
            Fall Limited Edition Sneakers
          </h1>
          <p className="mt-[16px] text-dar-grayis-blue lg:mt-[32px]">
            {item.description}
          </p>
          <div className="flex flex-row flex-wrap items-center justify-between pt-[16px] lg:pt-[32px]">
            <p className="flex items-center gap-[16px] text-[1.75rem] font-bold ">
              ${item.price * item.discount}
              <span className="rounded-[4px] bg-pal-orange px-[8px] text-[1rem] text-orange  ">
                {item.discount * 100}%
              </span>
            </p>
            <p className="font-bold text-grayis-blue line-through">
              ${item.price}
            </p>
          </div>
          <div className="mt-[16px] flex flex-wrap gap-[16px] lg:mt-[32px]">
            <div className="flex w-[148px] flex-grow-[1] items-center justify-between gap-[32px] rounded-[8px] bg-ligh-grayis-blue p-[16px]">
              <button
                className="group"
                onClick={() => {
                  if (itemsCount > 1) setIitemsCount(itemsCount - 1);
                }}
              >
                <svg
                  width="12"
                  height="4"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      id="a1"
                    />
                  </defs>
                  <use
                    className="group-hover:fill-orange/50"
                    fill="#FF7E1B"
                    fillRule="nonzero"
                    xlinkHref="#a1"
                  />
                </svg>
              </button>
              <span className="font-bold">{itemsCount}</span>
              <button
                className="group"
                onClick={() => setIitemsCount(itemsCount + 1)}
              >
                <svg
                  width="12"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                      id="b"
                    />
                  </defs>
                  <use
                    className="group-hover:fill-orange/50"
                    fill="#FF7E1B"
                    fillRule="nonzero"
                    xlinkHref="#b"
                  />
                </svg>
              </button>
            </div>
            <button
              onClick={() => addCartItem({ id: item.id, count: itemsCount })}
              className="flex min-w-[200px] flex-grow-[2] items-center justify-center gap-[8px] rounded-[8px] bg-orange p-[16px] font-bold text-white hover:bg-orange/50"
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-white"
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
