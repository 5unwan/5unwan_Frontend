import React from "react";

interface UserProfileInformationsProps {
  informations: {
    [key: string]: string | string[];
  };
}

export default function UserProfileInformations({
  informations,
}: UserProfileInformationsProps) {
  return (
    <section className="mt-[45px]">
      <span className="text-lg">회원정보</span>
      {
        <div className="mt-[27px] grid grid-rows-2 divide-y divide-[#303030]">
          {Object.keys(informations).map((content: string) => (
            <div
              key={`user_${content}-${informations[content]}`}
              className="flex h-12 items-center justify-between"
            >
              <span>{content}</span>
              <span className="whitespace-nowrap text-sub-text">
                {typeof informations[content] === "string"
                  ? informations[content]
                  : informations[content].join(", ")}
              </span>
            </div>
          ))}
        </div>
      }
    </section>
  );
}
