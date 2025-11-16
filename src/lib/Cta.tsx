const Cta = ({ text }: { text: string }) => {
  return (
    <button className="bg-buttonC-primary flex justify-center my-8 mx-auto hover:bg-buttonC-primary-hover shadow-glowC-primary shadow-[0_10px_90px_10px] text-black px-8 py-4 rounded-xl font-bold text-xl cursor-pointer transition">
      {text}
    </button>
  );
};

export default Cta;
