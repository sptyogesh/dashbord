import { Button } from "/workspaces/codespaces-express/tailwind/tacss/app/components/ui/button.tsx";
import dashborad from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/dashborad_image.png";
import logo from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/company_logo.png"
import trust from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/trused_com.png";
import photo1 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/Rectangle-105.png";
import photo2 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/image-16.png";
import photo3 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/image-17.png";
import photo4 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/image-18.png";
import cont from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/contact.png";
import ser1 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/services-1.png";
import ser2 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/services-2.png";
import ser3 from "/workspaces/codespaces-express/tailwind/tacss/app/components/image/services-3.png";

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
      <section className="flex flex-col-2 h-120 p-6 mb-20">
        <div className=" text-white w-1/2 ml-10 font-serif p-4">
        <p className="text-4xl font-bold mb-10 mt-8 leading-12">From <span className="text-amber-400">Marketing to Design</span>,<br /> We Create What <br /> Your <span className="text-amber-400">Business</span> Needs to Succeed</p>
        <p className="mb-14.5 text-base leading-7">At YS Innovations, we drive growth with smart marketing, stunning websites, and powerful branding. Trusted by 100+ businesses, we deliver measurable results through performance marketing, social media, and eCommerce optimization.</p>
        <button  className=" bg-amber-500 text-black h-13 w-50 rounded-2xl">Boost your Business!</button>
        <button  className="  text-white h-13 w-50 rounded-2xl">Learn More &#10145;</button>
        </div>
        <div className="">
          <img  className=" h-110 mr-38" src={dashborad}></img>
        </div>
      </section>
      <section className="container border-2 rounded-4xl border-amber-500 h-60 mx-20 w-290 " >
        <div className="text-white font-bold text-2xl mx-45 mt-10 underline font-serif ">
          <p>Trusted By Over 500+ Professionals And Businesses</p>
          <img  className="mt-15" src={trust}></img>
        </div>
      </section>
      <section className="mt-10 flex flex-col-2 h-120 p-6 mb-20 mx-15">
        <div className="grid grid-cols-2 h-50 gap-8 rounded-2xl mt-10 w-1/2">
          <img  className=" " src={photo1}></img>
          <img  className=" " src={photo2}></img>
          <img  className=" " src={photo3}></img>
          <img  className=" " src={photo4}></img>
        </div>
        <div className=" text-white w-1/2 ml-10  p-4">
        <p className="text-4xl font-bold mb-10 mt-8 leading-12 font-serif">Your <span className="text-amber-400">Partner</span> In Digital Marketing, Web Design, And More</p>
        <p className="mb-10 text-base leading-7">Every business has unique goals, and we craft our solutions to meet your specific needs. Whether you’re launching a startup, growing your enterprise, or expanding your eCommerce business, we’re here to make it happen.</p>
        <Button variant="outline" className=" bg-amber-500 text-black hover:bg-amber-500 hover:text-white hover:border hover:border-white hover:scale-90 h-12">Get A Quote</Button>
        <Button variant="outline" className=" bg-transparent border border-amber-500 text-white hover:bg-transparant hover:text-amber-500 hover:border hover:border-amber-500 hover:scale-90 ml-8 h-12">View Serives</Button>
        </div>
      </section>
      <section className="bg-neutral-800 h-140 text-center font-serif text-2xl font-bold text-white " >
        <h1 className="underline my-4">Services</h1>
        <h4><span className="text-amber-400">Our Services</span> — Your Growth Engine</h4>
        <div className="grid grid-cols-3 mt-15 mx-10 ">
          <img className="h-100 w-85 rounded-4xl" src={ser1}></img>
          <img className="h-100 w-85 rounded-4xl" src={ser2}></img>
          <img className="h-100 w-85 rounded-4xl" src={ser3}></img>
        </div>
      </section>
      <section className="my-10 h-140 font-serif  text-white "> 
        <h3 className=" text-xl mb-5 text-center underline font-bold">Why us</h3>
        <h1 className="text-3xl text-center font-bold">Why Choose YS Innovations?</h1>
        <div className="grid grid-cols-2 gap-4 mx-40 my-8 relative ">
          <div className="border border-amber-500 border-2 rounded-2xl h-30 relative">
            <p className="text-amber-500 font-bold text-5xl top-0 absolute transform -translate-y-7 ml-10 font-serif ">1</p>
            <p className="mx-8 mt-15">We Get Results: We focus on delivering real, measurable results for your business.</p>
          </div>
          <div className="border border-amber-500 border-2 rounded-2xl h-30 relative">
            <p className="text-amber-500 font-bold text-5xl top-0 absolute transform -translate-y-7 ml-10 font-serif ">2</p>
            <p className="mx-8 mt-15">Our team has the experience and knowledge to help you succeed online.</p>
          </div>
          <div className="border border-amber-500 border-2 rounded-2xl h-30 relative">
            <p className="text-amber-500 font-bold text-5xl top-0 absolute transform -translate-y-7 ml-10 font-serif ">3</p>
            <p className="mx-8 mt-15">We work closely with you to understand your goals and helpyou achieve them.</p>
          </div>
          <div className="border border-amber-500 border-2 rounded-2xl h-30 relative">
            <p className="text-amber-500 font-bold text-5xl top-0 absolute transform -translate-y-7 ml-10 font-serif ">4</p>
            <p className="mx-8 mt-15">We communicate clearly and keep you informed every step of the way.</p>
          </div>
        </div>
        <div className="border border-amber-500 border-2 rounded-2xl h-30 relative mx-90 my-8">
            <p className="text-amber-500 font-bold text-5xl top-0 absolute transform -translate-y-7 ml-10 font-serif ">5</p>
            <p className="mx-8 mt-15">With YS Innovations, every campaign, strategy, and service is driven by one goal your success.</p>
        </div>
      </section>
      <section className="container border-2 rounded-4xl border-amber-500 h-40 w-290 mx-20 mb-10 bg-yellow-950 " >
        <div className="text-white mx-50 mt-10 text-center">
          <p className="text-2xl font-serif mb-5 font-bold">Take the Next Step Toward Success</p>
          <p className="text-sm">Don’t let opportunities pass you by. The digital world is full of potential, and with<br /> YS Innovations by your side, you can seize it.</p>
        </div>
      </section>
      <section className="mb-10">
        <div className="text-center text-white font-bold font-serif">
          <p className=" text-xl underline mb-5">Contact us</p>
          <p className="text-3xl mb-8 ">Ready to Transform Your Business?</p>
          <p className="text-base text-sm mx-60 mb-8">Contact Us Today to discuss how we can help you achieve your goals. Get a Free Consultation with no obligations—just valuable insights on how to improve and grow. Join Our List of Success Stories and become one of our satisfied clients who have seen real results.</p>
        </div>
        <div className=" bg-neutral-800 h-150  w-280 mx-25 rounded-4xl flex flex-col-2 gap-20">
          <div className=" ml-15 mt-10">
          <img  className=" h-130" src={cont}></img>
          </div>
          <div className="grid grid-row-1 mx-2 font-serif ml-10 mt-10 mb-10">
            <p className="text-2xl text-amber-500 text-center font-bold mb-4">Enter Your Details</p>
            <label className="text-white text-lg mb-1">Name</label>
            <input type="name" className="bg-white border border-amber-100 rounded w-100 h-10 mb-2" placeholder="Name" ></input>
            <label className="text-white text-lg mb-1">Email</label>
            <input type="email" className="bg-white border border-amber-100 rounded w-100 h-10 mb-2" placeholder="Email" ></input>
            <label className="text-white text-lg mb-1">Phone No.</label>
            <input type="number" className="bg-white border border-amber-100 rounded w-100 h-10 mb-2" placeholder="Phone No." ></input>
            <label className="text-white text-lg mb-1">Company Name</label>
            <input type="name" className="bg-white border border-amber-100 rounded w-100 h-10 mb-2" placeholder="Company Name" ></input>
            <label className="text-white text-lg mb-1">Message</label>
            <textarea className="bg-white border border-amber-100 rounded w-100 h-10 mb-2" placeholder="Message" minLength={8} ></textarea>
            <Button variant="outline" className=" bg-amber-500 text-black hover:bg-transparent hover:text-white hover:border hover:border-white hover:scale-90 h-12 w-1/4 mt-5 rounded-4xl">Send</Button>
          </div>
        </div>
      </section>
    </body>
  );
}
