import { useForm } from '@formspree/react';
import { Loader2Icon } from 'lucide-react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_ID);

  if (state.succeeded) {
    return (
      <div className="p-6 bg-gray-700 rounded-lg text-center">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Thanks for reaching out!</h3>
        <p className="text-gray-300">I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl p-8 space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
            placeholder="Your name"
            />
          </div>

          <div className="flex-1">
            <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
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
        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 text-white resize-none"
        placeholder="Your message..."
        />
        </div>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-50"
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
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
          <p className="text-red-500">Please fill out all fields correctly.</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;