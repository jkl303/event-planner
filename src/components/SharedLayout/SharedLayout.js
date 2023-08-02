import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <div>Header</div>{" "}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <div>Footer</div>
    </>
  );
};