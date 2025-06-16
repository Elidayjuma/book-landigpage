"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header/index";
import Script from "next/script";
// import { PopupWidget } from "@/components/LandingPage/PopupWidget";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className="flex">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <Script defer data-domain="interviewprep.elidayjuma.com" src="https://analytics.elidayjuma.com/js/script.js" />

                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col lg:ml-72.5">
                    {/* <!-- ===== Header Start ===== --> */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                    {/* <PopupWidget /> */}
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </>
    );
}
