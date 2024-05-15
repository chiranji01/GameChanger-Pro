import 'react-loading-skeleton/dist/skeleton.css'
import {DashboardNavBar} from "./common/DashboardNavBar.jsx";
import {SideBar} from "./common/SideBar.jsx";
import {MdSportsCricket} from "react-icons/md";
import {BiSolidCricketBall} from "react-icons/bi";
import {IoAnalyticsSharp, IoCloudUploadOutline} from "react-icons/io5";
import {ImageSlideShow} from "./component/ImageSlideShow.jsx";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import {Chart} from "./Chart.jsx";
import {ImageUploadModal} from "./component/ImageUploadModal.jsx";


export function PlayerComparison() {

    return (
        <>
            <DashboardNavBar/>
            <SideBar/>

            <div className="p-4 mt-10 sm:ml-64">
                <div>
                    <div className="p-4 container mx-auto grid h-screen">
                        <h2 className="my-6 text-2xl font-semibold font-Roboto text-gray-200">
                            Player Camparison
                        </h2>
                        <div className="p-4 sm:ml-64 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">


                            <div
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg" src="/src/assets/Players/1.webp" alt=""/>
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dasun
                                            Shanaka</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>


                                    <ul role="list" className="space-y-5 my-7">
                                        <li className="flex items-center">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">FULL NAME: Madagamagamage Dasun Shanaka</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">BORN: September 09, 1991, Negombo</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">AGE: 32y 236d</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">BATTING STYLE: Right hand Bat</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">BOWLING STYLE: Right arm Medium</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">PLAYING ROLE: Allrounder</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">HEIGHT: 6ft</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">EDUCATION: St. Peters College - Negombo, Maristella College</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"> National side: Sri Lanka ,2015-present</span>
                                        </li>

                                        {/* <li className="flex line-through decoration-gray-500">
                                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 ms-3">aaa</span>
                                        </li>
                                        <li className="flex line-through decoration-gray-500">
                                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 ms-3"></span>
                                        </li>
                                        <li className="flex line-through decoration-gray-500">
                                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">Complete documentation</span>
                                        </li> */}
                                        {/* <li className="flex line-through decoration-gray-500">
                                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">24×7 phone & email support</span>
                                        </li> */}
                                    </ul>

                                </div>


                            </div>

                            <div
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg" src="/src/assets/Players/2.jpg" alt=""/>
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Charith Asalanka</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>


                                    <ul role="list" className="space-y-5 my-7">
                                    <li className="flex items-center">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">FULL NAME: Kariyawasam Indipalage Charith Asalanka</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">BORN: June 29, 1997, Elpitiya</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">AGE: 26y 308d</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">BATTING STYLE: Left hand Bat</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">BOWLING STYLE: Right arm Offbreak</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">PLAYING ROLE: Batting Allrounder</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">HEIGHT: 6ft</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">EDUCATION: Richmond College, Galle</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <span
                                                className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"> National side: Sri Lanka ,2015-present</span>
                                        </li>
                                    </ul>

                                </div>


                            </div>


                        </div>


                    </div>

                </div>
            </div>


        </>
    )
}