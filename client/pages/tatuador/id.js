import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../api/artist';
import ArtistProfile from '../../components/ArtistProfile';

export default function Artist() {
  const router = useRouter();
  const { id } = router.query;

  const [artist, setArtist] = useState(null);

  useEffect(() => {
    if(id) {
      api.get(`/artists/${id}`)
      .then((response) => {
        setArtist(response.data.artist);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, [id]);

  return artist && <ArtistProfile artist={artist} />;
}
