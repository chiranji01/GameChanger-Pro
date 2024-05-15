import React, { useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { DashboardNavBar } from "./common/DashboardNavBar.jsx";
import { SideBar } from "./common/SideBar.jsx";

function Performance() {
  // State for storing runs and balls
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);

  // Function to calculate strike rate
  const calculateStrikeRate = () => {
    if (balls === 0) {
      return 0;
    }
    return (runs / balls) * 100;
  };

  // State for storing wickets
  const [wickets, setWickets] = useState(0);

  // Function to calculate batting average
  const calculateBattingAverage = () => {
    if (wickets === 0) {
      return 0;
    }
    return runs / wickets;
  };

  // State for storing runs and overs
  const [runsGiven, setRunsGiven] = useState(0);
  const [overs, setOvers] = useState(0);

  // State for storing wickets taken
  const [wicketsTaken, setWicketsTaken] = useState(0);

  // Function to calculate bowling average
  const calculateBowlingAverage = () => {
    if (wicketsTaken === 0) {
      return 0;
    }
    return runsGiven / wicketsTaken;
  };

  // Function to calculate economy rate
  const calculateEconomyRate = () => {
    if (overs === 0) {
      return 0;
    }
    return runsGiven / overs;
  };

  return (
    <>
      <DashboardNavBar />
      <SideBar />
      <div className="p-5 mt-10 sm:ml-64">
        <div className="p-4 container mx-auto grid h-screen">
          <h2 className="text-2xl font-semibold font-Roboto text-gray-200">
            Batting & Bowling Analysis
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="max-w-sm max-h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 overflow-y-auto">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Batting Strike Rate</h5>
                <div>
                  <label className="block mb-2">
                    <span className="text-gray-400">Runs:</span>
                    <input
                      type="number"
                      className="form-input mt-1 block w-full"
                      value={runs}
                      onChange={(e) => setRuns(parseInt(e.target.value))}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-2">
                    <span className="text-gray-400">Balls Faced:</span>
                    <input
                      type="number"
                      className="form-input mt-1 block w-full"
                      value={balls}
                      onChange={(e) => setBalls(parseInt(e.target.value))}
                    />
                  </label>
                </div>
                <div>
                  <p className="text-white text-2l font-bold">Strike Rate: {calculateStrikeRate().toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm max-h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 overflow-y-auto">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Batting Average</h5>
                <div>
                  <label className="block mb-2">
                    <span className="text-gray-400">Wickets Lost:</span>
                    <input
                      type="number"
                      className="form-input mt-1 block w-full"
                      value={wickets}
                      onChange={(e) => setWickets(parseInt(e.target.value))}
                    />
                  </label>
                </div>
                <div>
                  <p className="text-white text-2l font-bold">Batting Average: {calculateBattingAverage().toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm max-h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 overflow-y-auto">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bowling Economy Rate</h5>
                <div>
                  <label className="block mb-2">
                    <span className="text-gray-400">Runs Given:</span>
                    <input
                      type="number"
                      className="form-input mt-1 block w-full"
                      value={runsGiven}
                      onChange={(e) => setRunsGiven(parseInt(e.target.value))}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-2">
                    <span className="text-gray-400">Overs Bowled:</span>
                    <input
                      type="number"
                      className="form-input mt-1 block w-full"
                      value={overs}
                      onChange={(e) => setOvers(parseInt(e.target.value))}
                    />
                  </label>
                </div>
                <div>
                  <p className="text-white text-2l font-bold">Economy Rate: {calculateEconomyRate().toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm max-h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 overflow-y-auto">
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bowling Average</h5>
                <div>
                  <label className="block mb-2">
                    <span className="text-gray-400">Wickets Taken:</span>
                    <input
                      type="number"
                      className="form-input mt-1 block w-full"
                      value={wicketsTaken}
                      onChange={(e) => setWicketsTaken(parseInt(e.target.value))}
                    />
                  </label>
                </div>
                <div>
                  <p className="text-white text-2l font-bold">Bowling Average: {calculateBowlingAverage().toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Performance;
