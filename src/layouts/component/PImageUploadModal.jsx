
import React, { useState } from "react";
import { uploadImage } from "../../api/api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function PImageUploadModal({ handleCloseModal, setPlayerStats }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [description, setDescription] = useState(null);
    const [playerName, setPlayerName] = useState(""); // State for player name input
    const [battingStyle, setBattingStyle] = useState(""); // State for batting style input

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setUploadedImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            if (!selectedFile) {
                console.error("No file selected.");
                return;
            }
    
            // Upload the selected file
            const response = await uploadImage(selectedFile);
    
            // Log the response to verify data
            console.log("Response from server:", response);
    
            // Update states based on the response
            setPrediction(response.prediction);
            setPlayerStats(response.playerStats);
            setUploadedImage(response.uploadedImage); // Update uploadedImage state with the image URL
            
            // Ensure description is correctly set
            setDescription(response.description);
            console.log("Description set in state:", response.description);
            
    
            // Update playerName and battingStyle states with the received data
            setPlayerName(response.player_name); 
            setBattingStyle(response.batting_style); 
    
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };
    
    
    // const handleGenerateReport = () => {
    //     const shotName = prediction;
    //     const descriptionText = description || "No description available";
    //     const playerNameText = playerName ? `Player Name: ${playerName}` : "";
    //     const battingStyleText = battingStyle ? `Batting Style: ${battingStyle}` : "";
        
    //     const pdf = new jsPDF();
        
    //     // Set the report heading
    //     pdf.setFont("helvetica", "bold");
    //     pdf.setFontSize(16);
    //     pdf.text("Shot Recognition Report", pdf.internal.pageSize.width / 2, 10, { align: "center", underline: true });
        
    //     // Set the text properties back to normal
    //     pdf.setFont("helvetica", "normal");
    //     pdf.setFontSize(12);
        
    //     pdf.text(`Shot Name: ${shotName}`, 10, 30);
    //     if (playerNameText) pdf.text(playerNameText, 10, 40);
    //     if (battingStyleText) pdf.text(battingStyleText, 10, 50);
    //     pdf.text(`Description: ${descriptionText}`, 10, 60);
        
    //     const imgData = uploadedImage;
    //     pdf.addImage(imgData, 'JPEG', 10, 70, 180, 100);
        
    //     pdf.save("report.pdf");
    // };
    
    return (
        <div id="authentication-modal" tabIndex="-1" aria-hidden="true"
             className="fixed top-0 right-0 left-0 z-50 flex justify-center items-start w-full h-full overflow-y-auto overflow-x-hidden">
            <div className="relative p-8 w-full max-w-lg max-h-full">
                <div className="relative bg-blue-100 rounded-lg shadow-md dark:bg-gray-200">
                    <div className="flex items-center justify-between p-6 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-800">
                            Upload Your Image Here
                        </h3>
                        <button type="button"
                                className="text-gray-600 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-400 dark:hover:text-gray-900"
                                data-modal-hide="authentication-modal" onClick={handleCloseModal}>
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-6">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-600">
                                    Image
                                </label>
                                <input type="file" name="img_file" id="img_file"
                                       className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
                                       placeholder="name@company.com" required onChange={handleFileChange}/>
                            </div>

                            <button type="submit" id="upload-image"
                                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                                Predict Shot
                            </button>

                            {uploadedImage && (
                                <div>
                                    <img src={uploadedImage} alt="Uploaded" className="w-full h-auto"/>
                                </div>
                            )}

                            {prediction && (
                                <div>
                                    <p className="text-gray-900 dark:text-gray-800">
                                        Prediction: {prediction}
                                    </p>
                                </div>
                            )}

                            {/* <div>
                                <label htmlFor="playerName" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-600">
                                    Player Name
                                </label>
                                <input type="text" id="playerName" name="playerName" value={playerName} onChange={(e) => setPlayerName(e.target.value)} className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800" />
                            </div>
                            
                            <div>
                                <label htmlFor="battingStyle" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-600">
                                    Batting Style
                                </label>
                                <input type="text" id="battingStyle" name="battingStyle" value={battingStyle} onChange={(e) => setBattingStyle(e.target.value)} className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800" />
                            </div>

                            <button type="button" onClick={handleGenerateReport}
                                    className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">
                                Generate Report
                            </button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
