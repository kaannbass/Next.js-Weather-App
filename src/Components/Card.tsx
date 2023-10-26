import React from 'react'

interface CardProps {
    name: string;
    icon?: string;
    country: string;
    description: string;
    speed: string
    temp: Number
    temp_max: Number
    temp_min: Number
    humidity: Number
    visibility: Number
    sunrise: Number
    sunset: Number
}
function Card({ name, icon, country, description, speed, temp, temp_max, temp_min, humidity, visibility, sunrise, sunset }: CardProps) {
    return (
        <div className="card w-[25rem] bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex justify-between">
                    <div>
                        <div className="font-bold text-xl">{name}</div>
                        <div className="text-sm text-gray-500">{country}</div>
                    </div>
                    <div className="">
                        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                            <div className="text-sm text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 hover:text-yellow-500"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                                {sunrise}
                            </div>

                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                            <div className="text-sm text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-gray-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                                {sunset}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center mt-6">
                    <div className="font-medium text-8xl">{temp}°</div>
                   
                </div>
                <div className="mt-6 self-center inline-flex items-center justify-center rounded-lg h-[5rem] w-[10rem] gap-x-4">
                    <img src={`https://openweathermap.org/img/wn/${icon}.png`} height={400} width={400} alt="Weather Icon" />
                    <div className="flex flex-col items-center ml-6">
                        <div className=' uppercase w-[5rem]'>{description}</div>
                        <div className="mt-1">
                            <span className="text-md"><i className="far fa-long-arrow-up"></i></span>
                            <span className="text-md font-light text-gray-500">{temp_max}°C</span>
                        </div>
                        <div>
                            <span className="text-md"><i className="far fa-long-arrow-down"></i></span>
                            <span className="text-md font-light text-gray-500">{temp_min}°C</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between mt-6">
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Wind</div>
                        <div className="text-sm text-gray-500">{speed}k/h</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Humidity</div>
                        <div className="text-sm text-gray-500">{humidity}%</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Visibility</div>
                        <div className="text-sm text-gray-500">{visibility}km</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default React.memo(Card);