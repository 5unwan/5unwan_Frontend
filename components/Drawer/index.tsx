"use client";

import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import useOutsideClick from "@/hooks/useOutsideClick";
import GuideFeedback from "./GuideFeedback";
import WriteFeedback from "./WriteFeedback";
import ExitConfirmation from "./ExitConfirmation";
import ExitOrCancelButtons from "./ExitOrCancelButtons";

interface DrawerType {
  className?: string;
  children: ReactNode;
}

interface DrawerContainerProps extends DrawerType {
  isOpen: boolean;
  onClickCloseDrwaer: () => void;
}

function DrawerContainer({
  className,
  isOpen,
  onClickCloseDrwaer,
  children,
}: DrawerContainerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(drawerRef, onClickCloseDrwaer);

  if (!isOpen) return;

  return createPortal(
    <div
      ref={drawerRef}
      className={cn(
        "fixed bottom-0 z-10 flex w-full flex-col gap-10 rounded-t-[50px] bg-sub-bg px-5 py-10",
        className,
      )}
    >
      {children}
    </div>,
    document.body,
  );
}

interface HeaderProps extends DrawerType {}

function Header({ className, children }: HeaderProps) {
  return <div className={cn("w-full", className)}>{children}</div>;
}

interface ContentProps extends DrawerType {}

function Content({ className, children }: ContentProps) {
  return <div className={cn("w-full", className)}>{children}</div>;
}

const Drawer = Object.assign(DrawerContainer, {
  Header,
  Content,
  GuideFeedback,
  WriteFeedback,
  ExitConfirmation,
  ExitOrCancelButtons,
});

export default Drawer;
