import Image from "next/image";

export default function Home() {
  return (
<>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      <nav className="relative container ml-0 p-6">
        <div className="container mx-auto flex items-center justify-between p-4 space-x-6">
          <div className="pt2">
            <Image src="/image folder/OIP.jpeg" alt="Logo" width={300} height={200} />
          </div>
          <div className="container hidden md:flex space-x-6">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-black hover:text-blue-500">
                  <span className="blinking">ATTEND ONLINE</span>
                  <p className="text-gray-500 text-xs mt-2"><span className="blinking">LIVE NOW</span></p>
                </a>
              </li>
              <li><a href="#" className="text-black hover:text-blue-500">MEDIA</a></li>
              <li><a href="#" className="text-black hover:text-blue-500">LOCATIONS</a></li>
              <li><a href="#" className="text-black hover:text-blue-500">GIVE</a></li>
              <li><a href="#" className="text-black hover:text-blue-500">WHO WE ARE</a></li>
              <li><a href="#" className="text-black hover:text-blue-500">WORSHIP</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="hero">
        <div
      style={{
        backgroundImage: 'url("/image folder/pexels-andrey-andreyalpha-282193453-13164529.jpg")', // Adjust the path as needed
        backgroundSize: 'cover', // Cover the entire section
        backgroundPosition: 'center', // Center the background
        height: '500px', // Set a height for the section
        justifyContent: 'center',
        color: 'white', // Optional: Change text color for better visibility
      }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center px-6 mt-1 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <Image src="/image folder/LC_Almost True_Logo_Standard_2500x950.avif" alt="" className="ml-1" width={500} height={200} />
            <p className="max-w-sm text-center text-black md:text-left">
            Everywhere you turn, someone’s telling you how to live. A lot of it is
                     well-intentioned and Almost True but misses the mark in ways that
                      can hurt us. How do we know which truths will actually lead to a
                       meaningful life? Let’s find out in our new series.
            </p>
            <div className="flex justify-start space-x-4">
              <a href="#" className="p-3 px-6 pt-2 text-white bg-black hover:translate-y-[-2px]
                    shadow-xl hover:shadow-xl hover:bg-gray-800 rounded-full baseline transition duration-300 ease-in-out hover:scale-105">
                Learn More
              </a>
              <a href="#" className="p-3 px-6 pt-2 text-white bg-transparent border-2 border-white hover:translate-y-[-2px]
                    shadow-xl hover:shadow-xl hover:bg-gray-800 rounded-full baseline transition duration-300 ease-in-out hover:scale-105">
                Attend Life.Church Online
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className=" flex justify-start justify-center space-x-4 flex flex-col-reverse md:flex-row item-center px-6 mr-4 mt-1 mb-0 space-y-0 md:space-y-0">
        <a href="#" className="bg-white text-black py-2 px-4 rounded
        transition-transform transform hover:translate-y-[-2px]
        shadow-xl hover:shadow-xl">
            <h4 className=" font-bold">Want to Change Your Trajectory?</h4>
            <p className="max-w-sm text-center text-gray-600 mb-20 md:text-left">
                Pastor Craig says,"Show me your
                friends and i'll show you your
                future." Find Friends that will
                encourage you and point you
                towards Jesus
            </p>
        </a>
        <a href="#" className="bg-white text-black py-2 px-4 rounded
        transition-transform transform hover:translate-y-[-2px]
        shadow-xl hover:shadow-xl">
            <h4 className=" font-bold">Don't Miss Sister 2024</h4>
            <p className="max-w-sm text-center text-gray-600 md:text-left">
                Sisters is happening on all of
                 our Life.Church lacations! Tap to
                  see times and make plans to
                   attend
            </p>
        </a>
        <a href="#" className="bg-white text-black py-2 px-4 rounded
        transition-transform transform hover:translate-y-[-2px]
        shadow-xl hover:shadow-xl">
            <h4 className=" font-bold">Who Can You Invite</h4>
            <p className="max-w-sm text-center text-gray-600 md:text-left">
                Now's the perfect time to invite
                 someone to church. You could help
                  change their live_tap to get
                   started!
            </p>
        </a>
    </div>

    <section>
        <div className="flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 bg-white shadow-md">
            <div className="flex flex-col mb-32 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-black text-center md:text-5xl md:text-left">
                    You're Welcome Here!
                </h1>
                <p className="max-w-sm text-center text-gray-600 md:text-left">
                    Life.Church is one church meeting in multiple locations, and we want to help you become the person God made you to be. No matter where you are in your journey, you’re invited to discover your purpose and live it out at Life.Church
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                    <a href="#" className="mt-10 p-3 px-6 pt-2 text-white bg-black hover:bg-gray-800 hover:translate-y-[-2px]
                    shadow-xl hover:shadow-xl rounded-full baseline transition duration-300 ease-in-out hover:scale-105">
                        What To Expect
                    </a>
                    
                    <a href="#" className="mt-10 p-3 px-6 pt-2 text-black bg-transparent border-2 border-black hover:translate-y-[-2px]
                    shadow-xl hover:shadow-xl hover:bg-slate-400 rounded-full baseline transition duration-300 ease-in-out hover:scale-105">
                        Find a Loation
                    </a>
                </div>
            </div>
            <div className="md:w-1/2">
            <Image
              src="/image folder/pexels-fauxels-3182824.jpg" // Adjusted path without spaces
              alt="Description of the image"
              className="ml-1"
              width={1000} // Set appropriate width
              height={300} // Set appropriate height
            />
            </div>
        </div>
    </section>

    <section>
        <div className="flex justify-center mx-auto px-6 flex-col-reverse md:flex-row mt-10 space-y-0 md:space-y-0">
            <div className="text-center">
            <h1 className="max-w-md text-3xl font-bold mb-4 md:text-5xl md:text-center">
                Need Prayer?
            </h1>
            <p className="max-w-sm text-center text-gray-600 md:text-left">
                There are times when life is overwhelming, and all we have are questions. In those moments, hope can feel far away. The great thing about prayer is that it shifts our perspective toward the One who stands ready to listen. No matter what you’re facing, we’d love to pray with you!
            </p>
            <a href="#" className="mt-10 p-3 px-6 pt-2 text-white bg-black hover:translate-y-[-2px]
            shadow-xl hover:shadow-xl hover:bg-gray-800 rounded-full baseline transition duration-300 ease-in-out hover:scale-105">
                <i className="fas fa-hands-helping text-4xl"></i>
                Ask For Prayer
            </a>
        </div>
        </div>
    </section>

    <section>
        <div className="flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 bg-black">
            <div className="flex flex-col mb-32 md:w-1/2">
                <p className="max-w-sm text-center mt-10 text-white md:text-left">
                    New Single From Life.Church Worship
                </p>
                <h1 className="max-w-md text-4xl text-white mt-5 font-bold text-center md:text-5xl md:text-left">
                    “We Choose Praise”
                </h1>
                <p className="max-w-sm text-center mt-5 text-white md:text-left">
                    God is our source of strength and gives us joy in any season of life. This song is an intentional declaration that no matter what life throws at us, we can choose to praise Him.
                </p>
                <div className="flex space-x-4">
                <a href="#" className="mt-10 p-3 px-6 pt-2 text-black bg-white hover:translate-y-[-2px]
                shadow-xl hover:shadow-xl hover:bg-gray-800 rounded-full baseline transition duration-300 ease-in-out hover:scale-105">
                    <i className="fa-solid fa-headphones"></i>
                    Listen Now
                </a>
                <a href="#" className="mt-10 p-3 px-6 pt-2 text-black bg-white hover:translate-y-[-2px]
                shadow-xl hover:shadow-xl hover:bg-gray-800 rounded-full baseline transition duration-300 ease-in-out hover:scale-105">
                    <i className="fa-solid fa-headphones"></i>
                    Download Now
                </a>
                </div>
            </div>
            <div>
            <Image
        src="/image folder/LCW_WCPsingle_Vinyl-NOSHADOW.avif"
        alt="Description of the image"
        width={400} // Specify the width
        height={400} // Specify the height
      />
            </div>
        </div>
    </section>

    <section>
        <div className="flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div className="flex flex-col mb-32 md:w-1/2">
            <Image
        src="/image folder/LC_MerchDrop_Logo.avif" // Add a leading slash
        alt="Merch Drop Logo"
        width={250} // Replace with the actual width
        height={250} // Replace with the actual height
      />
                <p className="max-w-sm text-center mt-5 text-black md:text-left">
                    The latest Life.Church Collection is here! Add some style to your closet this spring with new shirts, crewnecks, and accessories.
                </p>
                <div className="flex space-x-4">
                <a href="#" className="mt-10 p-3 px-6 pt-2 text-white bg-black hover:translate-y-[-2px]
                shadow-xl hover:shadow-xl hover:bg-gray-800 rounded-full baseline transition duration-300 ease-in-out hover:scale-105">
                    Grab Your Favourite
                </a>
                </div>
            </div>
            <div>
            <Image
        src="/image folder/pexels-bertellifotografia-2608519.jpg" // Add a leading slash
        alt="Merch Drop Logo"
        width={900} // Replace with the actual width
        height={700} // Replace with the actual height
      />
            </div>
        </div>
    </section>

    <section>
        <div className="flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0  bg-white shadow-md">
            <div className="flex flex-col mb-32 md:w-1/2">
                <h1 className="max-w-md text-4xl text-black mt-5 font-bold text-center md:text-5xl md:text-left">
                    Free Church Resources
                </h1>
                <p className="max-w-sm text-center mt-5 text-black md:text-left">
                    At Life.Church, we’re all about the “capital C” Church. When churches work together, we truly can reach the world for Christ. If you’re in ministry, we want to equip you. Access the entire library of Life.Church sermons, graphics, kids lessons, resources, and apps for free.
                </p>
                <div className="flex space-x-4">
                <a href="#" className="mt-10 p-3 px-6 pt-2 text-white bg-black hover:translate-y-[-2px]
                shadow-xl hover:shadow-xl hover:bg-gray-800 rounded-full baseline transition duration-300 ease-in-out hover:scale-105">
                    Get Free Church Resources
                </a>
                <a href="#" className="mt-10 p-3 px-6 pt-2 text-black bg-transparent border-2 border-black bg-white hover:translate-y-[-2px]
                shadow-xl hover:shadow-xl hover:bg-gray-800 rounded-full baseline transition duration-300 ease-in-out hover:scale-105">
                    Take Your Ministry Online
                </a>
                </div>
            </div>
            <div>
            <Image
        src="/image folder/OpenNetwork_devices (1).avif" // Make sure the path is correct
        alt="Description of the image"
        width={800} // Replace with the actual width of the image
        height={600} // Replace with the actual height of the image
      />
            </div>
        </div>
    </section>

    <div className=" flex justify-start justify-center space-x-4 flex flex-col-reverse md:flex-row item-center px-6 mr-4 mt-10 mb-0 space-y-0 md:space-y-0">
        <a href="#" className="bg-white text-black py-2 px-4 rounded
        transition-transform transform hover:translate-y-[-2px]
        shadow-xl hover:shadow-xl">
            <h4 className=" font-bold">You Said Yes</h4>
            <p className="max-w-sm text-center text-gray-600 mb-20 md:text-left">
                This book helps belivers learn what their decision to follow Jesus means.
            </p>
        </a>
        <a href="#" className="bg-white text-black py-2 px-4 rounded
        transition-transform transform hover:translate-y-[-2px]
        shadow-xl hover:shadow-xl">
            <h4 className=" font-bold">Sermon Resources</h4>
            <p className="max-w-sm text-center text-gray-600 md:text-left">
                Get sermon outline, videos and graphics from Craig Groechel, Levi Lusko and dozens more! 
            </p>
        </a>
        <a href="#" className="bg-white text-black py-2 px-4 rounded
        transition-transform transform hover:translate-y-[-2px]
        shadow-xl hover:shadow-xl">
            <h4 className=" font-bold">Free Guide</h4>
            <p className="max-w-sm text-center text-gray-600 md:text-left">
                Download the guide and get a head starton creating your own messages on habits, marriage, anxiety and more
            </p>
        </a>
    </div>
    </>
  );
}
