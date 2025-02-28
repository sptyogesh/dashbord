import { Button } from "/workspaces/codespaces-express/tailwind/tacss/app/components/ui/button.tsx";
import dashborad from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/dashborad_image.png";
import logo from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/company_logo.png"
import trust from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/trused_com.png";
import photo1 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/Rectangle-105.png";
import photo2 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/image-16.png";
import photo3 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/image-17.png";
import photo4 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/image-18.png";


export function Welcome() {
  return (
    <body className="bg-black"> 
      <head className="h-20 flex flex-col-2 mr-8 bg-amber-300 ">
        <header className="bg-fuchsia-500 w-50  relative ">
          <img className="w-50 ml-20 mt-8 absolute transform transalte-x-3 " src={logo}></img>
        </header>
        <nav className="">
          <ul className="text-white flex flex-col-3 gap-10 justify-end text-lg p-8">
            <li>Our Services</li>
            <li>our Story</li>
            <li>Contact us</li>
            <li>Blog</li>
            <Button variant="outline" className=" bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white hover:border hover:border-white hover:scale-90">Contact us</Button>
          </ul>
        </nav>
      </head>
      <section className="mt-6 flex flex-col-2 h-120 p-6 mb-20">
        <div className=" text-white w-180 ml-10 font-serif p-4">
        <p className="text-4xl font-bold mb-10 mt-8 leading-12">From <span className="text-amber-400">Marketing to Design</span>,<br /> We Create What <br /> Your <span className="text-amber-400">Business</span> Needs to Succeed</p>
        <p className="mb-14.5 text-base leading-7">At YS Innovations, we drive growth with smart marketing, stunning websites, and powerful branding. Trusted by 100+ businesses, we deliver measurable results through performance marketing, social media, and eCommerce optimization.</p>
        <button  className=" bg-amber-500 text-black h-13 w-50 rounded-2xl">Boost your Business!</button>
        <button  className="  text-white h-13 w-50 rounded-2xl">Learn More &#10145;</button>
        </div>
        <div className="">
          <img  className=" h-110 mr-38" src={dashborad}></img>
        </div>
      </section>
      <section className="container border-2 rounded-4xl border-amber-500 h-60 mx-20 " >
        <div className="text-white font-bold text-2xl mx-45 mt-10 underline font-serif ">
          <p>Trusted By Over 500+ Professionals And Businesses</p>
          <img  className="mt-15" src={trust}></img>
        </div>
      </section>
      <section className="mt-10 flex flex-col-2 h-120 p-6 mb-20 mx-15">
        <div className="grid grid-cols-2 h-50 gap-8 rounded-2xl mt-10">
          <img  className=" " src={photo1}></img>
          <img  className=" " src={photo2}></img>
          <img  className=" " src={photo3}></img>
          <img  className=" " src={photo4}></img>
        </div>
        <div className=" text-white w-150 ml-10  p-4">
        <p className="text-4xl font-bold mb-10 mt-8 leading-12 font-serif">Your <span className="text-amber-400">Partner</span> In Digital Marketing, Web Design, And More</p>
        <p className="mb-14.5 text-base leading-7">Every business has unique goals, and we craft our solutions to meet your specific needs. Whether you’re launching a startup, growing your enterprise, or expanding your eCommerce business, we’re here to make it happen.</p>
        <Button variant="outline" className=" bg-amber-500 text-black hover:bg-amber-500 hover:text-white hover:border hover:border-white hover:scale-90 h-12">Get A Quote</Button>
        <Button variant="outline" className=" bg-transparent border border-amber-500 text-white hover:bg-transparant hover:text-amber-500 hover:border hover:border-amber-500 hover:scale-90 ml-8 h-12">View Serives</Button>
        </div>
        
      </section>
    </body>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
