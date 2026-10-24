import { useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
  { id: '6', nama: 'Fajar Nugroho', prodi: 'Teknologi Informasi' },
  { id: '7', nama: 'Gita Permata', prodi: 'Sistem Informasi' },
  { id: '8', nama: 'Hendra Wijaya', prodi: 'Teknik Informatika' },
  { id: '9', nama: 'Indah Sari', prodi: 'Teknologi Informasi' },
  { id: '10', nama: 'Kevin Wijaya', prodi: 'Sistem Informasi' },
];

export default function StudentDirectoryScreen() {
  const theme = useTheme();
  const [keyword, setKeyword] = useState('');

  const filteredMahasiswa = DAFTAR_MAHASISWA.filter((mahasiswa) =>
    mahasiswa.nama.toLowerCase().includes(keyword.trim().toLowerCase())
  );

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle">Direktori Mahasiswa</ThemedText>

        <TextInput
          value={keyword}
          onChangeText={setKeyword}
          placeholder="Cari nama mahasiswa..."
          placeholderTextColor={theme.textSecondary}
          autoCorrect={false}
          style={[styles.input, { color: theme.text, backgroundColor: theme.backgroundElement }]}
        />

        <ThemedText type="small" themeColor="textSecondary">
          Menampilkan {filteredMahasiswa.length} dari {DAFTAR_MAHASISWA.length} mahasiswa
        </ThemedText>

        <FlatList
          data={filteredMahasiswa}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ThemedView type="backgroundElement" style={styles.item}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.nama.charAt(0)}</Text>
              </View>
              <View style={styles.itemInfo}>
                <ThemedText>{item.nama}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">{item.prodi}</ThemedText>
              </View>
            </ThemedView>
          )}
          ListEmptyComponent={
            <ThemedText style={styles.emptyText} themeColor="textSecondary">
              Data tidak ditemukan!
            </ThemedText>
          }
          contentContainerStyle={styles.listContent}
          keyboardDismissMode="on-drag"
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
  input: {
    paddingHorizontal: Spacing.three,
    paddingVertical: 12,
    borderRadius: Spacing.two,
    fontSize: 16,
  },
  listContent: {
    gap: Spacing.two,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: Spacing.three,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563EB',
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 700,
  },
  itemInfo: {
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    paddingVertical: Spacing.four,
  },
});
