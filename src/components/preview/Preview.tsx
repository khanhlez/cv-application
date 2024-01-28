import { PersonalDetailsSection } from "./PersonalDetailsSection.tsx";
import EducationSection from "@/components/preview/EducationSection.tsx";
import ExperienceSection from "@/components/preview/ExperienceSection.tsx";
import type { Resume} from "@/interfaces";

const Preview = ({ personalInfo, sections }: Resume) => {
  return (
    <div className="shadow-md h-[29.7cm] w-[21cm] preview-container">
      <div className="resume top bg-white grid h-full w-full sticky top-0 auto-rows-auto">
        <PersonalDetailsSection personalInfo={personalInfo} />
        <div>
          <EducationSection items={sections.educations} />
          <ExperienceSection items={sections.experiences}/>
        </div>
      </div>
    </div>
  );
};

export default Preview;
