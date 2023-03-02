export const LoadingTable = () => {
  return (
    <div className="py-2.5 px-7 animate-pulse">
      <div className="grid grid-cols-4 items-center">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[80%]"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[70%]"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%]"></div>
      </div>
    </div>
  );
};
