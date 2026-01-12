import React, { useState } from 'react';
import { Mails } from 'lucide-react'
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mpqwvoga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto relative px-4 sm:px-6">
        <div className="absolute left-0 md:left-[1px] hidden md:flex flex-col items-center animate-pulse">
          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
            theme === 'dark' ? 'bg-blue-600' : 'bg-black'
          }`} />
          <div className={`w-[2px] sm:w-[3px] h-32 md:h-50 bg-gradient-to-b ${
            theme === 'dark' 
              ? 'from-blue-600 to-[#B384F9]' 
              : 'from-black to-zinc-400'
          }`} />
          <div className="relative my-2">
            <div className={`absolute -inset-1 rounded-full blur-lg opacity-90 ${
              theme === 'dark' ? 'bg-[#B384F9]' : 'bg-zinc-300'
            }`} />
            <Mails
              size={24}
              strokeWidth={1.5}
              className={`relative z-10 w-6 h-6 sm:w-8 sm:h-8 hover:rotate-y-180 transition-transform duration-500 ease-in-out ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
            />
          </div>
          <div className={`w-[2px] sm:w-[3px] h-32 md:h-110 rounded bg-gradient-to-b ${
            theme === 'dark' 
              ? 'from-[#B384F9] to-[#0D1117]' 
              : 'from-zinc-400 to-transparent'
          }`} />
        </div>
        
        {/* Section Header */}
        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-1 ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          {t("contact.title")}
        </h2>  
        <h3 className={`text-xs sm:text-sm font-bold mb-4 text-center ${
          theme === 'dark' ? 'text-purple-400' : 'text-zinc-500'
        }`}>
          {t("contact.subtitle")}
        </h3>
        <div className={`w-[60%] sm:w-[40%] md:w-[30%] h-1 bg-gradient-to-r mx-auto mb-8 md:mb-10 animate-pulse ${
          theme === 'dark' 
            ? 'from-purple-300 to-purple-600' 
            : 'from-black via-zinc-400 to-zinc-200'
          }`}></div>
        
        {/* Status Messages  */}
        {status === 'success' && (
          <div className={`max-w-xl mx-auto mb-6 p-4 rounded-lg border text-center ${
            theme === 'dark' 
              ? 'bg-green-900/20 border-green-800 text-green-400' 
              : 'bg-zinc-50 border-green-500 text-green-700'
          }`}>
            {t("contact.success")}
          </div>
        )}
        
        {status === 'error' && (
          <div className={`max-w-xl mx-auto mb-6 p-4 rounded-lg border text-center ${
            theme === 'dark' 
              ? 'bg-red-900/20 border-red-800 text-red-400' 
              : 'bg-zinc-50 border-red-500 text-red-700'
          }`}>
            {t("contact.error")}
          </div>
        )}
        
        <div className="max-w-xl mx-auto">
          <ContactForm 
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            status={status}
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
};

const ContactForm = ({ formData, handleChange, handleSubmit, status, theme }) => {
  const { t } = useTranslation();
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <FormInput 
        label={t("contact.name")} 
        type="text" 
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t("contact.nameholder")}
        required
        theme={theme}
      />
      <FormInput 
        label={t("contact.email")} 
        type="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t("contact.emailholder")}
        required
        theme={theme}
      />
      <FormInput 
        label={t("contact.subject")}
        type="text" 
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder={t("contact.subjectholder")}
        theme={theme}
      />
      
      <div>
        <label className={`block mb-2 text-sm sm:text-base font-medium ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}>
          {t("contact.message")}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:outline-none transition-all duration-300 text-sm sm:text-base ${
            theme === 'dark'
              ? 'text-gray-100 border-gray-700 focus:ring-2 focus:ring-[#B384F9] bg-gray-800/50'
              : 'text-black border-zinc-300 focus:ring-2 focus:ring-black bg-white'
          }`}
          required
        ></textarea>
      </div>
      
      <button 
        type="submit"
        disabled={status === 'sending'}
        className={`relative w-full py-2 sm:py-3 text-white rounded-lg font-bold transition-all duration-300 text-sm sm:text-base shadow-lg 
          hover:-translate-y-1 hover:shadow-xl active:scale-95 group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#B384F9] to-[#9c6de5] hover:shadow-[#B384F9]/40'
            : 'bg-black hover:bg-zinc-800'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"/>
        <span className="relative z-10">
          {status === 'sending' ? t("contact.status") : t("contact.send")}
        </span>
      </button>
    </form>
  );
};

const FormInput = ({ label, type, name, value, onChange, placeholder, required, theme }) => {
  return (
    <div>
      <label className={`block mb-2 text-sm sm:text-base font-medium ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:outline-none transition-all duration-300 text-sm sm:text-base ${
          theme === 'dark'
            ? 'text-gray-100 border-gray-700 focus:ring-2 focus:ring-[#B384F9] bg-gray-800/50'
            : 'text-black border-zinc-300 focus:ring-2 focus:ring-black bg-white'
        }`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Contact;