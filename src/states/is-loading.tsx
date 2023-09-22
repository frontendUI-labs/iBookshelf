import { Loader2 } from "lucide-react";

function IsLoading() {
  return (
    <div className=" p-4 flex items-start mt-16 justify-center text-purple-600">
      <Loader2 className="animate-spin" size={60} strokeWidth={3} />
    </div>
  );
}

export default IsLoading;
