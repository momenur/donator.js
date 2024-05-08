import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full px-1 mx-auto rounded-xl max-w-7xl">
      {children}
    </div>
  );
};

export default Container;
