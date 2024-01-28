import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import {FormEvent, useEffect, useState} from "react";
import uniqid from "uniqid";
import { Trash2 } from 'lucide-react';
import { Experience, ExperienceFormProps } from "@/interfaces";
import { Button } from "@/components/ui/button.tsx";
import { EXPERIENCE_DEFAULT_VALUE } from "@/constants.ts";

const ExperienceForm = ({ selectedItem, toggleDisplayForm, handleChangeInfo, handleDeleteItem }: ExperienceFormProps) => {
  const [experience, setExperience] = useState<Experience>(EXPERIENCE_DEFAULT_VALUE);

  const handleGoBack = () => {
    toggleDisplayForm()
  }
  const handleChangeExperienceInfo = (
    e: FormEvent<HTMLInputElement>,
    dataName: string,
  ) => {
    setExperience({
      ...experience,
      [dataName]: e.currentTarget.value
    })
  };
  const handleSave = () => {
    handleChangeInfo(experience)
  }

  const handleDelete = () => {
    handleDeleteItem(experience.id, 'experiences')
    toggleDisplayForm()
  }

  useEffect(() => {
    if (selectedItem.id) {
      setExperience(selectedItem)
    } else {
      setExperience({
        ...experience,
        id: uniqid()
      })
    }
  }, [selectedItem])

  return (
    <>
      <div className="w-full px-1 mb-4">
        <Label htmlFor="schoolName">Company</Label>
        <Input
          type="text"
          id="companyName"
          placeholder="Company Name"
          value={experience.companyName}
          onChange={(e) => handleChangeExperienceInfo(e, "companyName")}
        />
      </div>
      <div className="w-full px-1 mb-4">
        <Label htmlFor="positionTitle">Position Title</Label>
        <Input
          type="text"
          id="positionTitle"
          placeholder="positionTitle"
          value={experience.positionTitle}
          onChange={(e) => handleChangeExperienceInfo(e, "positionTitle")}
        />
      </div>
      <div className="w-full px-1 mb-4">
        <Label htmlFor="startDate">Start Date</Label>
        <Input
          type="text"
          id="startDate"
          placeholder="Start Date"
          value={experience.startDate}
          onChange={(e) => handleChangeExperienceInfo(e, "startDate")}
        />
      </div>
      <div className="w-full px-1 mb-4">
        <Label htmlFor="schoolName">End Date</Label>
        <Input
          type="text"
          id="endDate"
          placeholder="End Date"
          value={experience.endDate}
          onChange={(e) => handleChangeExperienceInfo(e, "endDate")}
        />
      </div>
      <div className="w-full px-1 mb-4">
        <Label htmlFor="schoolName">Location</Label>
        <Input
          type="text"
          id="location"
          placeholder="Location"
          value={experience.location}
          onChange={(e) => handleChangeExperienceInfo(e, "location")}
        />
      </div>
      <div className="w-full px-1">
        <Label htmlFor="schoolName">Description</Label>
        <Input
          type="text"
          id="description"
          placeholder="Description"
          value={experience.description}
          onChange={(e) => handleChangeExperienceInfo(e, "description")}
        />
      </div>
      <div className="w-full flex items-center mt-6">
        <Button variant="outline" onClick={handleDelete}>
          <Trash2 className="mr-2 h-4 w-4"/>
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

export default ExperienceForm
