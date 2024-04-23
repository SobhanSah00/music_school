"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

 function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    const logout = async () => {
        
            // User is logged in, perform logout
            try {
                await axios.get("/api/users/logout");
                toast.success("Logout successful");
                router.push("/");
                setIsLoggedIn(false); // Update local state
            } catch (error :any) {
                console.log(error.message);
                toast.error(error.message);
            }
         
        // else {
        //     // User is not logged in, perform login
        //     router.push("/login");
        // }
    };


    return (
        <>
            <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
                <Menu setActive={setActive}>
                    <Link href={'/'}>
                        <MenuItem setActive={setActive} active={active} item="Home">
                                
                        </MenuItem>
                    </Link>
                        <MenuItem setActive={setActive} active={active} item="Our Courses">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/courses">All Courses</HoveredLink>
                                    <HoveredLink href="/courses">Basic Music</HoveredLink>
                                    <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                                    <HoveredLink href="/courses">Songwritting</HoveredLink>
                                    <HoveredLink href="/courses">Music Production</HoveredLink>
                                </div> 
                        </MenuItem>
                    
                    <Link href={'/contact'}>
                        <MenuItem setActive={setActive} active={active} item="Contact Us">
                            
                        </MenuItem>
                    </Link>

                    <MenuItem setActive={setActive} active={active} item="Authentication">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/signup" className="text-blue-500">Signup</HoveredLink>
                                    <button onClick={logout} className="">Logout</button>
                                </div> 
                    </MenuItem>
                </Menu> 
            </div>

            
        </>
    )
}

export default Navbar