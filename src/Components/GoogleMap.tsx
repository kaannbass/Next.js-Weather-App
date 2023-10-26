import React, { useEffect, useRef, useState } from 'react';
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';
import { useRouter } from 'next/router';

interface GoogleMapProps {
  options?: google.maps.MapOptions;
  markers: { lat: number; lng: number; title: string }[];
}

const GoogleMap: React.FC<GoogleMapProps> = ({ options, markers }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
      version: 'weekly',
    } as LoaderOptions);

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        ...options,
      });
      setMap(map);

      markers.forEach((markerData) => {
        const marker = new google.maps.Marker({
          position: { lat: markerData.lat, lng: markerData.lng },
          map,
          title: markerData.title,
        });
        const handleClick = (title) => {
          return () => {
            handleMarkerClick(title);
          };
        };
      
        marker.addListener('click', handleClick(markerData.title));
      });
    
    });
  }, [options, markers,marker]);

  const router = useRouter();

  const handleMarkerClick = (title: string, id: string, lat: string, lng: string) => {
    router.push({
      pathname: `/detail/${title}`,
      query: { title},
    },
    undefined,
    { shallow: true }
    );
    
  };
  

  return <div ref={mapRef} style={{ height: '495px', width: '100%' }}></div>;
};

export default React.memo(GoogleMap);
