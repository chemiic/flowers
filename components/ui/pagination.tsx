"use client";

import ArrowLeft from "@/components/icons/arrow/arrow-left";
import ArrowRight from "@/components/icons/arrow/arrow-right";

type props = {
  pages: number[];
};

const Pagination = ({pages}: props) => {
  const paginationNumberStyle: string = "border-2 border-[--salad] text-[--salad] text-2xl p-2";
  const paginationActiveNumberStyle: string = "border-2 border-[--fur] text-[--fur] text-2xl p-2"

  const onLeftPagination = (): void => {
    console.log("left");
  };

  const onRightPagination = (): void => {
    console.log("right");
  };

  return (
    <div className={"flex items-center gap-[40px]"}>
      <button
        onClick={onLeftPagination}
        className={"border-2 border-[--salad] p-1.5"}
      >
        <ArrowLeft />
      </button>
      <div className="flex items-center gap-2.5">
        {pages.map(page => (
          <button
            key={page}
            className={page === 1 ? paginationActiveNumberStyle : paginationNumberStyle}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={onRightPagination}
        className={"border-solid border-2 border-[--salad] p-1.5"}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;