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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 rounded-2xl border border-[color:var(--line)] bg-[color:var(--background)]/80 backdrop-blur-md shadow-[0_24px_90px_rgba(0,0,0,0.55)] z-50"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg border border-[color:var(--line)] bg-[color:var(--panel)]">
                    <Mail className="w-5 h-5 text-[color:var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-[color:var(--foreground)]">Contact Us</h3>
              </div>
              <button onClick={onClose} className="text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-[color:var(--muted)] mb-6">
              Have questions about SumAlpha? We&apos;d love to hear from you.
            </p>

            <div className="p-4 rounded-xl border border-[color:var(--line)] bg-[color:var(--panel)] flex items-center justify-between group hover:border-[color:var(--line)]/80 transition-colors">
              <span className="text-[color:var(--foreground)] font-mono select-all">{email}</span>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-[color:var(--panel-2)] text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-all border border-[color:var(--line)]"
                title="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="mt-6 flex justify-end">
                <button 
                    onClick={onClose}
                    className="btn btn-ghost px-4 py-2 rounded-lg text-sm"
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
