const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen max-h-[-webkit-fill-available] overflow-auto m-auto">
      <section className="h-full w-full container mx-auto p-2">
        {children}
      </section>
    </main>
  );
};

export default AppLayout;
