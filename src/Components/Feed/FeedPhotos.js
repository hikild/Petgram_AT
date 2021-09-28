import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const token = localStorage.getItem('token');
      const total = 6;
      const { url, options } = PHOTOS_GET(token);
      const { response, json } = await request(url, options);
      console.log('JSON', json.length)
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((content) => (
          <FeedPhotosItem
            key={content.id}
            photo={content.photo}
            setModalPhoto={setModalPhoto}
            description={content.description}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
