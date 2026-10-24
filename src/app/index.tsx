import { Alert, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InfoCard } from '@/components/InfoCard';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

function showDetail(title: string, status: string) {
  const message = `${title}\nStatus: ${status}`;
  // Alert.alert does nothing on web, so use the browser dialog there.
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert('Detail Tugas', message);
  }
}

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle">Daftar Tugas</ThemedText>

        <InfoCard
          title="Desain UI Halaman Login"
          status="selesai"
          onPress={() => showDetail('Desain UI Halaman Login', 'selesai')}
        />
        <InfoCard
          title="Integrasi API Data Mahasiswa"
          status="proses"
          onPress={() => showDetail('Integrasi API Data Mahasiswa', 'proses')}
        />
        <InfoCard
          title="Laporan Praktikum Mobile"
          status="selesai"
          onPress={() => showDetail('Laporan Praktikum Mobile', 'selesai')}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    gap: Spacing.three,
    paddingHorizontal: Spacing.four,
    paddingTop: Platform.select({ web: Spacing.six + Spacing.four, default: Spacing.three }),
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
});
