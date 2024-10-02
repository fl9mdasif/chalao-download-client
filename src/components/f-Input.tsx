/* eslint-disable @typescript-eslint/no-explicit-any */


"use client";

import Link from "next/link";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { useDownloadFacebookMutation } from "@/redux/api/downloadAPi";
import { modifyPayload } from "@/utils/modifyPayload";
import { useState } from "react";

import Image from "next/image";
import { FacebookDownloadResponse } from "@/types";


export function FacebookInput() {
  const placeholder1 = ["🔵 Paste Your Facebook video link"];

  const [facebookUrl, setFacebookUrl] = useState(""); // State to hold the input value
  const [fbResponse, setFbResponse] = useState<FacebookDownloadResponse | null>(null) // State to hold the input value

  // const [facebookLinks, setFacebookLinks] = useState<FacebookDownloadLinks | null>(null); // State to hold the URLs
  const [loading, setLoading] = useState(false); // State to handle loading status
  const [downloadFacebook] = useDownloadFacebookMutation();

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFacebookUrl(e.target.value); // Update state with input value
  };

  // Handle form submit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the URL is valid before sending the request
    if (!facebookUrl) {
      console.error("No Facebook video URL provided");
      return;
    }

    // Prepare the payload
    const facebookData = { url: facebookUrl };
    const data = modifyPayload(facebookData);

    // console.log("Modified Payload:", data);


    setLoading(true); // Set loading to true when request starts

    try {
      // Send the request to download the Facebook video
      const res: any = await downloadFacebook(data).unwrap();
      setFbResponse(res.data);

      console.log('client response', fbResponse)
    } catch (err: any) {
      console.error("Error downloading Facebook video:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center px-4">
      {/* Input field with animated placeholders */}
      <PlaceholdersAndVanishInput
        placeholders={placeholder1}
        onChange={handleChange}
        onSubmit={onSubmit}
      />

      {/* Loading indicator */}
      {loading ? (
        <div className="flex items-center justify-center py-4">
          <svg
            className="animate-spin h-8 w-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0 1 8-8V4a10 10 0 0 0 0 16v-4a8 8 0 0 1-8-8z"
            ></path>
          </svg>
        </div>
      ) : (
        // Display the download URLs as buttons
        <div>
          {fbResponse ? (
            <div>
              <div className="flex flex-col justify-center items-center ">

                <p className="w-96 text-lg font-bold  font-4 mb-4 mt-4 ">{fbResponse.title}</p>
                <Image
                  src={fbResponse?.thumbnail}
                  height={200}
                  width={350}
                  alt="Video Thumbnail"
                  className=""
                />
              </div>
              <div className="flex flex-wrap justify-center ">
                {fbResponse?.links["Download High Quality"] && (
                  <a
                    href={fbResponse?.links["Download High Quality"]}
                    download
                    className="bg-blue-500 text-lg font-bold text-white py-2 px-3 rounded m-2"
                  >
                    Download High Quality
                  </a>
                )}
                {fbResponse?.links["Download Low Quality"] && (
                  <a
                    href={fbResponse?.links["Download Low Quality"]}
                    download
                    className="bg-blue-500 text-lg font-bold text-white py-2 px-3 rounded m-2"
                  >
                    Download Low Quality
                  </a>
                )}
              </div>
            </div>
          ) : (
            <p>No URLs available.</p>
          )}
        </div>
      )}
      <p className="max-w-4xl mt-12 mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Your one-stop solution for quick video downloads from Facebook, YouTube, and more. Save your favorite content in just a few clicks, simple, fast, and hassle-free. Start downloading today, totally free.
      </p>

      {/* Button to navigate to YouTube video downloader */}
      <span className="flex mb-24 items-center justify-center text-white h-12 rounded-lg bg-red-600 w-2/4 text-center font-bold cursor-pointer">
        <Link href="/youtube">Download YouTube video</Link>
      </span>
    </div>

  )
}