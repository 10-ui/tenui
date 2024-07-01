export default function Skills() {
  return (
    <div className='flex min-h-screen flex-row items-center justify-center rounded-4xl bg-main p-28'>
      <div className='flex w-full items-start justify-between'>
        <h2 className='mb-16 text-3xl font-bold' id='core-value'>
          スキルセット
        </h2>
        <div className='flex flex-col'>
          <p className='text-2xl font-semibold'>フロントエンドで終わらない</p>
          <br />
          <p className='text-xl'>
            日々進化する技術を捉え、自分のものにしていく。
          </p>
          <p className='text-xl'>
            バックエンド環境を学び、フロントエンドとの連携を深める。
          </p>
        </div>
      </div>
    </div>
  );
}
