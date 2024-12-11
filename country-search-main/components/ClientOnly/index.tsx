import { ReactNode, useEffect, useState } from "react";

type ClientOnlyProps = {
  children: ReactNode;
};

const ClientOnly = ({ children, ...props }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...props}>{children}</div>;
};

export default ClientOnly;
