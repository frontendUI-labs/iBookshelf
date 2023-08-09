import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Trash2, XSquare } from "lucide-react";
import Button from "../../common/Button";

const DeleteBookButton = ({ onDelete }: { onDelete: () => void }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild className="">
        <div className=" hidden group-hover:block">
          <button className=" group-hover:block absolute right-0 top-2 w-8 h-8 bg-white p-1">
            <Trash2 color="red" aria-label="Remover libro" />
          </button>
        </div>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-neutral-800 opacity-70 fixed inset-0" />
        <AlertDialog.Content className="w-[90vw] max-w-[500px] max-h-[85vh] p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-[hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px]">
          <AlertDialog.Cancel asChild>
            <button className="absolute top-2 right-2 hover:bg-black hover:text-white">
              <XSquare aria-hidden />
              <span className="sr-only">Close Modal</span>
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Title className="text-xl mb-10">
            Estás seguro que deseas eliminar este libro?
          </AlertDialog.Title>
          <div className="flex gap-5 justify-end">
            <AlertDialog.Cancel asChild>
              <Button variant="secondary">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button variant="danger" onClick={onDelete}>
                Yes, delete
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
export default DeleteBookButton;
