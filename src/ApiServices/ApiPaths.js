export const apiPaths = {
    sendOtp:"auth/send-otp",
    checkToken:"auth/verify-token",
    logout:"auth/logout",

    candidate: {
      register: "candidate/register",
      login: "candidate/login",
      updateProfile: "candidate/update-profile",
      getProfile:"candidate/get-profile",
    },
    employer: {
      register: "employer/register",
      login: "employer/login",
      updateProfile: "employer/update-profile",
      getProfile:"employer/get-profile",
    },
    jobs: {
      fetchJobs:"jobs/get-jobs",
      listJob: "jobs/list-job",
      deleteJob: "jobs/delete-job",
    },
    application:{
      createApplication:"applications/create-application",
      // getApplications:"applications/get-applications",
      getApplications : "applications/job-applicants",
      getApplicantDetails : "applications/job-applicants-details",
    }
  };