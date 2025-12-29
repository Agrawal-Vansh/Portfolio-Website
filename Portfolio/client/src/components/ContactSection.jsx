import { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from './hooks/use-toast';
import emailjs from '@emailjs/browser'; 

const ContactForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_7filsjn',
      'template_hgj9s53',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'xsbLqWA0OmmsXIypS'
    );

    setIsSubmitted(true);
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  } catch (err) {
    console.error('EmailJS error:', err);
    toast({
      title: 'Failed to send message',
      description: 'Email service error. Please try again later.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
  <section id="contact" className="relative py-24 px-4 flex flex-col items-center">
  
  {/* BADGE */}
  <span
  className="
    block w-full text-center
    px-4 py-1.5 rounded-full
    dark:bg-black/40 dark:backdrop-blur dark:border-teal-400/30 dark:text-teal-300
    bg-teal-50 border-teal-200 text-teal-700
    border text-xl font-medium mb-6
  "
>
  Contact Us 
</span>


  {/* CONTENT WRAPPER */}
  <div className="w-full max-w-xl flex flex-col items-center">
    
    {/* TEXT */}
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
        Let&apos;s work together
      </h2>
      <p className="text-black/70 dark:text-white/70 text-base md:text-lg">
        I&apos;m currently open to new opportunities. Whether you have a
        question, a project idea, or just want to say hello — I&apos;d love
        to hear from you.
      </p>
    </div>

    {/* FORM CARD */}
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        rounded-2xl
        border border-teal-200/40
        bg-gray-200
        dark:bg-black/70
        backdrop-blur-xl
        p-6 md:p-8
        shadow-[0_0_0_2px_rgba(20,184,166,0.25),0_0_16px_rgba(20,184,166,0.6)]
      "
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm mb-2 dark:text-white/80">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="
              w-full rounded-xl px-4 py-3
              bg-white/5
              border border-white/20
              dark:text-white
              dark:placeholder-white/40
              focus:outline-none
              focus:border-teal-200
            "
          />
        </div>

        <div>
          <label className="block text-sm mb-2 dark:text-white/80">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="
              w-full rounded-xl px-4 py-3
              bg-white/5
              border border-white/20
              dark:text-white
              dark:placeholder-white/40
              focus:outline-none
              focus:border-teal-200
            "
          />
        </div>
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="block text-sm mb-2 dark:text-white/80">Subject</label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project inquiry"
          className="
            w-full rounded-xl px-4 py-3
            bg-white/5
            border border-white/20
            dark:text-white
            dark:placeholder-white/40
            focus:outline-none
            focus:border-teal-200
          "
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-sm mb-2 dark:text-white/80">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="
            w-full rounded-xl px-4 py-3
            bg-white/5
            border border-white/20
            dark:text-white
            dark:placeholder-white/40
            focus:outline-none
            focus:border-teal-200
          "
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="
          w-full rounded-xl py-4
          font-semibold
          flex items-center justify-center gap-2
          bg-teal-200 text-black
          hover:bg-teal-300
          transition
          disabled:opacity-70
        "
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Message Sent
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  </div>
</section>

  );
};

export default ContactForm;
