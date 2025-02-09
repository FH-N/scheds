import SearchCourse from "@/app/components/SearchCourse";

export default function Generate() {
  return (
    <div className="h-[90vh] w-full mt-16 bg-foreground">
      <div className="flex flex-row items-center justify-center">
        <SearchCourse />
      </div>
    </div>
  );
}
