import { CarProvider } from './useCar';

export default function Providers({ children }) {
  return <CarProvider>{children}</CarProvider>;
}
