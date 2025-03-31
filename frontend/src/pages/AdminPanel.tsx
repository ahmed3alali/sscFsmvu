import React, { useState, useEffect } from "react";
import AdminNavbar from "@/components/layout/AdminNavbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../src/Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../src/Redux/store";
import { t } from "i18next";
import { Helmet } from "react-helmet-async";

export const AdminPanel: React.FC = () => {
  const [message, setMessage] = useState("");
  const [explination, setExplination] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(false); // For form submission loading
  const [fetching, setFetching] = useState(true); // For fetching announcements
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios.get(`${API_URL}/api/v1/announcements`)
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => console.error("Error fetching announcements:", error))
      .finally(() => setFetching(false));
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = "";

    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "sscfsmvu");

      try {
        const uploadResponse = await axios.post(
          "https://api.cloudinary.com/v1_1/dyde3lmte/image/upload",
          formData
        );
        imageUrl = uploadResponse.data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        setLoading(false);
        return;
      }
    }

    try {
      await axios.post(`${API_URL}/api/v1/announcements`, {
        message,
        explination,
        createdBy: user?.name,
        imageUrl,
      });
      alert(t("AnnouncementAdded"));
      setMessage("");
      setImage(null);
      setExplination("");

      const response = await axios.get(`${API_URL}/api/v1/announcements`);
      setAnnouncements(response.data);
    } catch (error) {
      console.error("Error adding announcement:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAnnouncement = async (id: string) => {
    try {
      const response = await axios.delete(`${API_URL}/api/v1/announcement/${id}`);
    
      setAnnouncements((prev) => prev.filter((announcement) => announcement._id !== id));
      alert(t("announcementDeleted"));
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  return (
    <>

<Helmet>
<title>{t("AdminPanelHelmet")}</title>
        <meta name="description" content="Welcome to the home page of My Website" />
        <meta name="keywords" content="home, website, React, helmet" />
      


</Helmet>
      <AdminNavbar />
      <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg mt-[50px]">
        <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
        <h1 className="text-xl font-bold mb-4">
          {t("Welcome")}, {user ? user.name : "SERVER ERROR, PLEASE INFORM DEVELOPER"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2"> {t("AddAnnouncement")}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                className="w-full p-2 border rounded"
                rows={3}
                placeholder={t("AnouncementTitle")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <textarea
                className="w-full p-2 border rounded"
                rows={3}
                placeholder={t("AnouncementExp")}
                value={explination}
                onChange={(e) => setExplination(e.target.value)}
                required
              ></textarea>

              <input
                className="w-full p-2 border rounded"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
                    </svg>
                    {t("Loading")}
                  </div>
                ) : (
                  t("AddAnnouncement")
                )}
              </button>
            </form>
          </div>

          <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2"> {t("ManageAnouncements")}</h2>
            {fetching ? (
              <p className="text-center text-gray-500">{t("Loading")}...</p>
            ) : announcements.length > 0 ? (
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement._id} className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
                    <p className="text-lg font-medium">{announcement.message}</p>
                    <p className="text-sm text-gray-400">
                      {t("CreatedBy")} {announcement.createdBy} {t("ONdate")} {new Date(announcement.createdAt).toLocaleDateString()}
                    </p>
                    {announcement.imageUrl && (
                      <img
                        src={announcement.imageUrl}
                        alt="Announcement"
                        className="w-full rounded-lg mt-2"
                        style={{ height: "auto", borderRadius: "12px" }}
                      />
                    )}
                    <button
                      className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleDeleteAnnouncement(announcement._id)}
                    >
                      {t("DeleteAnnouncement")}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">{t("NoAnnouncementsAv")}</p>
            )}
          </div>

          <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">{t("WebsiteSettings")}</h2>

<p>UNDER DEVELOPMENT 🛠️👷‍♂️.. COMING SOON</p>

           
          </div>
          
        </div>
        <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10">
              {t("Logout")}
            </button>
      </div>
    </>
  );
};
