import React from "react";

export const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className="list-none p-0">{children}</ul>;
};

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="max-w-4xl">{children}</li>;
};
