import React from "react";
import { Separator } from "../Separator";

/**
 * Row container for every resume single row
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
      <Separator />
    </div>
  );
};
