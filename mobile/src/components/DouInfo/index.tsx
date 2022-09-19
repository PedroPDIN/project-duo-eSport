import { View, Text, ColorValue } from 'react-native';

import { THEME } from '../../theme';
import { styles } from './styles';

interface Props {
  label: string;
  value: string;
  colorValue?: ColorValue; // tipo nativo no React Native

}

export function DouInfo({ label, value, colorValue = THEME.COLORS.TEXT }: Props) { // passando um valor padrão, pois o valor não é opcional, caso não venha nenhum valor irá ter a com white
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text
        style={[styles.value, { color: colorValue }]}
        numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  );
}