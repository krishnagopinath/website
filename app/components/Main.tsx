type Props = {
  children: JSX.Element;
};

/**
 * Main layout component that wraps all of the website
 *
 * @param {object} props
 */
export const Main = ({ children }: Props) => {
  return (
    <div className="flex flex-row justify-start items-start leading-normal pt-5 pb-3">
      <main className="px-6">{children}</main>
    </div>
  );
};
