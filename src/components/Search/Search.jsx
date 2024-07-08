const Search = () => {
  return (
    <div>
      <div className="flex items-center relative">
        <img
          src="https://cdn.discordapp.com/attachments/835269825210875926/1259874216870940703/lupa.png?ex=668d44cc&is=668bf34c&hm=36581be9a8093fd4247889f74457afa2a61c0ea81799324e0097ae8b28995411&"
          className="h-6 absolute top-2 right-4"
        />
        <input
          type="search"
          placeholder="No.Cuenta"
          className="bg-white h-10 px-3 pr-5 rounded-full text-sm focus:outline-none focus:ring focus:border-blue-300 mr-2 "
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-3 mr-4"
        ></button>
      </div>
    </div>
  );
};

export default Search;
