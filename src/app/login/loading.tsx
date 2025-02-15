export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-foreground">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-customNavy"></div>
        <p className="text-gray-600 mt-4">Loading...</p>
      </div>
    </div>
  );
}
