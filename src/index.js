import React from "react";
import ReactDOM from "react-dom/client";
import ActionHeader from './action-header/ActionHeader';
import TimelineContent from './timeline-content/TimelineContent';

function App() {
	return (
		<main>
			<ActionHeader />
			<TimelineContent />
		</main>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);