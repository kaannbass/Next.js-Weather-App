import React, { useEffect, useState } from 'react'
import Layout from '@/Components/Layout'
import Card from '@/Components/Card'
import { useRouter } from 'next/router';
import axios from 'axios'
import { URL } from '@/Config'

function Detail() {
    const router = useRouter();
    const {title} = router.query;
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(URL + 'data/2.5/weather', {
                    params: {
                        q: title,
                        units: 'metric',
                        appid: process.env.NEXT_PUBLIC_API_Key,
                    },
                });
                const newData = [response.data];
                setData(newData);
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };
        getData()
    }, [])

    function convertUnixTimestampToHHMM(timestamp) {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    return (
        <Layout>
            {data && (
                data.map((item) => (
                    <div className="p-4 flex justify-center" key={item.id}>
                        <Card
                            temp={Math.ceil(item.main.temp)}
                            temp_max={Math.ceil(item.main.temp_max)}
                            temp_min={Math.ceil(item.main.temp_min)}
                            humidity={Math.ceil(item.main.humidity)}
                            visibility={item.visibility / 1000}
                            name={item.name}
                            icon={item.weather[0].icon}
                            country={item.sys.country}
                            sunrise={convertUnixTimestampToHHMM(item.sys.sunrise)}
                            sunset={convertUnixTimestampToHHMM(item.sys.sunset)}
                            description={item.weather[0].description}
                            speed={item.wind.speed}
                        />
                    </div>
                ))
            )}
        </Layout>
    )
}

export default Detail