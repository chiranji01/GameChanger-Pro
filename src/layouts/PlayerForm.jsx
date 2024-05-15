import 'react-loading-skeleton/dist/skeleton.css'
import {DashboardNavBar} from "./common/DashboardNavBar.jsx";
import {SideBar} from "./common/SideBar.jsx";
// import {MdSportsCricket} from "react-icons/md";
// import {BiSolidCricketBall} from "react-icons/bi";
// import {IoAnalyticsSharp, IoCloudUploadOutline} from "react-icons/io5";
// import {ImageSlideShow} from "./component/ImageSlideShow.jsx";
// import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
// import {Chart} from "./Chart.jsx";
// import {ImageUploadModal} from "./component/ImageUploadModal.jsx";
import {useEffect, useState} from "react";
// import {useNavigate} from "react-router-dom";
import {getPlayerStats} from "../api/api.js";
import {sendPlayerData} from "../api/api.js";


export function PlayerForm() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', event.target.name.value);
        formData.append('country', event.target.country.value);
        formData.append('age', event.target.age.value);
        formData.append('role', event.target.role.value);
        formData.append('description', event.target.description.value);
        formData.append('battingStyle', event.target.battingStyle.value);
        formData.append('bowlingStyle', event.target.bowlingStyle.value);
        formData.append('team', event.target.team.value);
        formData.append('image', event.target.image.files[0]);

        try {
            const response = await sendPlayerData(formData);
            console.log(response);
        } catch (error) {
            console.error("Error sending player data:", error);
        }
    };

    useEffect(() => {
        const fetchPlayerStats = async () => {
            const stats = await getPlayerStats();
            setPlayerStats(stats);
            setIsLoading(false);
        };

        fetchPlayerStats();
    }, []);

    return (
        <>
            <DashboardNavBar/>
            <SideBar/>
            <div className="p-4 mt-10 sm:ml-64">
                <div>
                    <div className="p-4 container mx-auto  h-screen">
                        <h2 className="my-6 text-2xl font-semibold font-Roboto text-gray-200">
                            Player Details
                        </h2>


                        {/*
                        name , country, age, role, batting style, bowling style, team, image
                        */}

                        <form id="playerData" className="w-full mx-auto" onSubmit={handleSubmit}>

                            <div className="flex mb-5">
                                {/*Name*/}
                                <div className="flex-1 mr-2">
                                    <label htmlFor="name"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Enter Name" required/>
                                </div>

                                {/*Country*/}
                                <div className="flex-1 ml-2">
                                    <label htmlFor="country"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Country
                                    </label>
                                    <input type="text" id="country" name="country"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Enter Country" required/>
                                </div>
                            </div>

                            <div className="flex mb-5">
                                {/*Age*/}
                                <div className="flex-1 mr-2">
                                    <label htmlFor="age"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Age
                                    </label>
                                    <input type="number" id="age" name="age"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Enter Age" required/>
                                </div>

                                {/*Role*/}
                                <div className="flex-1 ml-2">
                                    <label htmlFor="role"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Role
                                    </label>
                                    <input type="text" id="role" name="role"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Enter Role" required/>
                                </div>

                            </div>

                            <div className="flex mb-5">
                                {/*    Player description text */}

                                <div className="flex-1 mr-2">
                                    <label htmlFor="description"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Description
                                    </label>
                                    <textarea id="description" name="description"
                                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                              placeholder="Enter Description" required/>
                                </div>

                            </div>

                                <div className="flex mb-5">
                                    {/*Batting Style*/}
                                    <div className="flex-1 mr-2">
                                        <label htmlFor="battingStyle"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Batting Style
                                        </label>
                                        <input type="text" id="battingStyle" name="battingStyle"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Enter Batting Style" required/>
                                    </div>

                                    {/*Bowling Style*/}
                                    <div className="flex-1 ml-2">
                                        <label htmlFor="bowlingStyle"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Bowling Style
                                        </label>
                                        <input type="text" id="bowlingStyle" name="bowlingStyle"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Enter Bowling Style" required/>
                                    </div>
                                </div>

                                <div className="flex mb-5">
                                    {/*Team*/}
                                    <div className="flex-1 mr-2">
                                        <label htmlFor="team"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Team
                                        </label>
                                        <input type="text" id="team" name="team"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Enter Team" required/>
                                    </div>

                                    {/*Image*/}
                                    <div className="flex-1 ml-2">
                                        <label htmlFor="bowlingStyle"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Image
                                        </label>
                                        <input type="file" id="image" name="image"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Enter Bowling Style"/>
                                    </div>

                                </div>

                                <div className="flex items-start mb-5"></div>
                                <button type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                                </button>
                        </form>


                    </div>

                </div>
            </div>

        </>
)
}