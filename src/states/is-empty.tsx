import { Bird } from "lucide-react";

function IsEmpty() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-16 text-purple-600">
      <Bird size={80} />
      <p className="font-semibold text-xl">
        "Oops! No books found. Try different options, we'll assist you!"
      </p>
    </div>
  );
}

export default IsEmpty;
