import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

export default function Main(props: any) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <Navbar />
        <main className="flex-1 p-8">{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}
