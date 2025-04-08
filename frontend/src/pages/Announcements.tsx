import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { t } from "i18next";
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
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/api/v1/announcements`)
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
        <meta name="description" content="Welcome to the announcements page" />
        <meta name="keywords" content="announcements, updates, website, React, helmet" />
      </Helmet>

      <Navbar />

      <div className="flex flex-col items-center min-h-screen p-6 mt-20 space-y-6">
        <h1 className="text-3xl font-bold mb-8">{t("Announcements")}</h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="flex flex-col items-center text-center w-full"
            >
              <div className="p-6 border rounded-2xl shadow-md bg-gray-100 dark:bg-gray-800 w-full max-w-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                
                {announcement.imageUrl && (
                  <img
                    src={announcement.imageUrl}
                    alt="Announcement"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}

                <p className="text-xl font-semibold text-blue-600 mb-2">
                  {announcement.message}
                </p>

                <p className="text-lg text-gray-600 mb-4">
                  {announcement.explination}
                </p>

                <p className="text-sm text-gray-400">
                  {t("CreatedBy")}: {announcement.createdBy} •{" "}
                  {new Date(announcement.createdAt).toLocaleDateString()}
                </p>

              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
};
