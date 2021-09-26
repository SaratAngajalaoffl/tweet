import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutingHandler from 'services/routing';
import { SnackbarProvider } from 'utils/snackbar';

const App = () => {
	return (
		<Router>
			<SnackbarProvider>
				<MainRoutingHandler />
			</SnackbarProvider>
		</Router>
	);
};

export default App;
