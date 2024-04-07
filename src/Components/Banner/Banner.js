import { Link } from 'gatsby'
import React from 'react'

const Banner = () => {
    return (
        <>
           
            <div className="">
                <div className="relative mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
                    {/* Left Column */}
                    <div className="my-auto mx-auto mt-10 w-full max-w-xl md:mt-56 lg:max-w-screen-xl">
                        <div className="mb-16 lg:mb-0 lg:max-w-lg">
                            <div className="mb-6 max-w-xl">
                                <div>
                                    <p className="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-indigo-900">
                                        Approved by google
                                    </p>
                                </div>
                                <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                                    Pakistan's Best <br />
                                    <span className="inline-block font-bold text-cyan-500">
                                        Blogs Site
                                    </span>
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                                    ullam rem voluptatem, animi tempora expedita!Lorem ipsum dolor.
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Link
                                    href="/Blogs"
                                    className="mr-6 inline-flex h-12 items-center justify-center rounded bg-cyan-500 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-cyan-400 "
                                >
                                    {" "}
                                    Get Blogs{" "}
                                </Link>
                                <Link
                                    to='/'
                                    aria-label=""
                                    className="inline-flex items-center font-semibold text-cyan-500 transition-colors duration-200 hover:text-cyan-200"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* /Left Column */}
                    {/* Right Column */}
                    <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end lg:px-2">
                        {/* Col 2 */}
                        <div className="my-auto mb-20 hidden w-56 flex-col space-y-3 md:mt-36 lg:flex">
                            <div className="rounded-xl bg-yellow-400 pt-10">
                                <img
                                    className="h-full w-full object-contain"
                                    src="https://componentland.com/images/yg7jHmFeLOLmlxPWz8D4C.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="my-auto flex space-x-3 rounded-xl md:mt-36 md:w-60 md:flex-col md:space-y-3 md:space-x-0 md:px-4">
                            <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
                                <img
                                    className="mx-auto h-full w-full object-contain object-bottom"
                                    src="https://componentland.com/images/5L6JMrng-34iG1LN5yh7Q.png"
                                    alt=""
                                />
                            </div>
                            <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                                <img
                                    className="mx-auto h-full w-full object-contain object-bottom"
                                    src="https://componentland.com/images/AjCb3ZW2H6zNzumU0E3B2.png"
                                    alt=""
                                />
                            </div>
                            <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                                <img
                                    className="mx-auto h-full w-full object-contain object-bottom"
                                    src="https://componentland.com/images/LOsO0RwPYEzhVfeDuJG3M.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    {/* /Right Column */}
                </div>
            </div>
        </>

    )
}
export default Banner
