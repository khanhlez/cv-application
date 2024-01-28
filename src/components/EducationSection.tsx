import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Plus } from 'lucide-react';
import EducationForm from "@/components/form/EducationForm.tsx";
import { Education, EducationProps } from "@/interfaces";
import { EDUCATION_DEFAULT_VALUE } from "@/constants.ts";

const EducationSection = ({ items, handleChangeData, handleDeleteItem }: EducationProps) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Education>(EDUCATION_DEFAULT_VALUE);

  function toggleDisplayForm() {
    setDisplayForm(!displayForm);
  }

  function handleChange(payload: Education) {
    handleChangeData(payload, 'educations')
    toggleDisplayForm()
  }

  function handleAddNew() {
    setSelectedItem(EDUCATION_DEFAULT_VALUE)
    toggleDisplayForm()
  }

  function handleEdit(item: Education) {
    setSelectedItem(item)
    toggleDisplayForm()
  }

  return (
    <>
      <Card className="w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <CardHeader className="!pb-1">
              <AccordionTrigger>
                <span className="text-2xl">Education</span>
              </AccordionTrigger>
            </CardHeader>
            <CardContent className="!pb-4">
              <AccordionContent className="!pb-0">
                {!displayForm && (
                  <>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="w-full bg-neutral-200 rounded p-3 mb-3 font-medium cursor-pointer"
                      onClick={() => handleEdit(item)}
                    >
                      <span>{item.schoolName}</span>
                    </div>
                  ))}
                  <Button className="mt-2" onClick={handleAddNew}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Education</Button>
                  </>
                )}

                {displayForm && (
                  <EducationForm
                    selectedItem={selectedItem}
                    toggleDisplayForm={toggleDisplayForm}
                    handleChangeInfo={handleChange}
                    handleDeleteItem={handleDeleteItem}
                  />
                )}
              </AccordionContent>
            </CardContent>
          </AccordionItem>
        </Accordion>
      </Card>
      </>
  )
}

export default EducationSection;
