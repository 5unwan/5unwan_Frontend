import { useEffect, useCallback } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
) => {
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
};

export default useOutsideClick;
