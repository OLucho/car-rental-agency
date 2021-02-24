import CarContextProvider from './car/carContext';

export default function Providers({ children }) {
  return <CarContextProvider>{children}</CarContextProvider>;
}
