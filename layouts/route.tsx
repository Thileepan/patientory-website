import { useContext, useEffect } from "react";
import { PAGE_CTX } from "./page";

interface Props {
  title?: string
}


const Route = ({ title, children }: React.PropsWithChildren<Props>) => {
  const ctx = useContext(PAGE_CTX);

  useEffect(() => {
    ctx.set({
      title
    })
  }, [title]);

  return (
    <>
      {children}
    </>
  );
};

export default Route;