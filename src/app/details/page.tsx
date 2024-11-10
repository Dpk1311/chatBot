"use client";

import { useState } from "react";

export default function Details() {
  const [answer, setAnswer] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<
    { question: string; answer: string }[]
  >([]);
  const [file, setFile] = useState<File | null>(null);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    "Enter Account Holder Name",
    "Enter Account Number",
    "Enter Account Holder Email ID",
    "Enter Account Holder PAN Number",
    "Enter your Business Name",
    "What is your expected revenue",
    "What is the exact amount of loan funding you are seeking",
    "Do you have any assets that can offer as collateral",
    "Enter your bank Statement",
    "Enter your Loan Statement",
  ];

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      questions[currentQuestionIndex] !== "Enter your bank Statement"
    ) {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { question: questions[currentQuestionIndex], answer },
      ]);
      setAnswer("");
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          question: questions[currentQuestionIndex],
          answer: uploadedFile.name,
        },
      ]);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  return (
    <div className="bg-gray-600 h-screen">
      <div className="w-[60%] h-[90%] mx-auto flex flex-col justify-end space-y-4">
        <div className="overflow-y-auto space-y-4 p-4 h-[70%]">
          {answers.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-2">
                <span>🤖</span>
                <p className="text-white">{item.question}</p>
              </div>
              <div className="bg-white text-black p-3 rounded-full">
                {item.answer}
              </div>
            </div>
          ))}
        </div>

        {showResults ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-4">
              <span>🤖</span>
              <div className="bg-white text-black p-3 rounded-full">
                CREDIT SCORE
              </div>
            </div>
            <div className="bg-white text-black p-3 rounded-full text-center w-[50%]">
              752/900 : Fair
            </div>

            <div className="flex items-center justify-between space-x-4">
              <span>🤖</span>
              <div className="bg-white text-black p-3 rounded-full">
                FINANCIAL REPORT
              </div>
            </div>
            <a
              href="/docu.pdf"
              download="Financial_Report.pdf"
              className="bg-gray-300 text-black p-3 rounded-full flex items-center justify-between w-[50%]"
            >
              <span>Financial Report.pdf</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1h-3v-2h2V4H5v8h2v2H4a1 1 0 01-1-1V3zm9 6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 002 0V9h2a1 1 0 001-1z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div className="flex items-center justify-between space-x-4">
              <span>🤖</span>
              <div className="bg-white text-black p-3 rounded-full">
                BUSINESS DPR
              </div>
            </div>
            <a
              href="/dpr.pdf"
              download="Business_DPR.pdf"
              className="bg-gray-300 text-black p-3 rounded-full flex items-center justify-between w-[50%]"
            >
              <span>Business DPR.pdf</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1h-3v-2h2V4H5v8h2v2H4a1 1 0 01-1-1V3zm9 6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 002 0V9h2a1 1 0 001-1z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-4">
              <span>🤖</span>
              <p className="text-white">{questions[currentQuestionIndex]}</p>
            </div>
            {questions[currentQuestionIndex] === "Enter your bank Statement" ||
            questions[currentQuestionIndex] === "Enter your Loan Statement" ? (
              <input
                type="file"
                onChange={handleFileUpload}
                className="w-[100%] outline-none p-3 rounded-full mt-5 text-gray-500 bg-white"
                value={inputValue ?? ""}
              />
            ) : (
              <input
                className="w-[100%] outline-none p-3 rounded-full mt-5 text-black placeholder:text-gray-500"
                type="text"
                placeholder="Enter Message Here"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
