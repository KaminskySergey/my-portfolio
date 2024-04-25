import Header from "@/components/header/Header";
import Sidebar from "@/components/sibebar/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <div className="absolute top-0 left-0 w-full h-full " style={{ background: 'linear-gradient(45deg, rgba(67, 87, 208, 1) 7%, rgba(201, 80, 195, 1) 100%)'}}>

    <div className="layout  pt-[132px] pb-[32px] ">
      <Sidebar />
      <div className="content xl:gap-6">
        <Header />
        <main className="main rounded-md">{children}</main>
      </div>
      
    </div>
    // </div>
  );
}