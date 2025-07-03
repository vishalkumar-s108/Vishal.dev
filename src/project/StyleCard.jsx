const StyledCard = ({ children }) => {
  return (
    <section className="relative max-w-2xl mx-auto mt-12 px-6 py-8 rounded-2xl shadow-xl bg-white/30 backdrop-blur-lg border border-gray-200 transition hover:shadow-2xl">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl blur-lg opacity-30 -z-10" />
      {children}
    </section>
  );
};

export default StyledCard;
