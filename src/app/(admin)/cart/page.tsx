import { TitleHeader } from '@/components/Table/TitleHeader';
import { BaseLayout, Header } from '@/components/index';
import { rowDatas } from './data/rowData';
import { TableRow } from '@/components/Table/TableRow';

const headers = [
  'Pedidos',
  'Valor',
  'Cliente',
  'Data de Compra',
  'Endereço de Entrega',
  'Status'
];

export default function Cart() {
  return (
    <BaseLayout>
      <div className="w-full px-4">
        <Header namePage="Troca e Devoluções" />
        <main className="border border-black overflow-scroll max-h-96">
          <table className="table-auto w-full border-spacing-y-2 border-separate">
            <thead className="w-full">
              <TitleHeader titles={headers} />
            </thead>
            <tbody className="w-full">
              {rowDatas.map((row, index) => (
                <TableRow
                  key={row.id}
                  zebraEfect={index % 2 === 0 ? 'bg-gray-200' : ''}
                  {...row}
                />
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </BaseLayout>
  );
}
