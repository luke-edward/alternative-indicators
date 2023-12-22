import Link from "next/link";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Image from "next/image";
import LineChartComponent from "./components/LineChartComponent";
import { DateFilter } from "./components/DateFilter";
import { CategoryFilter } from "./components/CategoryFilter";
import { Search } from "./components/Search";
export default function Home() {
  const numberofCharts = 3;
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-10 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-2xl font-bold md:text-3xl lg:text-5xl">
          Alternative Indicators.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          We surface market research and trends that are two steps ahead.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <h3>Filter by:</h3>
          </div>
          <div style={{ marginRight: "20px" }}>
            <DateFilter />
          </div>
          <div style={{ marginRight: "20px" }}>
            <CategoryFilter />
          </div>
          <div>
            <Search />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* value prop section*/}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hideen blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="">
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
              <div className="mt-1 flow-root sm:mt-2">
                {/* <div className="-m-2 rounded-xl bg-white bg-opacity-80 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 "> */}
                <LineChartComponent />
                {/* </div> */}
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hideen blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* feature section*/}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-grey-900 sm:text-5xl">
              Start exploring the next trends, two steps ahead.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Exploring complementary and supplementary trends has never been
              easier than with alternative indicators.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1 </span>
              <span className="text-xl font-semibold">Check out features </span>
              <span className="mt-2 text-zinc-700">
                sing up for a pro plan for more features
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2 </span>
              <span className="text-xl font-semibold">
                Read graphs and take notes{" "}
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll aggregate the best indicators worldwide based on our
                proprietory algorithms
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3 </span>
              <span className="text-xl font-semibold">
                Implement in your own businesses{" "}
              </span>
              <span className="mt-2 text-zinc-700">start asking questions</span>
            </div>
          </li>
        </ol>
        <div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
                <Image
                  src="/file-upload-preview.jpg"
                  alt="uploading preview"
                  width={1419}
                  height={732}
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
