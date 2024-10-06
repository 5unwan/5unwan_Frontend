import React from "react";

interface UserProfileViewContentProps {
  userContents: {
    [key: string]: string | string[];
  };
}

export default function UserProfileViewContent({
  userContents,
}: UserProfileViewContentProps) {
  return (
    <section className="mt-[45px]">
      <span className="text-lg">회원정보</span>
      <div className="mt-[27px] grid grid-rows-2 divide-y divide-[#303030]">
        {Object.keys(userContents).map((content: string) => (
          <div
            key={`user_${content}-${userContents[content]}`}
            className="flex h-12 items-center justify-between"
          >
            <span>{content}</span>
            <span className="whitespace-nowrap text-sub-text">
              {typeof userContents[content] === "string"
                ? userContents[content]
                : userContents[content].join(", ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
