export function MainContent({ children }) {
  return (
    <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto py-6 px-4 max-w-4xl">
        {children}
      </div>
    </main>
  );
}