import { Link } from 'gatsby';
import React from 'react'

const Allblogs = () => {
    return (
        <>
            <aside
                aria-label="Related Articles"
                className="mx-auto mt-10 max-w-screen-xl py-20"
            >
            <h2 className="mb-8 text-center text-5xl font-bold text-gray-900">
                Blogs
            </h2>
            <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
                <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                    <Link to="/Bdetails">
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-56 w-full object-cover"
                            alt=""
                        />
                        <div className="flex-auto px-6 py-5">
                            <span className="mb-2 flex items-center text-sm font-semibold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                                    />
                                </svg>
                                Branding
                            </span>
                            <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                                How to perform NPS Surveys
                            </h3>
                            <p className="mb-4 text-base font-light">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                                tempore officiis. Lorem, ipsum dolor.
                            </p>
                            <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                                Read Now
                            </span>
                        </div>
                    </Link>
                </article>
                <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                    <Link to="/Bdetails">
                        <img
                            src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-56 w-full object-cover"
                            alt=""
                        />
                        <div className="flex-auto px-6 py-5">
                            <span className="mb-2 flex items-center text-sm font-semibold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                                    />
                                </svg>
                                Public Relations
                            </span>
                            <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                                Understanding Public Relations
                            </h3>
                            <p className="mb-4 text-base font-light">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                                tempore officiis. Lorem, ipsum dolor.
                            </p>
                            <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                                Read Now
                            </span>
                        </div>
                    </Link>
                </article>
                <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                    <Link to="/Bdetails">
                        <img
                            src="https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXdhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            className="h-56 w-full object-cover"
                            alt=""
                        />
                        <div className="flex-auto px-6 py-5">
                            <span className="mb-2 flex items-center text-sm font-semibold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                                    />
                                </svg>
                                Marketing
                            </span>
                            <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                                Marketing is looking for untapped opportunities
                            </h3>
                            <p className="mb-4 text-base font-light">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                                tempore officiis. Lorem, ipsum dolor.
                            </p>
                            <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                                Read Now
                            </span>
                        </div>
                    </Link>
                </article>
            </div>
        </aside>
        </>
    )
}
export default Allblogs;