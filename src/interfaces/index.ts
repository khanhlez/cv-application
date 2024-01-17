export interface PersonalDetails {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface PersonalDetailsProps {
  data: PersonalDetails;
  handleChangePersonalDetails(key: string, value: string): void;
}

export interface PreviewProps {}
