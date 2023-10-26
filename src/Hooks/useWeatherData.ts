import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { URL } from '@/Config';

interface WeatherData {
    data: WeatherData[];
    coord: { lat: number; lon: number }[];
}

interface WeatherDataResponse {
    data: WeatherData[];
    coord: { lat: number; lon: number }[];
}

function useWeatherData() {
    const [data, setData] = useState<WeatherData[]>([]);
    const [coord, setCoord] = useState<{ lat: number; lon: number }[]>([]);

    const fetchData = useCallback((text: string) => {
        if (!text) {
            return;
        }

        axios
            .get<WeatherDataResponse>(URL + 'data/2.5/weather', {
                params: {
                    q: text,
                    units: 'metric',
                    appid: process.env.NEXT_PUBLIC_API_Key
                }
            })
            .then((res) => {
                const newData = [res.data.data];
                setData(newData);
                const newCoord = [res.data.coord];
                setCoord(newCoord);
            })
            .catch((error) => {
                console.error("An error occurred:", error);
            });
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, coord, fetchData };
}

export default useWeatherData;
