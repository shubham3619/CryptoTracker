import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../Button";
import { Link } from "react-router-dom";


function sideDrawer() {
  return (
    <Sheet className="sticky">
      <SheetTrigger><RxHamburgerMenu className="text-xl"/></SheetTrigger>
      <SheetContent className="bg-black p-5" aria-describedby={undefined}>
      <VisuallyHidden>
        <SheetTitle>Accessible Title for Screen Readers</SheetTitle>
      </VisuallyHidden>
          <div className="mt-3 gap-2 flex flex-col">
          <Link to="/" className="link hover:text-white">
              <p className="text-lg">Home</p>
            </Link>
            <Link to="/compare" className="link hover:text-white">
              <p className="text-lg">Compare</p>
            </Link>
            <Link to="/watchlist" className="link hover:text-white">
              <p className="text-lg">Watchlist</p>
            </Link>
            <Link to="/dashboard" className="link hover:text-white">
              <Button text={"Dashboard"} onClick={()=>console.log("clicked")} />
            </Link>
          </div>
        
      </SheetContent>
    </Sheet>
  );
}

export default sideDrawer;
