import Footer from "@/components/Footer";
import PageMove from "@/components/Header";
import { ModeToggle } from "@/components/ModeToggle";
import MusicCards from "@/components/MusicCards";

export default function Home() {
  return (
    <main className=" min-h-screen  mt-7 ">
     
      <PageMove />

      <MusicCards />
      <Footer />
    </main>
  );
}
