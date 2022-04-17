import React from "react";

export const Text = ({
  children,
  fullWidth = true,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
}) => {
  return (
    <div className={`prose dark:prose-invert ${fullWidth ? "" : "max-w-none"}`}>
      {children}
    </div>
  );
};
