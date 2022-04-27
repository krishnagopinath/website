export const Footer = ({ lastModified }: { lastModified: string }) => {
  return (
    <div className="italic text-xs text-muted float-right">
      Last Updated on {lastModified}
    </div>
  );
};
