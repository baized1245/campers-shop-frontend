import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto xl:px-20 md:px-2 px-4">{children}</div>
  );
};

export default Wrapper;
