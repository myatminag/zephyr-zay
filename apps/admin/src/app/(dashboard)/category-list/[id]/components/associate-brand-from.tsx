import Image from 'next/image';
import React, { ChangeEvent } from 'react';

import {
  DialogEvent,
  setDialogEvent,
  useDialogState,
} from '@app/store/features/general/dialog-state.slice';
import { brands } from '@app/data/dummy';
import { useAppDispatch } from '@app/store/hook';
import { Button, Modal } from 'packages/ui/src';
import { setAssociateBrand } from '@app/store/features/category/category-state.slice';

const AssociateBrandForm = () => {
  const { dialog } = useDialogState();
  const dispatch = useAppDispatch();
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAssociateBrand(Number(e.target.value)));
  };
  return (
    <Modal
      dialogTitle="Select Associated Brand(s)"
      open={dialog === DialogEvent.associateDialog}
      onClose={() => dispatch(setDialogEvent(DialogEvent.initial))}
    >
      <div className="relative h-[500px] w-[600px] overflow-y-scroll">
        <ul className="space-y-4">
          {brands.map((brand) => (
            <li
              key={brand.title}
              className="flex items-center justify-start gap-4 px-2"
            >
              <input
                value={brand.id}
                onChange={handleChangeInput}
                type="checkbox"
                className="h-4 w-4 focus:outline-none"
              />
              <Image src={brand.url} alt={brand.title} width={40} height={40} />
              <h3 className="text-md">{brand.title}</h3>
            </li>
          ))}
        </ul>
        <div className="center sticky bottom-0 z-20 w-full gap-2 bg-white py-1">
          <Button
            className="w-40 bg-blue-500 px-3 py-1 text-white"
            onClick={() => dispatch(setDialogEvent(DialogEvent.initial))}
          >
            Save
          </Button>
          <Button className="w-40 px-3 py-1">Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default AssociateBrandForm;
