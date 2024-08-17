import React, { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

export type actionProps = {
  name: string;
  action: () => void;
  type?: "danger" | "basic" | undefined;
};
interface ActionSheetProps {
  actions: actionProps[];
  closeAction: () => void;
}
export default function ActionSheet({
  actions,
  closeAction,
}: ActionSheetProps) {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full">
      <div
        className="flex h-full w-full bg-black opacity-40"
        onClick={closeAction}
      />
      <div className="absolute bottom-3 flex w-full flex-col-reverse items-center justify-center">
        <Button
          className="h-[56px] w-11/12 items-center justify-center bg-[#25252588] p-3 text-[17px] text-[#0A84FF] backdrop-blur-sm hover:bg-[#303030]"
          onClick={closeAction}
        >
          취소
        </Button>
        <div className="relative bottom-3 w-11/12 items-center justify-center overflow-hidden rounded-[10px] backdrop-blur-sm">
          {actions.map((action, index) => {
            return (
              <div key={`action_${action.name}`}>
                <Button
                  className="h-[56px] w-full rounded-none bg-[#25252588] text-[17px] text-white hover:bg-[#30303088]"
                  style={{
                    color: action.type === "danger" ? "#FF453A" : "white",
                  }}
                  onClick={() => {
                    action.action();
                  }}
                >
                  {action.name}
                </Button>
                {index < actions.length - 1 && (
                  <hr className="h-[1px] w-full border-[#80808070]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
