import FooterComponent from "../../Common/components/FooterComponent";

const About =() =>{
    return (
    <div className="px-36"> 
        <div className="flex gap-5 justify-center my-16">
        <div className="text-2xl">About US</div>
        </div>
        <div className="flex justify-center">
            <div className="w-[30%]">
                <img src="https://prescripto.vercel.app/assets/about_image-MG9zrc7b.png"></img>
            </div>
            <div className="flex-1 mx-10 my-10 text-sm">
                <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.<br></br> 
                Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                <h1><b>Our Vision</b></h1>
                <p>
                Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
                </p>
            </div>
        </div>
        <div>
            <div className="mt-20">WHY CHOOSE US</div>
            <div class="flex justify-between items-start px-4 py-8">

  <div class="flex-1 border border-gray-300 p-20 transition hover:bg-blue-500 hover:text-white">
    <h3 class="text-lg font-bold mb-2">EFFICIENCY:</h3>
    <p>
      Streamlined appointment scheduling that fits into your busy lifestyle.
    </p>
  </div>


  <div class="flex-1 border border-gray-300 p-20 transition hover:bg-blue-500 hover:text-white">
    <h3 class="text-lg font-bold mb-2">CONVENIENCE:</h3>
    <p>
      Access to a network of trusted healthcare professionals in your area.
    </p>
  </div>


  <div class="flex-1 border border-gray-300 p-20 transition hover:bg-blue-500 hover:text-white">
    <h3 class="text-lg font-bold mb-2">PERSONALIZATION:</h3>
    <p>
      Tailored recommendations and reminders to help you stay on health.
    </p>
  </div>
</div>
        </div>
    </div>
    );
}

export default About;