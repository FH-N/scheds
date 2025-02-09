import SideNav from "../components/SideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64">
        <SideNav />
      </aside>

      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  );
}
