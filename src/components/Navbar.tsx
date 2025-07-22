import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => (
  <nav className="flex items-center justify-between">
    <Link href="/" className="font-dm-serif text-4xl text-foreground">
      Blog.
    </Link>

    <div className="flex gap-4 items-center">
      <Link href="/login" className="font-montserrat">
        <Button variant="outline">login</Button>
      </Link>
      <Link href="/register">
        <Button>Get started</Button>
      </Link>
    </div>
  </nav>
);

export default Navbar;