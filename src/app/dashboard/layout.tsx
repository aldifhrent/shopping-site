import Link from "next/link";
import DashboardHeader from "./components/dashboard-header";
import { FaHome, FaBox, FaList } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen  ">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Link href="/dashboard">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          </Link>
        </div>
        <nav className="mt-6">
          <Link
            href="/dashboard"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-200"
          >
            <FaHome className="mr-3" /> Home
          </Link>
          <Link
            href="/dashboard/orders"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-200"
          >
            <FaList className="mr-3" /> Orders
          </Link>
          <Link
            href="/dashboard/products"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-200"
          >
            <FaBox className="mr-3" /> Products
          </Link>
          <Link
            href="/dashboard/category"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-200"
          >
            <FaList className="mr-3" /> Category
          </Link>
          <Link
            href="/dashboard/sizes"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-200"
          >
            <FaList className="mr-3" /> Sizes
          </Link>
          <Link
            href="/dashboard/colors"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-200"
          >
            <FaList className="mr-3" /> Colors
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto ">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
