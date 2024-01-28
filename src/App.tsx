import { useState } from "react";
import PersonalForm from "./components/PersonalDetails";
import Preview from "./components/preview/Preview";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import exampleData from "./example.data.ts";
import {Resume, ChangeDataPayload, Education, Experience, SectionType} from "@/interfaces";

function App() {
  const [resume, setResume] = useState<Resume>(exampleData);

  function handleChangeData({type, key, value} : ChangeDataPayload): void {
    setResume({
      ...resume,
      [type]: {
        ...resume.personalInfo,
        [key]: value,
      },
    });
  }

  function handleChangeItem(payload: Education | Experience, type: SectionType) {
    setResume(prevState => {
      const section = prevState.sections[type];
      const index = section.findIndex(item => item.id === payload.id)
      if (index > -1) {
        section[index] = payload
        return prevState
      }

      return {
        ...prevState,
        sections: {
          ...prevState.sections,
          [type]: [
            ...prevState.sections[type],
            payload
          ]
        }
      }
    })
  }

  function handleDeleteItem(id: string, sectionType: SectionType) {
    setResume(prevState => {
      const section: Education[] | Experience[] = prevState.sections[sectionType]
      const index = section.findIndex((item: Education | Experience) => item.id === id)
      if (index > -1) {
        section.splice(index, 1)
        return prevState
      }

      return prevState
    })
  }

  return (
    <>
      <div className="app flex gap-[24px] m-auto max-w-[1500px] py-8 px-6 w-full">
        <div className="edit-side flex grow flex-wrap gap-[24px] h-fit max-w-[750px]">
          <PersonalForm
            data={resume.personalInfo}
            handleChange={handleChangeData}
          />
          <EducationSection
            items={resume.sections.educations}
            handleChangeData={handleChangeItem}
            handleDeleteItem={handleDeleteItem}/>
          <ExperienceSection
            items={resume.sections.experiences}
            handleChangeData={handleChangeItem}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
        <Preview personalInfo={resume.personalInfo} sections={resume.sections} />
      </div>
    </>
  );
}

export default App;
