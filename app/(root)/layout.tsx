import LeftSidebar from "@/components/shared/LeftSidebar";
import Navbar from "@/components/shared/Navbar";
import RightSidebar from "@/components/shared/RightSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="bg-light-800 dark:bg-dark-400">
            <Navbar />
            <div className="flex">
                <LeftSidebar />
                <section className="min-h-screen flex-1 pt-6 pb-6 max-md:pb-14 sm:px-14 overflow-x-auto custom-scrollbar">
                    <div className="mx-auto w-full max-w-full">{children}</div>
                </section>
                <RightSidebar />
            </div>
        </main>
    );
};

export default Layout;
