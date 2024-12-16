
import Link from "next/link"
export default function Home() {
    return(
        <div>
            <div className="nav">
                <img src="navbar-dark (1).png" alt="navbar"></img>
            </div>
            <div className="nav1">
            <ul className="flex gap-7">
             <li className="text-3xl font-semibold p-[10px] mr-[30px] pt-[30pz] pl-[40px]">Bandage</li>
             <li className="pt-[17px] pl-[70px]"><Link href="/">Home</Link></li>
             <li className="pt-[17px]"><Link href="/shop">Shop</Link></li>
             <li className="pt-[17px]"><Link href="/about">About</Link></li>
             <li className="pt-[17px]"><Link href="/blog">Blog</Link></li>
             <li className="pt-[17px]"><Link href="/contact">Contact</Link></li>
             <li className="pt-[17px]"><Link href="/pages">Pages</Link></li>
             <li className="pl-[190px]"><img src="navbar-nav.png" alt="navbar"></img></li>            
         </ul>
         </div>
         <div className="navbar2">
             <img src="navbar-style-7 navbar-light.svg" alt="nav"></img>
            </div>
            <div className="container">
                <img src="container (1).png" alt="img"></img>
            </div>
            <div className="img4">
            <img src="desktop-shop-cards-18.svg" alt="nav"></img>
            </div>
            <div className="img5">
                <img src="filter-row.svg" alt="content"></img>
            </div>
            <div className="img6">
            <img src="desktop-clients-1.svg" alt="content"></img>
            </div>
            <div className="container2">
          <img src="container (2).png" alt="icon"></img>
          </div>
          <div className="cards">
          <img src="mobile-shop-cards-18.svg" alt="image"></img>
          </div>
          <div className="cards2">
          <img src="filter-row.png" alt="image"></img>
          </div>
          <div className="cards3">
          <img src="mobile-product-cards-10.svg" alt="image"></img>
          </div>
          <div className="cards4">
          <img src="mobile-clients-1.png" alt="image"></img>
          </div>
            <div>
            <div className="footer">
               <div className="md:flex gap-40">
                   <h1 className="text-3xl font-bold" >Bandage</h1>
                   <div className="pl-[640px]">
                  <img src="social media.svg" alt="icon"></img>
              </div>
                 </div>          
          </div>
          
          <div className="md:flex">
          <div className="footer-text">
            <h3 className="font-bold  mt-[100px] pl-[150px]">Company Info</h3>
            <div className="footer-text2">
            <p className="font-semibold mt-[14px] pl-[150px]">About Us</p>
            <p className="font-semibold mt-[14px] pl-[150px] ">Carrier</p>
            <p className="font-semibold mt-[14px] pl-[150px]">We are hiring</p>
            <p className="font-semibold mt-[14px] pl-[150px]">Blog</p>
            </div>
          </div>
          <div className="footer-text">
          <h3 className="font-bold pl-[75px] mt-[100px]">legal</h3>
          <div className="footer-text2">
            <p className="font-semibold mt-[14px] pl-[75px]">About Us</p>
            <p className="font-semibold mt-[14px] pl-[75px]">Carrier</p>
            <p className="font-semibold mt-[14px] pl-[75px]">We are hiring</p>
            <p className="font-semibold mt-[14px] pl-[75px]">Blog</p>
            </div>
          </div>
          <div className="footer-text">
          <h3 className="font-bold pl-[75px] mt-[100px]">Features</h3>
          <div className="footer-text2">
            <p className="font-semibold mt-[14px] pl-[75px]">Business Marketing</p>
            <p className="font-semibold mt-[14px] pl-[75px]">User Analytic</p>
            <p className="font-semibold mt-[14px] pl-[75px]">Live Chat</p>
            <p className="font-semibold mt-[14px] pl-[75px]">Unlimited Support</p>
            </div>
          </div>
          <div className="footer-text">
          <h3 className="font-bold pl-[75px] mt-[95px]">Resourses</h3>
          <div className="footer-text2">
            <p className="font-semibold mt-[14px] pl-[75px]">IOS & Android</p>
            <p className="font-semibold mt-[14px] pl-[75px]">Watch a Demo</p>
            <p className="font-semibold mt-[14px] pl-[75px]">Customers</p>
            <p className="font-semibold mt-[14px] pl-[75px]">API</p>
            </div>
          </div>
          <div className="footer-text">
          <h3 className="font-bold pl-[50px] mt-[95px]">Get In Touch</h3>
          <div className="footer-text2">
            <p className="font-semibold mt-[30px] pl-[50px]">Your Email</p>
            <p className=" mt-[14px] pl-[50px]">Lore imp sum dolor Amit</p>
            </div>
          </div>
          <div className="button4">
            <button className="text-white">Subscribe</button>
               </div>
                </div> 
                 <div className="button5">
                 <button className="text-white">Subscribe</button>
                </div>
                <div className="footer-text3">
            <p className="font-bold">Made With Love By Finland All Right Reserved </p>
          </div>
            </div>
            <div className="clients">
              <img src="desktop-product-cards-10.svg" alt="image"></img>
            </div>
        </div>
    )
}