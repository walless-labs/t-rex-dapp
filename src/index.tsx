import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	container: {

	},
});

export const AppContainer: FC = () => {
	return (
		<View style={styles.container}>
			<Text>Index</Text>
		</View>
	);
};

export default AppContainer;
