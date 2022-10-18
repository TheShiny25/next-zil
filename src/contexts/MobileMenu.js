import { createContext, useState } from 'react';

const MobileMenuContext = createContext({
  isOpened: false,
  toggle: () => {},
});

export const MobileMenuProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => setIsOpened(!isOpened);

  return <MobileMenuContext.Provider value={{ isOpened, toggle }}>{children}</MobileMenuContext.Provider>;
};

export const { Consumer: MobileMenuConsumer } = MobileMenuContext;

export default MobileMenuContext;
