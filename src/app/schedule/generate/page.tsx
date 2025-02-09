import SearchCourse from "@/app/components/SearchCourse";

export default function Generate() {
  return (
    <div className="h-screen w-full mt-16 bg-foreground">
      <div className="flex flex-row">
        <SearchCourse />
      </div>
    </div>
  );
}
