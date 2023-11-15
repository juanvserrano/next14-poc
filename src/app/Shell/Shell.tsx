"use client";
import Nav from "@xo-union/tk-component-header-nav/remote";
import { ReactNode } from "react";

type Shell = {
  children: ReactNode;
};
export function Shell({ children }: Shell) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
