'use client';
import {
  BaseLayout,
  Header,
  Input,
  Modal,
  OrderDetails,
  Table
} from '@/components/index';
import { useCart } from './utils/hooks/useCart';
import { useModal } from './utils/hooks/useModal';

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
  const { closeModal, isOpenModal, modalData, openModalWithOrderCode } =
    useModal();

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
                  openModal={() =>
                    openModalWithOrderCode(
                      row.orderCode,
                      row.status,
                      row.client,
                      row.address
                    )
                  }
                  {...row}
                />
              ))}
            </Table.Body>
          </Table.Root>
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <OrderDetails
              orderCodeValue={modalData.orderCodeValue}
              clientValue={modalData.clientValue}
              addressValue={modalData.addressValue}
              statusValue={modalData.statusValue}
            />
          </Modal>
        </main>
      </div>
    </BaseLayout>
  );
}
