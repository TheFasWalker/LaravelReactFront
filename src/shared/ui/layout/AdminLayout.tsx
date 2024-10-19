import { FC, ReactNode } from "react";
import { Aside } from "../../admin/Aside";
import { Header } from "../../admin/Header";
import { Outlet } from "react-router-dom";

export const AdminLayout: FC= () => {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Header />

      <Aside />

      <main className="p-4 md:ml-64 h-[100vh] pt-20">
        <Outlet/>
      </main>
    </div>
  );
};
