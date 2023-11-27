  type TUserApplications = {
    userId: string;
    units: TResidentialUnit[]; // Specify the type of elements in the array
    imageURL: string[];
    title: string;
    city: string;
    street: string;
    zipcode: string;
    status: string;
};

  type TNewApplication = {
    userId: string;
    units: TResidentialUnit[];
  };

  type TUserApplicationsRes = {
    userId: string,
    status: string,
    units: TResidentialUnit[]; 
  };