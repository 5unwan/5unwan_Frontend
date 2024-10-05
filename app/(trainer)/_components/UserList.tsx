"use client";

import React from "react";

interface UserListProps {
  children: React.ReactNode;
}

export default function UserList({ children }: UserListProps) {
  return <section>{children}</section>;
}
