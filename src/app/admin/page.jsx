'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaPlus } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaPen } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, Admin!</h1>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <FaPlus className="mr-2 h-4 w-4" />
              Add New
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/admin/blog/new" className="w-full cursor-pointer">
                Add New Blog
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/admin/events/new" className="w-full cursor-pointer">
                Add New Event
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardWidget title="Voting" link="/admin/voting" />
        <DashboardWidget title="Blogs" link="/admin/blog" />
        <DashboardWidget title="Events" link="/admin/events" />
      </div>
    </div>
  );
}

function DashboardWidget({ title, link }) {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow relative">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <Link 
          href={link}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          title={`Manage ${title}`}
        >
          <FaPen className="h-4 w-4 text-gray-600 hover:text-gray-800" />
        </Link>
      </div>
      <p className="text-gray-600">Manage {title.toLowerCase()}</p>
    </div>
  );
}


