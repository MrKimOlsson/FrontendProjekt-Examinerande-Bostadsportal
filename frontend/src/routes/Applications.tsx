import { useEffect, useState } from "react";
// import { getLoggedInUser } from "../api/handleUsers";
import ApplicationsGrid from "../components/applications/ApplicationsGrid";
import ApplicationsText from "../components/applications/ApplicationsText";
import { getUserApplications } from "../api/getUserApplications";
import { useAuth } from "../context/authContext";


const Applications = () => {
  // const [token, setToken] = useState<string | null>(null);
  // const [user, setUser] = useState<TUser>();
  const [applications, setApplications] = useState<TUserApplicationsRes | undefined>(undefined);

  const { state } = useAuth();
  const { user } = state;

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (storedToken) {
  //     // setToken(storedToken);
  //     getLoggedInUser(storedToken)
  //       .then((userData) => {
  //         setUser(userData);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user:", error);
  //       });
  //   }
  // }, []);

  useEffect(() => {
    async function fetchApplications() {
      if (user) {
        try {
          const userId = user._id;
          const userApplications = await getUserApplications(userId);
          setApplications(userApplications);
        } catch (error) {
          console.error("Error fetching applications:", error);
        }
      }
    }

    fetchApplications();
  }, [user]);

  return (
    <div className="container">
      <ApplicationsText />
      {applications ? (
        <ApplicationsGrid applications={applications} user={user} />
      ) : (
        <p className="error-text">Du har inte gjort några ansökningar än..</p>
      )}
    </div>
  );
};

export default Applications;