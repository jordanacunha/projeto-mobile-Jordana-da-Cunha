import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { styles } from './styles';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
                  source={require('@/assets/images/nubank.webp')}
                  style={styles.reactLogo}
                />
         }>
        

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Mais informações</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <Collapsible title="Dados bancários">
        <ThemedText>
          Número da conta:{' '}
          <ThemedText type="defaultSemiBold">83029680-7</ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
          Agência: <ThemedText type="defaultSemiBold">0001</ThemedText>{' '}
          
        </ThemedText>
        <ExternalLink href="https://blog.nubank.com.br/codigo-agencia-nubank-numero-da-conta-onde-encontrar/">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Meu cadastro e limites">
        <ThemedText>
            Última atualização cadastral feita em 17/01/2025 {' '}
        </ThemedText>
      </Collapsible>
      <Collapsible title="Privacidade e segurança">
        <ThemedText>
          Central de privacidade <br></br>Biometria
    
        </ThemedText>
        <ExternalLink href="https://www.nubank.com.br/transparencia/aviso-de-privacidade-e-seguranca">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Informe de rendimentos">
        <ThemedText>
          Veja no <ThemedText type="defaultSemiBold">YouTube</ThemedText> como verificar seu informe de rendimentos.{' '}
          <ThemedText>
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://www.bing.com/videos/riverview/relatedvideo?q=passo+a+passo+informe+de+rendimentos+nubank&mid=AADF2E8AE7C1E1647281AADF2E8AE7C1E1647281&FORM=VIRE">
          <ThemedText type="link">Acessar vídeo</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Central de ajuda">
        <ThemedText>
          Fale conosco. {' '}
        </ThemedText>
        <ExternalLink href="https://blog.nubank.com.br/como-entrar-em-contato-com-o-nubank/">
          <ThemedText type="link">Entrar em contato.</ThemedText>
        </ExternalLink>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}


