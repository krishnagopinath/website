import React from "react";

export const List = ({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <ul className={`list-none p-0 ${className}`}>{children}</ul>;
};

export const ListItem = ({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <li className={`max-w-4xl ${className}`}>{children}</li>;
};
