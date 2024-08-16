import { useEffect, useCallback, RefObject } from "react";

export default function useOutsideClick(
  ref: RefObject<HTMLElement>,
  handler: () => void,
) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    },
    [ref, handler],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
}
