import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';

export function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
}