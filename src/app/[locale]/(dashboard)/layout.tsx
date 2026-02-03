
import DashboardNavbar from "@/components/molecules/dashboard-navbar";
import Sidebar from "@/components/organism/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <Sidebar />
      <div className="ml-80 flex-1">
        <DashboardNavbar />
        <main className="bg-gray-50 p-4 h-screen">{children}</main>
      </div>
    </div>
  );
}
