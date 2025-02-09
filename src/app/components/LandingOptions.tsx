import Image from "next/image";

export default function LandingOptions() {
  return (
    <div className="flex flex-col justify-center items-center p-4 h-screen">
      <div className="flex grid-flow-row gap-20">
        <Image
          src="/assets/schedules.png"
          alt="schedule"
          width={300}
          height={300}
        />
        <Image
          src="/assets/studyRooms.png"
          alt="schedule"
          width={300}
          height={300}
        />
        <Image
          src="/assets/register.png"
          alt="schedule"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
