import Navbar from './navbar';
import SessionWrapper from './components/SessionWrapper';
import { ToastContainer } from './components/toastifty';
import 'react-toastify/dist/ReactToastify.css';
import { Roboto_Condensed } from 'next/font/google';
import './globals.css';

const inter = Roboto_Condensed({ subsets: ['cyrillic-ext'] });

export const metadata = {
  title: 'Next Gallery',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <SessionWrapper>
          <header>
            <Navbar />
          </header>
          {children}
          <ToastContainer  theme='dark' autoClose= {3000}/>
        </SessionWrapper>
      </body>
    </html>
  );
}