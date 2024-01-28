export type SectionType = 'educations' | 'experiences';

export interface PersonalInfo {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface Resume {
  personalInfo: PersonalInfo;
  sections: {
    educations: Education[];
    experiences: Experience[];
  }
}

export interface Education {
  degree: string;
  schoolName: string;
  location: string;
  startDate: string;
  endDate: string;
  isCollapsed: boolean;
  isHidden: boolean;
  id: string;
}

export interface Experience {
  companyName: string;
  positionTitle: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  isCollapsed: boolean;
  isHidden: boolean;
  id: string;
}

export interface PersonalDetailsSectionProps {
  personalInfo: PersonalInfo
}

export interface ChangeDataPayload {
  type: string;
  key: string;
  value: string;
}

export interface PersonalDetailsProps {
  data: PersonalInfo;
  handleChange(payload: ChangeDataPayload): void;
}

export interface EducationProps {
  items: Education[];
  handleChangeData(payload: Education, type: string): void;
  handleDeleteItem(id: string, sectionType: string): void;
}

export interface EducationFormProps {
  selectedItem: Education;
  toggleDisplayForm(): void;
  handleChangeInfo(payload: Education): void;
  handleDeleteItem(id: string, sectionType: string): void;
}

export interface ExperienceProps {
  items: Experience[];
  handleChangeData(payload: Experience, type: string): void;
  handleDeleteItem(id: string, sectionType: string): void;
}

export interface ExperienceFormProps {
  selectedItem: Experience;
  toggleDisplayForm(): void;
  handleChangeInfo(payload: Experience): void;
  handleDeleteItem(id: string, sectionType: string): void;
}

export interface EducationPreviewProps {
  items: Education[];
}

export interface ExperiencePreviewProps {
  items: Experience[];
}
