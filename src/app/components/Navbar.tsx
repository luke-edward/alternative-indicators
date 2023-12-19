import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Activity, ArrowRight, BarChart, BarChart2 } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="sticky h-14 insdet-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>AI</span>
            <Activity style={{ color: "#f72585" }} />
            {/* <BarChart2 style={{ color: "#f72585" }} /> */}
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/about"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                About
              </Link>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Sign in
              </Link>
              <Link
                href="/pricing"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Get started <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
