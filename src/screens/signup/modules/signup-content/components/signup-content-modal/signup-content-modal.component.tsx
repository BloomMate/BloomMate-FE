import Postcode from '@actbase/react-daum-postcode';
import { OnCompleteParams } from '@actbase/react-daum-postcode/lib/types';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../../../hooks/signup-form';
import { ESignUpStep } from '../../../../signup.state';

import { Modal } from '@/atoms';

type SignUpContentModalComponentProps = {
  isModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SignUpContentModalComponent =
  memo<SignUpContentModalComponentProps>(({ isModal, setModal }) => {
    const { control } = useFormContext<SignUpForm>();
    const { field } = useController({
      control,
      name: ESignUpStep.ADDRESS_INPUT,
    });
    const { onChange } = field;
    const handleClickAddress = (data: OnCompleteParams) => {
      const userAddress = data.address;
      onChange(userAddress);
      setModal(false);
    };
    const isVisible = isModal;

    const handlePressBackdropModal = () => {
      setModal(false);
    };

    return (
      <Modal isVisible={isVisible} onBackdropPress={handlePressBackdropModal}>
        <Postcode
          style={{ aspectRatio: 32 / 52 }}
          jsOptions={{ animation: true }}
          onError={() => {}}
          onSelected={data => {
            handleClickAddress(data);
          }}
        />
      </Modal>
    );
  });
