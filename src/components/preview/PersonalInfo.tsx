import { Mail, PhoneCall, MapPin } from "lucide-react";

export const PersonalInfo = ({ personalInfo }) => {
  const { fullName, email, phoneNumber, address } = personalInfo;

  return (
    <div className="resume top bg-white grid h-full w-full sticky top-0 auto-rows-auto">
      <div className="bg-black text-white w-full px-9 py-6 personal-info">
        <h1 className="resume-name text-center text-3xl font-bold mb-6">
          {fullName}
        </h1>
        <div className="flex items-center justify-center gap-[18px]">
          <div className="flex items-center contact-info">
            <Mail />
            <span className="ml-2">{email}</span>
          </div>
          <div className="flex items-center contact-info">
            <PhoneCall />
            <span className="ml-2">{phoneNumber}</span>
          </div>
          <div className="flex items-center contact-info">
            <MapPin />
            <span className="ml-2">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
