"use client"
import Card from "@/Components/Card"
import Container from "@/Components/Container"
import GoogleMap from "@/Components/GoogleMap"
import Search from "@/Components/Search"
import { URL } from "@/Config"
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import Layout from '@/Components/Layout'
import { arr } from "@/api"

export default function Home() {
    const [text, setText] = useState("");
    const [data, setData] = useState<any[]>([]);
    const [coord, setCoord] = useState<any[]>([])
    const handleSearchSubmit = () => {
        try {
            if (text) {
                axios.get(URL + 'data/2.5/weather', {
                    params: {
                        q: text,
                        units: 'metric',
                        appid: process.env.NEXT_PUBLIC_API_Key
                    }
                }).then((res) => {
                    const newData = [res.data];
                    setData(newData);
                    const newCoord = [newData[0].coord];
                    setCoord(newCoord);
                    setText("");

                    const { lat, lon } = newData[0].coord;
                    return axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
                        params: {
                            lat: lat,
                            lon: lon,
                            appid: process.env.NEXT_PUBLIC_API_Key,
                        },
                    });
                })
            } else {
                toast.error('Lütfen arama alanını boş bırakmayınız', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    const handleSearchChange = (e: any) => {
        setText(e.target.value);
    }

    const mapOptions = {
        center: coord.length > 0 ? { lat: coord[0].lat, lng: coord[0].lon } : { lat: 39.91987, lng: 32.85427 },
        zoom: 5,
    };
    function convertUnixTimestampToHHMM(timestamp) {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    return (
        <Layout>
            <Container>
                <div className="flex">
                    <div className="w-full p-4">
                        <div className="flex justify-center items-center text-center p-4">
                            <Search handleSubmit={handleSearchSubmit} text={text} handleOnChange={handleSearchChange} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 p-4">
                        <div className="p-4">
                            <GoogleMap options={mapOptions} markers={[...arr]} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:flex lg:justify-center item-center w-full sm:w-1/2 p-4 justify-center items-center">
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
                    </div>
                </div>
            </Container>
        </Layout >
    );
}
