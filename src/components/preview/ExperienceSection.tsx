import { ExperiencePreviewProps } from "@/interfaces";

const ExperienceSection = ({ items }: ExperiencePreviewProps) => {
  return (
    <div className="mt-10 px-14">
      <h3  className="font-bold flex items-center bg-neutral-200 rounded-sm mb-3 py-1 px-3 text-center">Experience</h3>
      <div className="felx gap-[18px] mb-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full rounded p-3 mb-3 font-medium cursor-pointer"
          >
            <div className="flex justify-between">
              <span className="font-semibold">{item.companyName}</span>
              <span className="text-sm">{item.startDate} - {item.endDate}</span>
            </div>
            <div className="flex justify-between">
              <span>{item.positionTitle}</span>
              <span className="text-sm">{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection
