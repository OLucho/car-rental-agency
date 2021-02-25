import { useParams } from 'react-router-dom';
import CarDetail from '../../components/detail/carDetail';
import Header from '../../components/header';

export default function DetailPage() {
  const { type, id } = useParams();

  return (
    <>
      <Header />
      {type === 'car' && <CarDetail id={id} />}
    </>
  );
}
