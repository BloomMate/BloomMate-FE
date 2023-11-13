import { Row, Rows } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { PrimaryCommunityScreenNavigatorProp } from '../../../../primary-community.screen';

import { Text } from '@/atoms';

type PrimaryCommuntiyArticleItemProps = {};

export const PrimaryCommuntiyArticleItem =
  memo<PrimaryCommuntiyArticleItemProps>(() => {
    const navigation = useNavigation<PrimaryCommunityScreenNavigatorProp>();

    return (
      <TouchableOpacity>
        <Rows space={12}>
          <Row>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585038/001_poybv6.png',
              }}
              style={{ aspectRatio: 190 / 80 }}
            />
          </Row>
          <Row>
            <Text variants="labelMedium" fontWeight="Medium" color="gray-900">
              EP01 감자를 잘 키우는 법
            </Text>
          </Row>
        </Rows>
      </TouchableOpacity>
    );
  });
