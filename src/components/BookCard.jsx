function BookCard({ title, author, rating, comment }) {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <article className="bg-white rounded-lg shadow p-4 h-full transition hover:scale-105 hover:shadow-lg">
      <h3 className="text-lg font-bold text-stone-900">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">著者: {author}</p>
      <p className="text-yellow-500 mt-2" aria-label={`評価 ${rating} / 5`}>
        {stars}
      </p>
      <p className="text-gray-600 mt-2">{comment}</p>
    </article>
  );
}

export default BookCard;
