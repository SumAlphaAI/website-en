'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Copy, Check, Mail } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export const ContactModal = ({ isOpen, onClose, email }: ContactModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl z-50"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <Mail className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Contact Us</h3>
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-slate-400 mb-6">
              Have questions about SumAlpha? We&apos;d love to hear from you.
            </p>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 flex items-center justify-between group hover:border-purple-500/30 transition-colors">
              <span className="text-slate-200 font-mono select-all">{email}</span>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700"
                title="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="mt-6 flex justify-end">
                <button 
                    onClick={onClose}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium"
                >
                    Close
                </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
