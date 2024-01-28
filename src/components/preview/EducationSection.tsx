import { EducationPreviewProps } from "@/interfaces";

const EducationSection = ({ items }: EducationPreviewProps) => {
  return (
    <div className="mt-10 px-14">
      <h3  className="font-bold flex items-center rounded-sm bg-neutral-200 mb-3 py-1 px-3 text-center">Education</h3>
      <div className="felx gap-[18px] mb-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full rounded p-3 mb-3 font-medium cursor-pointer"
          >
            <div className="flex justify-between">
              <span className="font-semibold">{item.schoolName}</span>
              <span className="text-sm">{item.startDate} - {item.endDate}</span>
            </div>
            <div className="flex justify-between">
              <span>{item.degree}</span>
              <span className="text-sm">{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationSection;
