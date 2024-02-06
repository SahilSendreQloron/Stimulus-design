// import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-left">
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-sm dark:text-gray-400">Welcome to my website</p>
          <h2 className="text-2xl  tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Hello, I am Stimulus currently based in New York City
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
            We provide the best AI solutions to help your business grow. Our AI models are trained on diverse datasets
            to ensure high accuracy and reliability.
          </p>
          <button
            className=" w-48 h-12 border-2 border-slate-500 rounded-3xl"
            href="#"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}