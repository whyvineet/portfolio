import React from "react";
import { Loader2Icon } from "lucide-react";

const ContactSection = ({ state, handleSubmit }) => {
  return (
    <section
      id="contact"
      className="relative h-screen flex items-center bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-12">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-light">Get in Touch</h3>
            <p className="text-lg font-light text-gray-400">
              Just hold off on sending messages until you're challenging your
              inner Steve Jobs! Just kidding - I'm excited to create something
              amazing together.
            </p>
            {state.succeeded ? (
              <div className="p-4 border border-white-500 bg-black-500/10">
                <p className="text-white-500">I'll get back to you shortly!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-none focus:outline-none focus:border-white text-white transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-none focus:outline-none focus:border-white text-white transition-colors"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-none focus:outline-none focus:border-white text-white resize-none transition-colors"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {state.submitting ? (
                    <>
                      <Loader2Icon className="animate-spin" size={20} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                {state.errors && (
                  <div className="p-4 border border-red-500 bg-red-500/10">
                    <p className="text-red-500">
                      Please fill out all fields correctly.
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
