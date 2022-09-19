import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  ImageSourcePropType,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps { // exportamos essa interface para aproveitar ela em outro código
  id: string;
  titles: string;
  _count: {
    ads: number;
  };
  bannerUrl: string; // por enquanto utilizamos o ImageSourcePropType para tipa este elemento pois ainda não buscamos em uma API por exemplo
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) { // ...rest todo o restante que não especificado na TouchableOpacityProps
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.bannerUrl }}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >

          <Text style={styles.name}>
            {data.titles}
          </Text>

          <Text style={styles.ads}>
            {data._count.ads} anúncios
          </Text>

        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}