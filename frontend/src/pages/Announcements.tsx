import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/layout/Navbar";
import { t } from "i18next";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

interface Announcement {
  id: string;
  message: string;
  explination: string;
  user: string;
  createdBy: string;
  createdAt: string;
  imageUrl: string;
}

export const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ssc-fsmvu-backend.vercel.app/api/v1/announcements")
      .then((response) => {
        console.log(response.data);
        setAnnouncements(response.data);
      })
      .catch((error) => console.error("Error fetching announcements:", error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <>

<Helmet>
<title>{t("AnnouncementHelmet")}</title>
        <meta name="description" content="Welcome to the home page of My Website" />
        <meta name="keywords" content="home, website, React, helmet" />
      


</Helmet>
    
    <div className="flex  justify-center min-h-screen p-6 mt-32 ">
      <Navbar />
     

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin "></div>
        </div>
      ) : (
        announcements.map((announcement) => (
          
          <div className="announcementContainer flex-col justify-center text-center">
            <div className="headerNews">
            <h1 className="text-2xl font-bold mb-6">{t("Announcements")}</h1>

            </div>

<div
            key={announcement.id}
            className="p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 w-full max-w-lg text-center bg-red-400"
          >
            <p className="text-lg font-medium text-blue-600">{announcement.message}</p>
            <p className="text-lg font-medium text-gray-600">{announcement.explination}</p>
            <p className="text-sm text-gray-400">
              {t("CreatedBy")} {announcement.createdBy} {t("ONdate")} {new Date(announcement.createdAt).toLocaleDateString()}
            </p>
            {announcement.imageUrl && (
              <div className="flex justify-center mt-4">
                <img
                  src={announcement.imageUrl}
                  alt="Announcement"
                  className="rounded-lg w-3/4 h-auto"
                />
              </div>
            )}
          </div>


          </div>
          
       
        ))
      )}
    </div>
    <Footer/>
    </>
    
  );
};
