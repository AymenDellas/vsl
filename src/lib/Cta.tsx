const Cta = ({ text }: { text: string }) => {
  return (
    <button className="bg-buttonC-primary w-full sm:w-auto flex justify-center my-8 mx-auto hover:bg-buttonC-primary-hover shadow-glowC-primary shadow-[0_10px_90px_10px] text-black px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-xl cursor-pointer transition text-center">
      {text}
    </button>
  );
};

export default Cta;
