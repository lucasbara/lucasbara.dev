import { FC } from "react";
import "@/styles/globals.css";

interface PropsTypes {
  children: React.ReactNode;
}

const Layout: FC<PropsTypes> = ({ children }) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
};

export default Layout;
