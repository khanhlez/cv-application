import { PersonalInfo } from "./PersonalInfo";

const Preview = ({ personalData }) => {
  return (
    <div className="shadow-md h-[29.7cm] w-[21cm] preview-container">
      <PersonalInfo personalInfo={personalData} />
    </div>
  );
};

export default Preview;
