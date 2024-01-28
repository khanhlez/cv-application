import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import {FormEvent, useEffect, useState} from "react";
import uniqid from "uniqid";
import { Trash2 } from 'lucide-react';
import { Education, EducationFormProps } from "@/interfaces";
import { Button } from "@/components/ui/button.tsx";

const EducationForm = ({ selectedItem, toggleDisplayForm, handleChangeInfo, handleDeleteItem }: EducationFormProps) => {
  const [education, setEducation] = useState<Education>({
    degree: "",
    schoolName: "",
    location: "",
    startDate: "",
    endDate: "",
    isCollapsed: true,
    isHidden: false,
    id: "",
  });

  const handleGoBack = () => {
    toggleDisplayForm()
  }
  const handleChangeEducationInfo = (
    e: FormEvent<HTMLInputElement>,
    dataName: string,
  ) => {
    setEducation({
      ...education,
      [dataName]: e.currentTarget.value
    })
  };
  const handleSave = () => {
    handleChangeInfo(education)
  }

  const handleDelete = () => {
    handleDeleteItem(education.id, 'educations')
    toggleDisplayForm()
  }

  useEffect(() => {
    if (selectedItem.id) {
      setEducation(selectedItem)
    } else {
      setEducation({
        ...education,
        id: uniqid()
      })
    }
  }, [selectedItem])

  return (
    <>
      <div className="w-full px-1 mb-4">
        <Label htmlFor="schoolName">School</Label>
        <Input
          type="text"
          id="schoolName"
          placeholder="School Name"
          value={education.schoolName}
          onChange={(e) => handleChangeEducationInfo(e, "schoolName")}
        />
      </div>
      <div className="w-full px-1 mb-4">
        <Label htmlFor="schoolName">Degree</Label>
        <Input
          type="text"
          id="degree"
          placeholder="Degree"
          value={education.degree}
          onChange={(e) => handleChangeEducationInfo(e, "degree")}
        />
      </div>
      <div className="w-full px-1 mb-4">
        <Label htmlFor="schoolName">Start Date</Label>
        <Input
          type="text"
          id="startDate"
          placeholder="Start Date"
          value={education.startDate}
          onChange={(e) => handleChangeEducationInfo(e, "startDate")}
        />
      </div>
      <div className="w-full px-1 mb-4">
        <Label htmlFor="schoolName">End Date</Label>
        <Input
          type="text"
          id="endDate"
          placeholder="End Date"
          value={education.endDate}
          onChange={(e) => handleChangeEducationInfo(e, "endDate")}
        />
      </div>
      <div className="w-full px-1">
        <Label htmlFor="schoolName">Location</Label>
        <Input
          type="text"
          id="location"
          placeholder="Location"
          value={education.location}
          onChange={(e) => handleChangeEducationInfo(e, "location")}
        />
      </div>
      <div className="w-full flex items-center mt-6">
        <Button variant="outline" onClick={handleDelete}>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
        <div className="right-block ml-auto">
          <Button variant="outline" className="mr-3" onClick={handleGoBack}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </>
  )
}

export default EducationForm
