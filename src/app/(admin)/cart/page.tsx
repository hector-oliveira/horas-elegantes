'use client';
import * as C from '@/components/index';
import * as U from './utils/index';

export default function Cart() {
  const { filter, setFilter } = U.useCart();

  return (
    <C.BaseLayout>
      <div className="w-full px-4 gap-2">
        <C.Header namePage="Troca e Devoluções" />
        <C.Input.Search
          filterValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <main className="overflow-y-scroll max-h-96 px-2 shadow-lg">
          <C.Table hederData={U.HeaderData} bodyData={U.RowDatas} />
        </main>
      </div>
    </C.BaseLayout>
  );
}
