import {MdSportsCricket} from "react-icons/md";
import {BiSolidCricketBall} from "react-icons/bi";
import {IoAnalyticsSharp} from "react-icons/io5";
import {IoCloudUploadOutline} from "react-icons/io5";
import {IoFileTrayFullOutline} from "react-icons/io5";
import {Chart} from "./Chart.jsx";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {DashboardNavBar} from "./common/DashboardNavBar.jsx";
import {SideBar} from "./common/SideBar.jsx";
import {useEffect, useState} from "react";
import {ImageUploadModal} from "./component/ImageUploadModal.jsx";
import {getPlayerStats} from "../api/api.js";
import {ImageSlideShow} from "./component/ImageSlideShow.jsx";
// import { useNavigate } from 'react-router-dom';
// import { ReactSession } from 'react-client-session';
// ReactSession.setStoreType('localStorage');


export function CoachDashboard() {

    const [showModal, setShowModal] = useState(false);
    const [playerStats, setPlayerStats] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     const onPageLoad = () => {
    //       var isLogged = ReactSession.get('isLogged');
    //       if (!isLogged) {
    //         window.alert('Not Logged In');
    //         navigate('/login');
    //       }
    //     };
    //     if (document.readyState === 'complete') {
    //       onPageLoad();
    //     } else {
    //       window.addEventListener('load', onPageLoad, false);
    //       return () => window.removeEventListener('load', onPageLoad);
    //     }
    //   }, []);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
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
            <div className="p-4 sm:ml-64">
                <div>
                    <div className="p-4 container mx-auto grid h-screen">
                        <h2 className="my-6 text-2xl font-semibold font-Roboto text-gray-200">
                        Coach Dashboard
                        </h2>
                        <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-8">
                            <div className="grid gap-6  md:grid-cols-2 xl:grid-cols-2">
                                <button className="flex items-center rounded-lg bg-slate-800 p-4 shadow-xs">
                                    <div className="mr-4 rounded-full bg-violet-700 p-3 text-gray-200">
                                        <MdSportsCricket/>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-300">Batting Analysis</p>

                                    </div>
                                </button>
                                <button className="flex items-center rounded-lg bg-slate-800 p-4 shadow-xs">
                                    <div className="mr-4 rounded-full bg-indigo-600 p-3 text-gray-200">
                                        <BiSolidCricketBall/>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-300">Bowling Analysis</p>

                                    </div>
                                </button>
                                <button className="flex items-center rounded-lg bg-slate-800 p-4 shadow-xs">
                                    <div className="mr-4 rounded-full bg-rose-600 p-3 text-gray-200">
                                        <IoAnalyticsSharp/>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-300">Fielding Analysis</p>
                                        <p className="text-lg font-semibold text-gray-700">
                                            19238
                                        </p>
                                    </div>
                                </button>
                                <button className="flex items-center rounded-lg bg-slate-800 p-4 shadow-xs">
                                    <div className="mr-4 rounded-full bg-emerald-700 p-3 text-gray-200">
                                        <IoAnalyticsSharp/>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-300">
                                            Total Users
                                        </p>

                                    </div>
                                </button>
                            </div>

                            <div className="">
                                <ImageSlideShow />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 grid-rows-1 gap-4 ">
                            <div className="grid gap-3  md:grid-cols-2 xl:grid-cols-2 text-white">

                                <a href="#"
                                   className=" max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center">
                                    <div>
                                        <h5
                                            className="mb-2 font-normal font-Roboto tracking-tight text-gray-600 dark:text-gray-200 text-center">Runs</h5>
                                        {isLoading
                                            ? <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                <p>
                                                    <Skeleton/>
                                                </p>
                                            </SkeletonTheme>
                                            : <p className=" text-center text-teal-600 font-bold text-3xl">
                                                {playerStats.runs}
                                            </p>
                                        }
                                    </div>
                                </a>

                                <a href="#"
                                   className=" max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center">
                                    <div>
                                        <h5
                                            className="mb-2 font-normal font-Roboto tracking-tight text-gray-600 dark:text-gray-200 text-center">Wickets</h5>
                                        {isLoading
                                            ? <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                <p>
                                                    <Skeleton/>
                                                </p>
                                            </SkeletonTheme>
                                            : <p className=" text-center text-teal-600 font-bold text-3xl">
                                                {playerStats.wickets}
                                            </p>
                                        }
                                    </div>
                                </a>

                                <a href="#"
                                   className=" max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center">
                                    <div>
                                        <h5
                                            className="mb-2 font-normal font-Roboto tracking-tight text-gray-600 dark:text-gray-200 text-center">Catches</h5>
                                        {isLoading
                                            ? <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                <p>
                                                    <Skeleton/>
                                                </p>
                                            </SkeletonTheme>
                                            : <p className=" text-center text-teal-600 font-bold text-3xl">
                                                {playerStats.catches}
                                            </p>
                                        }
                                    </div>
                                </a>

                                <a href="#"
                                   className=" max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center">
                                    <div>
                                        <h5
                                            className="mb-2 font-normal font-Roboto tracking-tight text-gray-600 dark:text-gray-200 text-center">Sixes</h5>
                                        {isLoading
                                            ? <SkeletonTheme baseColor="#28252F" highlightColor="#444">
                                                <p>
                                                    <Skeleton/>
                                                </p>
                                            </SkeletonTheme>
                                            : <p className=" text-center text-teal-600 font-bold text-3xl">
                                                {playerStats.sixes}
                                            </p>
                                        }
                                    </div>
                                </a>

                            </div>

                            <Chart/>

                            <div className="grid gap-3 md:grid-cols-1 xl:grid-cols-1 justify-center items-center">
                                <div className="flex flex-col items-center justify-center rounded-lg bg-slate-800 p-8 shadow-xs">
                                    <div className="mb-4 rounded-full bg-blue-200 p-4 text-blue-500">
                                        <IoCloudUploadOutline/>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-300">
                                            <button onClick={handleOpenModal}>Uplaod Image + Generate Report</button>
                                        </p>
                                        {showModal && (
                                            <ImageUploadModal handleCloseModal={handleCloseModal} setPlayerStats={setPlayerStats}/>
                                        )}
                                        
                                    </div>
                                </div>
                                {/* <div className="flex flex-col items-center justify-center rounded-lg bg-slate-800 p-5 shadow-xs">
                                    <div className="mb-4 rounded-full bg-blue-200 p-5 text-blue-500">
                                        <IoFileTrayFullOutline/>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-300">
                                            <button>Generate Report</button>
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {showModal && (
                <ImageUploadModal handleCloseModal={handleCloseModal}/>
            )}

        </>
    )
}