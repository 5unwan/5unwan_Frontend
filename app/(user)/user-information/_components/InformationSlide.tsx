"use client";

import { Fragment } from "react";
import { useUserInformationStore } from "../../../../stores/useUserInformationStore";

export default function InformationSlide() {
  const pageNumber = useUserInformationStore((state) => state.pageNumber);
  const UserInformationComponents = useUserInformationStore(
    (state) => state.userInformationComponents,
  );

  return (
    <Fragment>
      <section
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${pageNumber * 100}%)` }}
      >
        {UserInformationComponents.map((Component, index) => (
          <div
            key={`${index}-${Component}`}
            className="h-screen w-screen flex-shrink-0"
          >
            <Component />
          </div>
        ))}
      </section>
    </Fragment>
  );
}
