import { useState } from "react";
import PersonalForm from "./components/PersonalDetails";
import Preview from "./components/preview/Preview";
import type { PersonalDetails } from "@/interfaces";

function App() {
  const [personalData, setPersonalData] = useState<PersonalDetails>({
    fullName: "Khanh Le",
    email: "khanhle@gmail.com",
    phoneNumber: "+84 123456",
    address: "Hanoi, VN",
  });

  function handleChangePersonalDetails(key: string, value: string): void {
    console.log("key", key);
    console.log("value", value);
    setPersonalData({
      ...personalData,
      [key]: value,
    });
  }

  return (
    <>
      <div className="app flex gap-[24px] margin-auto max-w-[1500px] py-8 px-6 w-full">
        <div className="edit-side flex grow flex-wrap gap-[24px] h-fit max-w-[750px]">
          <PersonalForm
            data={personalData}
            handleChangePersonalDetails={handleChangePersonalDetails}
          />
        </div>
        <Preview personalData={personalData} />
      </div>
    </>
  );
}

export default App;
