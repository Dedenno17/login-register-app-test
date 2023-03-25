// type of user
export interface User {
  expiresOn: string;
  token: string;
  user: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    role: string[];
    userType: {
      color: string;
      id: string;
      value: string;
    };
  };
  userId: string;
}

// type of experience
export interface Experience {
  _id: string;
  companyName: string;
  country: string;
  createdBy: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    role: string[];
    userType: {
      color: string;
      id: string;
      value: string;
    };
  };
  currentJob: boolean;
  description: string;
  end: string | null;
  jobTitle: string;
  start: string;
}
