import { useState, useEffect } from 'react';
import ApiService from '../../../../ApiServices/ApiService';
import { apiPaths } from '../../../../ApiServices/ApiPaths';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../../../Store/loader.slice';

const useProfile = () => {
    const dispatch = useDispatch()
    const [activeSection, setActiveSection] = useState(0);
    const user = useSelector((state) => state.user?.user);
    const [isLoading,setIsLoading]=useState(false)

    const [formData, setFormData] = useState({
        // Profile Details
        fullName: '',
        email: '',
        mobile: '',

        // Personal Details
        gender: '',
        dob: '',
        subLocation: '',
        maritalStatus: '',
        language: '',
        englishFluency: '',
        currentAddress: '',
        permanentAddress: '',

        // KYC Details
        panCardNumber: '',
        panCardFile: null,
        drivingLicenseNumber: '',
        drivingLicenseFile: null,
        passPortNumber: '',
        passPortFile: null,

        // Job Profile
        workExperience: '',
        resumeFile: null,
        currentCompany: '',
        previousCompany: '',
        role: '',
        subRole: '',
        industry: '',
        jobType: '',
        prefferedLocation: '',

        // Education Details
        course: '',
        passingYear: '',
        marks: ''
    });

    const [errors, setErrors] = useState({});

    const getDataFromSessionStorage=()=>{
        const savedData = JSON.parse(sessionStorage.getItem('profileData'));
        console.log(savedData)
        if (savedData) {
            setFormData(prev => ({
                ...prev,
                ...savedData
            }));
        }
    }

    const fetchProfile =async()=>{
        try{
            // dispatch(setLoading(true))
            const response = await ApiService({
                method: 'GET',
                endpoint: apiPaths.candidate.getProfile
            })
            const fetchedProfile = response.response
            setFormData(prev => ({
                ...prev,
                ...fetchedProfile,
                ...fetchedProfile.profile,
                language: fetchedProfile.profile.language.join(', ')
            }));
            console.log("fetched profile : ",formData)
            // console.log("IS  PROFILE COMPLETE : ",fetchedProfile?.isProfileComplete)
        }catch(error){
            console.log("error fetching profile : ",error)
        }finally{
            // dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    const validateSection = (section) => {
        const newErrors = {};
        
        switch(section) {
            case 0: // Personal Details
                if (!formData.gender) newErrors.gender = 'Gender is required';
                if (!formData.dob) newErrors.dob = 'Date of birth is required';
                if (!formData.subLocation) newErrors.subLocation = 'Sub location is required';
                if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital status is required';
                if (!formData.language) newErrors.language = 'Languages are required';
                if (!formData.englishFluency) newErrors.englishFluency = 'English fluency is required';
                if (!formData.currentAddress) newErrors.currentAddress = 'Current address is required';
                if (!formData.permanentAddress) newErrors.permanentAddress = 'Permanent address is required';
                break;

            case 1: // KYC Details
                let hasAtLeastOneDocument = false;
                
                if (formData.panCardNumber || formData.panCardFile) {
                    if (!formData.panCardNumber) newErrors.panCardNumber = 'PAN number is required with PAN card file';
                    if (!formData.panCardFile || 
                        (!formData.panCardFile.includes("https://res.cloudinary.com") && 
                         !(formData.panCardFile instanceof File))) {
                        newErrors.panCardFile = 'PAN card file is required with PAN number';
                    }
                    hasAtLeastOneDocument = true;
                }
                
                if (formData.drivingLicenseNumber || formData.drivingLicenseFile) {
                    if (!formData.drivingLicenseNumber) newErrors.drivingLicenseNumber = 'License number is required with license file';
                    if (!formData.drivingLicenseFile ||
                         (typeof formData.drivingLicenseFile === 'string' && !formData.drivingLicenseFile.includes("https://res.cloudinary.com") && 
                         !(formData.drivingLicenseFile instanceof File))) {
                        newErrors.drivingLicenseFile = 'License file is required with license number';
                    }
                    hasAtLeastOneDocument = true;
                }
                
                if (formData.passPortNumber || formData.passPortFile) {
                    if (!formData.passPortNumber) newErrors.passPortNumber = 'Passport number is required with passport file';
                    if (!formData.passPortFile || 
                        (typeof formData.passPortFile === 'string' && !formData.passPortFile.includes("https://res.cloudinary.com") &&
                        !(formData.passPortFile instanceof File))) {
                        newErrors.passPortFile = 'Passport file is required with passport number';
                    }
                    hasAtLeastOneDocument = true;
                }

                if (!hasAtLeastOneDocument) {
                    newErrors.documents = 'At least one complete document set is required (PAN/License/Passport)';
                }
                break;

            case 2: // Job Profile
                if (!formData.workExperience) newErrors.workExperience = 'Work experience is required';
                if (!formData.resumeFile ||
                    (typeof formData.resumeFile === 'string' && !formData.resumeFile.includes("https://res.cloudinary.com") &&
                     !(formData.resumeFile instanceof File))) {
                    newErrors.resumeFile = 'Resume is required';
                }
                if (!formData.currentCompany) newErrors.currentCompany = 'Current company is required';
                if (!formData.role) newErrors.role = 'Role is required';
                if (!formData.industry) newErrors.industry = 'Industry is required';
                if (!formData.jobType) newErrors.jobType = 'Job type is required';
                if (!formData.prefferedLocation) newErrors.prefferedLocation = 'Preferred location is required';
                break;

            case 3: // Education Details
                if (!formData.course) newErrors.course = 'Course is required';
                if (!formData.passingYear) newErrors.passingYear = 'Passing year is required';
                if (!formData.marks) newErrors.marks = 'Marks are required';
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;
        
        setFormData(prev => {
            const newData = {
                ...prev,
                [name]: newValue
            };
            if(type!=='file'){
                sessionStorage.setItem('profileData', JSON.stringify(newData));
            }
            console.log("Form Data ON CHange : ",formData)
            return newData;
        });

        // Clear related errors
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleNext = () => {
        if (validateSection(activeSection)) {
            setActiveSection(prev => prev + 1);
            console.log("Current Index : ",activeSection)
            window.scrollTo(0, 0);
        }
    };

    const handlePrevious = () => {
        setActiveSection(prev => prev - 1);
        window.scrollTo(0, 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Handle Submit called ",activeSection)
        if (!validateSection(activeSection)) {
            return;
        }

        const formDataToSubmit = new FormData();

        Object.keys(formData).forEach(key => {
            if (formData[key] !== null) {
                if (formData[key] instanceof File) {
                    formDataToSubmit.append(key, formData[key]);
                } else {
                    formDataToSubmit.append(key, String(formData[key]));
                }
            }
        });

        try {
            dispatch(setLoading(true))
            setIsLoading(true)
            const response = await ApiService({
                method: 'POST',
                endpoint: apiPaths.candidate.updateProfile,
                data: formDataToSubmit,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const fetchedProfile = response.response.candidate
            setFormData({...fetchedProfile,language: fetchedProfile.language.join(', ')});

            console.log("Profile Updated : ",response)
            toast.success("Profile updated successfully!");
            // Navigate()
        } catch (error) {
            toast.error(error?.response?.data?.message || "Error updating profile");
        } finally {
            dispatch(setLoading(false))
            setIsLoading(false)
        }
    };

    return {
        formData,
        errors,
        activeSection,
        isLoading,
        isProfileCompleted:formData?.isProfileCompleted,
        handleChange,
        handleNext,
        handlePrevious,
        handleSubmit,
        setActiveSection,
        validateSection,
    };
};

export default useProfile;