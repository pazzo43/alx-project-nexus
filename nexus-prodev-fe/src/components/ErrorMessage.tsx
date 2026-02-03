import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  message: string;
  onRetry: () => void;
}

export const ErrorMessage = ({ message, onRetry }: Props) => (
  <View className="flex-1 justify-center items-center p-6 bg-background">
    <View className="bg-red-50 p-4 rounded-nexus border border-danger/20">
      <Text className="text-danger font-bold text-center text-lg">System Error</Text>
      <Text className="text-secondary text-center mt-2">{message}</Text>
    </View>
    <TouchableOpacity 
      onPress={onRetry}
      className="mt-6 bg-primary px-8 py-3 rounded-full shadow-md active:opacity-80"
    >
      <Text className="text-white font-extrabold">TRY AGAIN</Text>
    </TouchableOpacity>
  </View>
);
