import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, Feather } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
<<<<<<< HEAD
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="black" />,
=======
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
>>>>>>> 63151c7ea3ea07d20a8be443743ebe59ee2ea9fa
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Mais',
<<<<<<< HEAD
          tabBarIcon: ({ color }) => <Feather name="more-horizontal" size={24} color="black" />,
=======
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
>>>>>>> 63151c7ea3ea07d20a8be443743ebe59ee2ea9fa
        }}
      />
    </Tabs>
  );
}
