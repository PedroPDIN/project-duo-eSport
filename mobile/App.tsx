import { useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';
import { Subscription } from 'expo-modules-core';
import { Background } from './src/components/Background';

import './src/services/notificationConfig';
import { getPushNotificationToken } from './src/services/getPushNotificationToken'


export default function App() {
  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken()
  })

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    })

    responseNotificationListener.current = Notifications.addNotificationReceivedListener(response => {
      console.log(response);
    })

    return () => { // no useEffect quando a retorno na função e vai a funcionalidade de limpeza do listener da notificação
      if (getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    }
  }, [])

  const [fontsLoaded] = useFonts({ // fontsLoaded possui um valor boolean para especificar se as fontes foi carregada ou não.
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}

    </Background>
  );
}
