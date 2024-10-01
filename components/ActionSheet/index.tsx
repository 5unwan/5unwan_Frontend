"use client";

import React, { forwardRef, ReactNode } from "react";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";

interface ActionSheetProps {
  children: ReactNode;
  onClickCloseActionSheet: () => void;
  ref: React.RefObject<HTMLDivElement>;
}

const ActionSheetContainer = forwardRef<HTMLDivElement, ActionSheetProps>(
  function ActionSheetContainer(
    { children, onClickCloseActionSheet }: ActionSheetProps,
    ref,
  ) {
    return createPortal(
      <div ref={ref} className="fixed left-0 top-0 flex h-full w-full">
        <div
          className="flex h-full w-full bg-black opacity-40"
          onClick={onClickCloseActionSheet}
        />
        <div className="absolute bottom-3 flex w-full animate-slide-up flex-col-reverse items-center justify-center duration-300">
          <Button
            className="h-[56px] w-11/12 items-center justify-center bg-sub-bg p-3 text-[17px] text-[#0A84FF] backdrop-blur-sm hover:bg-[#303030]"
            onClick={onClickCloseActionSheet}
          >
            취소
          </Button>
          <div className="relative bottom-3 w-11/12 items-center justify-center divide-y divide-[#5b5b5b] overflow-hidden rounded-[10px] font-light backdrop-blur-sm">
            {children}
          </div>
        </div>
      </div>,
      document.body,
    );
  },
);

export default ActionSheetContainer;
