import Header from "@/components/header/Header";
import Sidebar from "@/components/sibebar/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="layout pt-[132px] pb-[32px] ">
      <Sidebar />
      <div className="content">
        <main className="main rounded-md">{children}</main>
      </div>
      <Header />
    </div>
  );
}