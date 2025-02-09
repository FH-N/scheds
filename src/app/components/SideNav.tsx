import {
  IconCalendarEvent,
  IconChartPieFilled,
  IconClipboardText,
  IconInbox,
  IconLifebuoy,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className="w-64 bg-foreground shadow-lg p-4 text-customDarkNavy mt-16 font-medium h-[91vh] relative">
      <div className="mb-2 text-xl flex p-2 gap-2">
        <IconChartPieFilled className="text-customOrange" />
        <span className="text-customOrange">Dashboard</span>
      </div>

      <div className="space-y-2">
        {/* Schedules Section */}
        <div className="collapse collapse-arrow">
          <input
            type="checkbox"
            id="schedule-collapse"
            className="peer hidden"
          />
          <label
            htmlFor="schedule-collapse"
            className="collapse-title text-lg font-medium flex items-center gap-2 cursor-pointer bg-white rounded-lg p-2 peer-checked:bg-gray-200"
          >
            <IconCalendarEvent className="text-customDarkNavy" />
            <span>Schedules</span>
          </label>
          <div className="collapse-content space-y-1 ml-6 peer-checked:block hidden text-lg">
            <Link href={"/schedule/generate"}>
              <p className="hover:text-customOrange cursor-pointer">Generate</p>
            </Link>
            <p className="hover:text-customOrange cursor-pointer">
              View Schedule
            </p>
            <p className="hover:text-customOrange cursor-pointer">
              Academic Plan
            </p>
          </div>
        </div>

        {/* Messages Section */}
        <div className="text-lg font-medium flex items-center gap-2 hover:text-customOrange cursor-pointer p-2">
          <IconInbox className="text-customDarkNavy" />
          <span>Messages</span>
        </div>

        {/* Services Section */}
        <div className="collapse collapse-arrow">
          <input
            type="checkbox"
            id="services-collapse"
            className="peer hidden"
          />
          <label
            htmlFor="services-collapse"
            className="collapse-title text-lg font-medium flex items-center gap-2 cursor-pointer bg-white rounded-lg p-2 peer-checked:bg-gray-200"
          >
            <IconSettings className="text-customDarkNavy" />
            <span>Services</span>
          </label>
          <div className="collapse-content space-y-1 ml-6 peer-checked:block hidden text-lg">
            <p className="hover:text-customOrange cursor-pointer">Petition</p>
            <p className="hover:text-customOrange cursor-pointer">Excuses</p>
          </div>
        </div>
      </div>

      {/* Fixed Line */}
      <div className="absolute bottom-52 left-0 w-full border-t-2 border-gray-300"></div>

      <div className="absolute bottom-12">
        <div className="mb-2 text-xl flex p-2 gap-2">
          <IconClipboardText className="text-customDarkNavy" />
          <span className="text-customDarkNavy">Docs</span>
        </div>
        <div className="mb-2 text-xl flex p-2 gap-2">
          <IconUserCircle className="text-customDarkNavy" />
          <span className="text-customDarkNavy">Profile</span>
        </div>
        <div className="mb-2 text-xl flex p-2 gap-2">
          <IconLifebuoy className="text-customDarkNavy" />
          <span className="text-customDarkNavy">Help</span>
        </div>
      </div>
    </div>
  );
}
