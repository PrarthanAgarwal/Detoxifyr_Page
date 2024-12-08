import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { ChevronLeft } from 'lucide-react';

export function TermsAndPrivacy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Logo />
            <Link
              to="/"
              className="inline-flex items-center text-white hover:text-white/90 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-600 italic mb-8">Last Updated: December 2024</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p>
              Detoxifyr ("I," "my," or "the extension") is committed to protecting your privacy. 
              This policy explains how I collect, use, and protect your data when you use my 
              YouTube feed customization browser extension.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
            <ul>
              <li>YouTube login status</li>
              <li>Browser type and version</li>
              <li>Extension usage statistics</li>
              <li>Error logs</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">User-Provided Information</h3>
            <ul>
              <li>Keywords preferences (up to 5 keywords)</li>
              <li>Video length preferences</li>
              <li>Content filtering settings</li>
              <li>Region preferences</li>
              <li>Language preferences</li>
            </ul>

            <h1 className="text-4xl font-bold mt-16 mb-8">Terms and Conditions</h1>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By installing and using Detoxifyr, you agree to these terms and conditions.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. License</h2>
            <p>Detoxifyr is licensed under a personal, non-commercial use license.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Acceptable Use</h2>
            <p>You agree to:</p>
            <ul>
              <li>Use the extension in compliance with YouTube's Terms of Service</li>
              <li>Not manipulate or abuse the extension's features</li>
              <li>Not attempt to reverse engineer the extension</li>
              <li>Not use the extension for automated data collection</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact</h2>
            <p>For privacy concerns or terms clarification:</p>
            <ul>
              <li>Email: <a 
                href="mailto:prarthanagarwaljeen@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-primary/90 underline"
              >
                Click here ↙
              </a></li>
              <li>GitHub Issues: <a 
                href="https://github.com/PrarthanAgarwal/Detoxifyr/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-primary/90 underline"
              >
                Extension Repository Issues
              </a></li>
            </ul>

            <div className="mt-12 mb-8 text-gray-600 text-sm">
              Last Updated: December 2024
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}