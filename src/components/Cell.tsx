import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Cell = (props: Props) => {
  const { children } = props;
  return (
    <div
      style={{
        width: "calc( 100% / 7 )",
        aspectRatio: 1,
        display: "grid",
        placeItems: "center",
      }}
    >
      {children}
    </div>
  );
};
