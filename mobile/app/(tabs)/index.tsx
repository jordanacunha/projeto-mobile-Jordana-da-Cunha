import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/nubank.webp')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vinda, Jordana!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">R$ 500,00</ThemedText>
        <ThemedText style={styles.buttons}>

          <Button
            onPress={() => {
              console.log('You tapped the button!');
            }}
            title="Cartões"
          />
          <Button
            onPress={() => {
              console.log('You tapped the button!');
            }}
            title="Pix"
          />

          <Button
            onPress={() => {
              console.log('You tapped the button!');
            }}
            title="Extrato"
          />



          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Empréstimos</ThemedText>
        <ThemedText>
          Até 9.900 disponível para você.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Cartão de crédito</ThemedText>
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">Sua fatura atual é de </ThemedText>R$ 736,98<br></br> <ThemedText type="defaultSemiBold">
            Limite disponível


          </ThemedText> R$ 409,98{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 430,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttons:{
    display: 'flex',
    gap:10
  }
});
