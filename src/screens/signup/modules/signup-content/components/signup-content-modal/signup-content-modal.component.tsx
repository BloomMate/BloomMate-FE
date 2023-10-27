import Postcode from '@actbase/react-daum-postcode';
import { OnCompleteParams } from '@actbase/react-daum-postcode/lib/types';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../../../hooks/signup-form';
import { SignUpScreenNavigationProps } from '../../../../signup.screen';
import { ESignUpStep } from '../../../../signup.state';

type SignUpContentModalComponentProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SignUpContentModalComponent =
  memo<SignUpContentModalComponentProps>(({ setModal }) => {
    const { control } = useFormContext<SignUpForm>();
    const { field, fieldState } = useController({
      control,
      name: ESignUpStep.ADDRESS_INPUT,
    });
    const { onChange } = field;
    const navigation = useNavigation<SignUpScreenNavigationProps>();
    const handleClickAddress = (data: OnCompleteParams) => {
      const userAddress = data.address;
      onChange(userAddress);
    };
    const closeModal = setModal;

    return (
      <Postcode
        style={{ width: 320, height: 320 }}
        jsOptions={{ animation: true }}
        onError={() => console.log('error')}
        onSelected={data => {
          handleClickAddress(data);
          closeModal(false);
        }}
      />
    );
  });
