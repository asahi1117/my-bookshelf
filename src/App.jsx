import Header from './components/Header';
import Footer from './components/Footer';
import BookCard from './components/BookCard';

const books = [
  {
    id: 1,
    title: 'リーダブルコード',
    author: 'Dustin Boswell / Trevor Foucher',
    rating: 5,
    comment: '名前の付け方やコメントの書き方が具体的で、コードを読む人への気遣いが身についた。',
  },
  {
    id: 2,
    title: 'JavaScript Primer',
    author: 'azu / Suguru Namura',
    rating: 5,
    comment: '基礎からていねいで、最初の1冊として手元に置きたい。',
  },
  {
    id: 3,
    title: 'CSS設計完全ガイド',
    author: '半田 惇志',
    rating: 4,
    comment: '分厚いが、クラスの分け方に迷ったときの辞書として使っている。',
  },
  {
    id: 4,
    title: 'オブジェクト指向でなぜつくるのか',
    author: '平澤 章',
    rating: 4,
    comment: 'クラスや継承の手前にある「なぜそう書くのか」が腹落ちした。',
  },
];

function App() {
  return (
    <div className="min-h-svh flex flex-col bg-stone-100">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 space-y-4">
        <h2 className="text-xl font-bold text-stone-800">おすすめの本</h2>
        <p className="text-stone-600 text-sm">
          {books.length}冊を配列で持ち、map でカードに展開しています。
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {books.map((book) => (
            <li key={book.id}>
              <BookCard
                title={book.title}
                author={book.author}
                rating={book.rating}
                comment={book.comment}
              />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
