import 'react-loading-skeleton/dist/skeleton.css';
import { DashboardNavBar } from "./common/DashboardNavBar.jsx";
import { SideBar } from "./common/SideBar.jsx";
import profileImage from "../assets/charith.jpeg";
import React, { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const playerData = {
    name: "Kariyawasam Indipalage Charith Asalanka",
    role: "Vice-Captain",
    country: "Sri Lanka",
    team: "Sri Lanka National Team",
    description: "Kariyawasam Indipalage Charith Asalanka is a Sri Lankan professional cricketer who plays all three formats of the game for the national team & also serves as the vice-captain of the national team in T20I and ODI. A left-handed batsman and Right-arm off break bowler, Asalanka made his international debut for Sri Lanka in June 2021.",
    age: 24,
    battingStyle: "Left-handed",
    bowlingStyle: "Right-arm off break",
};

export function PlayerProfile() {

    const [isLoading, setIsLoading] = useState(true); // Add this line

    // Simulate data loading
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return (
        <>
            <DashboardNavBar />
            <SideBar />
            <div className="mt-10 p-4 sm:ml-64">
                <div>
                    <div className="container mx-auto h-screen p-4">
                        <h2 className="my-6 text-2xl font-semibold text-gray-200 font-Roboto">
                            Player Details
                        </h2>

                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                                    <div className="relative">
                                        <img
                                            alt="..."
                                            src={profileImage}
                                            className="transform rounded-full border-none align-middle shadow-xl max-w-150-px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 text-center">
                                <div className="mb-2 text-4xl font-semibold leading-normal text-blueGray-700 dark:text-white">
                                    {isLoading ? <SkeletonTheme baseColor="#28252F" highlightColor="#444" width={300}>
                                        <Skeleton/>
                                    </SkeletonTheme> : playerData.name}
                                </div>
                                <div className="mb-2 text-blueGray-600 dark:text-gray-300">
                                    <i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"></i>
                                    {isLoading ? <SkeletonTheme baseColor="#28252F" highlightColor="#444" width={200}>
                                        <Skeleton/>
                                    </SkeletonTheme> : playerData.role}
                                </div>
                                <div className="mb-2 text-blueGray-600 dark:text-gray-300">
                                    <i className="mr-2 text-lg fas fa-briefcase text-blueGray-400"></i>
                                    {isLoading ? <SkeletonTheme baseColor="#28252F" highlightColor="#444" width={200}>
                                        <Skeleton/>
                                    </SkeletonTheme> : playerData.country}
                                </div>
                                <div className="mb-2 text-blueGray-600 dark:text-gray-300">
                                    <i className="mr-2 text-lg fas fa-university text-blueGray-400"></i>
                                    {isLoading ? <SkeletonTheme baseColor="#28252F" highlightColor="#444" width={200}>
                                        <Skeleton/>
                                    </SkeletonTheme> : playerData.team}
                                </div>
                            </div>
                            <div className="mt-10 border-t py-8 text-center border-blueGray-200 dark:border-gray-700">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4 lg:w-9/12">
                                        <p className="mb-4 text-base leading-relaxed text-blueGray-700 dark:text-gray-300">
                                            {isLoading ? <SkeletonTheme baseColor="#28252F" highlightColor="#444" width={500}>
                                                <Skeleton/>
                                            </SkeletonTheme> : playerData.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative overflow-x-auto flex justify-center rounded">
                                    <table
                                        className="w-1/2 text-left rtl:text-right text-sm text-gray-500 dark:text-gray-400 rounded">
                                        <thead className="text-xs uppercase text-gray-900 dark:text-gray-400"></thead>
                                        <tbody>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th
                                                scope="row"
                                                className="whitespace-nowrap px-12 py-4 font-medium text-gray-900 dark:text-white"
                                            >
                                                {isLoading ? (
                                                    <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                        <td>
                                                            <Skeleton width={80}/>
                                                        </td>
                                                    </SkeletonTheme>
                                                ) : (
                                                    "Runs"
                                                )}
                                            </th>
                                            <td className="px-6 py-4">
                                                {isLoading ? (
                                                    <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                        <td>
                                                            <Skeleton width={80}/>
                                                        </td>
                                                    </SkeletonTheme>
                                                ) : (
                                                    "990"
                                                )}
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th
                                                scope="row"
                                                className="whitespace-nowrap px-12 py-4 font-medium text-gray-900 dark:text-white"
                                            >
                                                {isLoading ? (
                                                    <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                        <td>
                                                            <Skeleton width={120}/>
                                                        </td>
                                                    </SkeletonTheme>
                                                ) : (
                                                    "Batting Average"
                                                )}
                                            </th>
                                            <td className="px-6 py-4">
                                                {isLoading ? (
                                                    <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                        <td>
                                                            <Skeleton width={80}/>
                                                        </td>
                                                    </SkeletonTheme>
                                                ) : (
                                                    "25.38"
                                                )}
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th
                                                scope="row"
                                                className="whitespace-nowrap px-12 py-4 font-medium text-gray-900 dark:text-white"
                                            >
                                                {isLoading ? (
                                                    <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                        <td>
                                                            <Skeleton width={80}/>
                                                        </td>
                                                    </SkeletonTheme>
                                                ) : (
                                                    "Wickets"
                                                )}
                                            </th>
                                            <td className="px-6 py-4">
                                                {isLoading ? (
                                                    <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                        <td>
                                                            <Skeleton width={80}/>
                                                        </td>
                                                    </SkeletonTheme>
                                                ) : (
                                                    "0"
                                                )}
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th
                                                scope="row"
                                                className="whitespace-nowrap px-12 py-4 font-medium text-gray-900 dark:text-white"
                                            >
                                                {isLoading ? (
                                                    <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                        <td>
                                                            <Skeleton width={120}/>
                                                        </td>
                                                    </SkeletonTheme>
                                                ) : (
                                                    "Economy Rate"
                                                )}
                                            </th>
                                            <td className="px-6 py-4">
                                                {isLoading ? (
                                                    <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                        <td>
                                                            <Skeleton width={80}/>
                                                        </td>
                                                    </SkeletonTheme>
                                                ) : (
                                                    "6.16"
                                                )}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
