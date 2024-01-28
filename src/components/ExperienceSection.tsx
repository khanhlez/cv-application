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
import ExperienceForm from "@/components/form/ExperienceForm.tsx";
import { Experience, ExperienceProps } from "@/interfaces";
import { EXPERIENCE_DEFAULT_VALUE } from "@/constants.ts";

const ExperienceSection = ({ items, handleChangeData, handleDeleteItem }: ExperienceProps) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Experience>(EXPERIENCE_DEFAULT_VALUE);

  function toggleDisplayForm() {
    setDisplayForm(!displayForm);
  }

  function handleChange(payload: Experience) {
    handleChangeData(payload, 'experiences')
    toggleDisplayForm()
  }

  function handleAddNew() {
    setSelectedItem(EXPERIENCE_DEFAULT_VALUE)
    toggleDisplayForm()
  }

  function handleEdit(item: Experience) {
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
                <span className="text-2xl">Experience</span>
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
                        <span>{item.companyName}</span>
                      </div>
                    ))}
                    <Button className="mt-2" onClick={handleAddNew}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Education</Button>
                  </>
                )}

                {displayForm && (
                  <ExperienceForm
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

export default ExperienceSection;
