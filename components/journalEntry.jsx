import {
	View,
	StyleSheet,
	TextInput,
} from "react-native";
import {
	useFonts,
	Inter_300Light,
	Oswald_400Regular,
	Inter_400Regular,
} from "@expo-google-fonts/inter";

const JournalEntryInput = ({ entryText, setEntryText, handleTextChange }) => {
	let [fontsLoaded] = useFonts({
		Inter_300Light,
		Oswald_400Regular,
		Inter_400Regular,
	});

	return (
		<View style={styles.container}>
			<TextInput
				multiline
				placeholder='Your journal entry'
				style={styles.textInput}
				value={entryText}
				onChangeText={(text) => handleTextChange(text)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 5,
	},
	prompt: {
		fontFamily: "Inter_300Light",
		paddingTop: 15,
		paddingBottom: 10,
		fontSize: 15,
	},
	label: {
		marginBottom: 10,
		fontFamily: "Inter_300Light",
		fontSize: 13,
	},
	pickerContainer: {
		flex: 1,
		justifyContent: "flex-end",
	},
	picker: {
		backgroundColor: "#E8EDDF",
		opacity: 80,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#ddd",
		padding: 10,
		marginBottom: 20,
		borderRadius: 5,
		height: 200,
		textAlignVertical: "top",
		backgroundColor: "#E8EDDF",
	},
	button: {
		fontSize: 15,
		paddingTop: 15,
	},
});

export default JournalEntryInput;
