"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-foreground">
      <div className="text-center bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl text-red-600">Something went wrong!</h2>
        <p className="text-gray-600 mt-2">{error.message}</p>
        <button
          onClick={() => reset()}
          className="btn mt-4 bg-customNavy text-white py-2 rounded-xl"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
