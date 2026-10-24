import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type InfoCardProps = {
  title: string;
  status: 'selesai' | 'proses';
  onPress: () => void;
};

export function InfoCard({ title, status, onPress }: InfoCardProps) {
  const theme = useTheme();
  const isSelesai = status === 'selesai';

  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundElement }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
        <View style={[styles.badge, isSelesai ? styles.badgeGreen : styles.badgeOrange]}>
          <Text style={[styles.badgeText, isSelesai ? styles.textGreen : styles.textOrange]}>
            {status}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: Spacing.three,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  title: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
  },
  badge: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.two,
    borderRadius: Spacing.three,
  },
  badgeGreen: {
    backgroundColor: '#DCFCE7',
  },
  badgeOrange: {
    backgroundColor: '#FFEDD5',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'capitalize',
  },
  textGreen: {
    color: '#15803D',
  },
  textOrange: {
    color: '#C2410C',
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: Spacing.two,
    backgroundColor: '#2563EB',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 600,
  },
});
