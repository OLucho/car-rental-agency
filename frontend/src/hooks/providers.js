import { CarProvider } from './useCar';
import { ClientProvider } from './useClient';
export default function Providers({ children }) {
  return (
    <ClientProvider>
      <CarProvider>{children}</CarProvider>
    </ClientProvider>
  );
}
