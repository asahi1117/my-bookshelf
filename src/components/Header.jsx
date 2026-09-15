function Header() {
  return (
    <header className="bg-stone-900 text-stone-50 px-4 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto">
        <p className="text-amber-300 text-sm font-medium tracking-wide">Week14｜React基礎</p>
        <h1 className="text-2xl sm:text-4xl font-bold mt-2">わたしの本棚</h1>
        <p className="text-stone-300 mt-3 text-sm sm:text-base">
          同じ見た目のカードを、一度作った型にデータだけ流して並べています。
        </p>
      </div>
    </header>
  );
}

export default Header;
