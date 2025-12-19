import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";

function ProfileRow({ label, value }: { label: string; value: string }) {
    return (
        <View className="px-5 py-4 flex-row items-center justify-between">
            <View>
                <Text className="text-white font-semibold">{label}</Text>
                <Text className="text-gray-300 text-xs mt-1">{value}</Text>
            </View>
            <Text className="text-gray-400">{">"}</Text>
        </View>
    );
}

function Divider() {
    return <View className="h-px bg-white/10" />;
}

const Profile = () => {
    return (
        <View className="flex-1 bg-primary">
            {/* Background */}
            <Image
                source={images.bg}
                className="absolute w-full h-full z-0"
                resizeMode="cover"
            />

            <ScrollView
                className="flex-1 px-5 mb-24"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30 }}
            >
                {/* Header */}
                <Image source={icons.logo} className="w-12 h-10 mt-20 mb-6 mx-auto" />

                {/* Profile Card */}
                <View className="bg-dark-200/70 border border-white/10 rounded-2xl p-5">
                    <View className="flex-row items-center">
                        {/* Avatar */}
                        <View className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 items-center justify-center">
                            <Text className="text-accent font-bold text-xl">U</Text>
                        </View>

                        <View className="ml-4 flex-1">
                            <Text className="text-white text-lg font-bold">User Name</Text>
                            <Text className="text-gray-300 text-sm mt-1">user@email.com</Text>
                        </View>

                        {/* Edit icon placeholder */}
                        <View className="px-3 py-2 rounded-full bg-white/5 border border-white/10">
                            <Text className="text-white text-xs">Edit</Text>
                        </View>
                    </View>

                    {/* Stats */}
                    <View className="flex-row justify-between mt-3">
                        <View className="items-center flex-1">
                            <Text className="text-white text-lg font-bold">12</Text>
                            <Text className="text-gray-300 text-xs mt-1">Saved</Text>
                        </View>

                        <View className="w-px bg-white/10 mx-3" />

                        <View className="items-center flex-1">
                            <Text className="text-white text-lg font-bold">5</Text>
                            <Text className="text-gray-300 text-xs mt-1">Watched</Text>
                        </View>

                        <View className="w-px bg-white/10 mx-3" />

                        <View className="items-center flex-1">
                            <Text className="text-white text-lg font-bold">3</Text>
                            <Text className="text-gray-300 text-xs mt-1">Reviews</Text>
                        </View>
                    </View>
                </View>

                {/* Section: Account */}
                <Text className="text-white text-lg font-bold mt-2 mb-3">
                    Account
                </Text>

                <View className="bg-dark-200/60 border border-white/10 rounded-2xl overflow-hidden">
                    <ProfileRow label="Profile Settings" value="Update your info" />
                    <Divider />
                    <ProfileRow label="Notifications" value="Manage alerts" />
                    <Divider />
                    <ProfileRow label="Privacy" value="Security options" />
                </View>

                {/* Section: App */}
                <Text className="text-white text-lg font-bold mt-2 mb-3">
                    App
                </Text>

                <View className="bg-dark-200/60 border border-white/10 rounded-2xl overflow-hidden">
                    <ProfileRow label="Theme" value="System Default" />
                    <Divider />
                    <ProfileRow label="About" value="App details" />
                    <Divider />
                    <ProfileRow label="Help & Support" value="FAQs and contact" />
                </View>

                {/* Logout Button (UI Only) */}
                <View className="mt-5">
                    <View className="bg-red-500/15 border border-red-500/30 rounded-2xl p-4 items-center">
                        <Text className="text-red-400 font-bold">Logout</Text>
                        <Text className="text-red-300/80 text-xs mt-1">
                            (UI only — connect auth later)
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Profile;

