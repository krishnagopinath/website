import React from "react";

/**
 * Row container for every single row
 * @param param0 
 * @returns 
 */
export const RowContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-4">
      {children}
      <div className="border-b-separator border-solid border-b-2"></div>
    </div>
  );
};
