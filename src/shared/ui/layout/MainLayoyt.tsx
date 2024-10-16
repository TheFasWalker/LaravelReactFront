import { FC, ReactNode } from "react";
import { Aside } from "../../Aside";
import { Header } from "../../Header";

interface MainLayputProps {
  children: ReactNode;
}

export const Mainlayout: FC<MainLayputProps> = ({ children }) => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Header />

      <Aside />

      <main className="p-4 md:ml-64 h-[100vh] pt-20">{children}</main>
    </div>
  );
};
