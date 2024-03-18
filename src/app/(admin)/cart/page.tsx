'use client';
import { BaseLayout, Header, Input, Table } from '@/components/index';
import { useCart } from './utils/hooks/useCart';

const headers = [
  'Pedidos',
  'Valor',
  'Cliente',
  'Data de Compra',
  'Endereço de Entrega',
  'Status'
];

export default function Cart() {
  const { filter, setFilter, filteredRowData, getZebraEffect } = useCart();
  return (
    <BaseLayout>
      <div className="w-full px-4 gap-2">
        <Header namePage="Troca e Devoluções" />
        <Input.Search
          filterValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <main className="overflow-y-scroll max-h-96 px-2 shadow-lg">
          <Table.Root>
            <Table.Head>
              <Table.TitleHeader titles={headers} />
            </Table.Head>
            <Table.Body>
              {filteredRowData.map((row, index) => (
                <Table.Row
                  key={row.id}
                  zebraEffect={getZebraEffect(index)}
                  {...row}
                />
              ))}
            </Table.Body>
          </Table.Root>
        </main>
      </div>
    </BaseLayout>
  );
}
