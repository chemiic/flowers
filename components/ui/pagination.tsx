"use client";

import ArrowLeft from "@/components/icons/arrow/arrow-left";
import ArrowRight from "@/components/icons/arrow/arrow-right";
import {FC, SetStateAction} from "react";

type paginationProps = {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  pages: number[];
  onPageChange: (page: SetStateAction<number>) => void;
};

const Pagination:FC<paginationProps> = ({currentPage,totalCount,pageSize,pages, onPageChange}) => {
  const paginationNumberStyle: string = "border-2 border-[--salad] text-[--salad] text-2xl p-2";
  const paginationActiveNumberStyle: string = "border-2 border-[--fur] text-[--fur] text-2xl p-2";
  const onNext = () => {
    if (currentPage !=  Math.ceil(totalCount/pageSize)){
      onPageChange(currentPage + 1);
    }
  };
  const onPrevious = () => {
    if (currentPage != 1){
      onPageChange(currentPage - 1);
    }
  };
  return (
    <div className={"flex items-center gap-[40px]"}>
      <button
        onClick={onPrevious}
        className={"border-2 border-[--salad] p-1.5"}
      >
        <ArrowLeft />
      </button>
      <div className="flex items-center gap-2.5">
        {pages.map(page => (
          <button
            key={page}
            className={page === currentPage ? paginationActiveNumberStyle : paginationNumberStyle}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={onNext}
        className={"border-solid border-2 border-[--salad] p-1.5"}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;