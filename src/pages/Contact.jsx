import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="fade-in">
             <header className="mb-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-primary mr-1">C</span>ontact
                </h2>
            </header>

            <section className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Form</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-primary dark:focus:border-primary transition-colors text-gray-700 dark:text-gray-300"
                        />
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-primary dark:focus:border-primary transition-colors text-gray-700 dark:text-gray-300"
                        />
                    </div>
                    <textarea 
                        placeholder="Your Message" 
                        rows="4" 
                        className="w-full bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-primary dark:focus:border-primary transition-colors text-gray-700 dark:text-gray-300 resize-none"
                    ></textarea>
                    
                    <div className="flex justify-end">
                        <button 
                            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transform active:scale-95 transition-all duration-200"
                        >
                            <FaPaperPlane className="text-xl" />
                            Send Message
                        </button>
                    </div>
                </form>
            </section>

             <section className="map-container rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 h-[300px] w-full bg-gray-100 dark:bg-zinc-900 flex items-center justify-center">
                <iframe 
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116752.79377461973!2d90.35415392765324!3d23.99120197705146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755da486f3e5e65%3A0x228c2a4df62981a8!2sGazipur!5e0!3m2!1sen!2sbd!4v1714480000000!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    style={{border:0, filter: "grayscale(100%) invert(92%) contrast(83%)"}} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </section>
        </div>
    );
};
export default Contact;
