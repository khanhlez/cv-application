import { Mail, PhoneCall, MapPin } from "lucide-react";
import type { PersonalDetailsSectionProps } from "@/interfaces";

export const PersonalDetailsSection = ({ personalInfo }: PersonalDetailsSectionProps) => {
  const { fullName, email, phoneNumber, address } = personalInfo;

  return (
    <div className="bg-black text-white w-full px-9 py-6 personal-info">
      <h1 className="resume-name text-center text-3xl font-bold mb-6">
        {fullName}
      </h1>
      <div className="flex items-center justify-center gap-[18px]">
        <div className="flex items-center">
          <Mail />
          <span className="ml-2">{email}</span>
        </div>
        <div className="flex items-center">
          <PhoneCall />
          <span className="ml-2">{phoneNumber}</span>
        </div>
        <div className="flex items-center">
          <MapPin />
          <span className="ml-2">{address}</span>
        </div>
      </div>
    </div>
  );
};
