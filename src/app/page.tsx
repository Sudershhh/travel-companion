import Banner from "@/components/Banner";
import HeaderHome from "../components/Header/HeaderHome";
import DreamVacation from "@/components/DreamVacation";
import PopularHotels from "@/components/PopularHotels";
import Pagination from "@/components/Pagination";

export default function Home() {


  function changePage(){

  }

  return (
      <main className="flex min-h-screen flex-col justify-between bg-white pl-20 pr-20">
          <HeaderHome />
          <Banner />
          <DreamVacation />
          <PopularHotels />
          <Pagination totalPages={13} currentPage={1} onPageChange={changePage} />
      </main>

  );
}
