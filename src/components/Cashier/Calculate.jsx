import React from "react";

const Calculate = () => {
  return (
    <div className="grid grid-cols-4 text-center text-white h-[40%]">
      <p className="border border-[#3F4245] p-3">1</p>
      <p className="border border-[#3F4245] p-3">2</p>
      <p className="border border-[#3F4245] p-3">3</p>
      <p className="border border-[#3F4245] p-3">Qty</p>

      <p className="border border-[#3F4245] p-3">4</p>
      <p className="border border-[#3F4245] p-3">5</p>
      <p className="border border-[#3F4245] p-3">6</p>
      <p className="border border-[#3F4245] p-3">Dis</p>

      <p className="border border-[#3F4245] p-3">7</p>
      <p className="border border-[#3F4245] p-3">8</p>
      <p className="border border-[#3F4245] p-3">9</p>
      <p className="border border-[#3F4245] p-3">Price</p>
      <p className="border border-[#3F4245] p-3">+/-</p>

      <p className="border border-[#3F4245] p-3">0</p>
      <p className="border border-[#3F4245] p-3">.</p>
      <p className="border border-[#3F4245] p-3">x</p>

      <p className="col-span-4 border border-[#3F4245] p-3 text-sky-600">
        Payment
      </p>
    </div>
  );
};

export default Calculate;
