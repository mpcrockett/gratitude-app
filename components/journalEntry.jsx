import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Pressable,
	Button,
	Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
	useFonts,
	Inter_300Light,
	Oswald_400Regular,
	Inter_400Regular,
} from "@expo-google-fonts/inter";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";

const JournalEntryInput = ({ onEntrySubmit }) => {
	let [fontsLoaded] = useFonts({
		Inter_300Light,
		Oswald_400Regular,
		Inter_400Regular,
	});

	const [selectedPrompt, setSelectedPrompt] = useState("");
	const [entryText, setEntryText] = useState("");
	const [showPicker, setShowPicker] = useState(false);

	const prompts = [
		"List 6 things you're grateful for today.",
		"Describe a time this week you had a 'glimmer moment'.",
		"What are you proud of yourself for accomplishing today?",
	];

	const handleTextChange = (text) => {
		setEntryText(text);
	};

	const handleSubmit = () => {
		onEntrySubmit(selectedPrompt, entryText);
		setEntryText(""); // Clear the input after submission
		setSelectedPrompt(""); // Reset selected prompt
		setShowPicker(false); // Close picker after selection
	};

	const handlePress = () => {
		setShowPicker(!showPicker);
	};

	const handleSelect = (prompt) => {
		setSelectedPrompt(prompt);
		setShowPicker(false);
	};

	const pickerLabel =
		selectedPrompt.length > 0
			? "Or select a different prompt"
			: "Pick a journaling prompt";

	return (
		<View style={styles.container}>
			{selectedPrompt.length > 0 && (
				<Text style={styles.prompt}>{selectedPrompt}</Text>
			)}
			<Pressable style={styles.button} onPress={handlePress}>
				<Text style={styles.label}>
					{pickerLabel} <FontAwesomeIcon icon={faCaretDown} />
				</Text>
			</Pressable>
			{showPicker && (
				<Modal
					transparent={true}
					animationType='slide'
					visible={showPicker}
					onRequestClose={() => setShowPicker(false)}
				>
					<View style={styles.pickerContainer}>
						<Picker
							selectedValue={selectedPrompt}
							onValueChange={(itemValue, itemIndex) => handleSelect(itemValue)}
							style={styles.picker}
						>
							{prompts.map((prompt, index) => (
								<Picker.Item key={index} label={prompt} value={prompt} />
							))}
						</Picker>
					</View>
				</Modal>
			)}
			<TextInput
				multiline
				placeholder='Your journal entry'
				style={styles.textInput}
				value={entryText}
				onChangeText={handleTextChange}
			/>
			<Button title='Save Entry' onPress={handleSubmit} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
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
