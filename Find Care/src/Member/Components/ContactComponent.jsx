import FooterComponent from "../../Common/components/FooterComponent";

const ContactComponent=() =>{
    return(
        <div className="px-36 gap-44">
                <div className="flex gap-5 justify-center my-16">
                    <div className="text-2xl">Contact US</div>
                 </div>
                 <div className="flex justify-center items-start gap-8">
                    <div className="w-[30%]">
                        <img src="https://prescripto.vercel.app/assets/contact_image-IJu_19v_.png"></img>
                    </div>
                    <div className="flex flex-col gap-6">
                        <p class=" font-semibold text-lg text-gray-600">OUR OFFICE</p>
                        <p class=" text-gray-500">"00000 Willms Station</p>
                        <p class=" text-gray-500">Suite 000, Washington, USA</p>     
                        <p class=" text-gray-500">Tel: (000) 000-0000</p>
                        <p class=" text-gray-500">Email: greatstackdev@gmail.com</p>    
                        <p class=" font-semibold text-lg text-gray-600">CAREERS AT PRESCRIPTO</p>
                        <p class=" text-gray-500">Learn more about our teams and job openings.</p>
                        <button class="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
                    </div>
                 </div>
                <div className="mt-40"> </div>
        </div>
    );
};

export default ContactComponent;