import Routes from './routes';
import Providers from './store/providers';

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

export default App;
