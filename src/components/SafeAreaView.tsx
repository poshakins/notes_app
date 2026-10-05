import { SafeAreaView } from "react-native-safe-area-context";
import { cssInterop } from "nativewind";

// This tells NativeWind to map the `className` prop to SafeAreaView's `style` prop
cssInterop(SafeAreaView, { className: "style" });

export default SafeAreaView;
