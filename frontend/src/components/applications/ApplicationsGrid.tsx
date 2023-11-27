
import '../../utils/styles/applications.scss';
import ApplicationsCard from './ApplicationsCard';


interface ApplicationsGridProps {
  applications: TUserApplicationsRes;
  user: TUser | undefined;
}

const ApplicationsGrid = ({ user, applications }: ApplicationsGridProps) => {
  return (
    <div className="applications-grid">
      {applications.units.map((unit, index) => (
        <ApplicationsCard key={index} unit={unit} user={user} />
      ))}
    </div>
  );
};

export default ApplicationsGrid;



