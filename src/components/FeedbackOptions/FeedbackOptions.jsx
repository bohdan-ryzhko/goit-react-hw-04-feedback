import PropTypes from 'prop-types';
import { FeedbackButtonList, FeedbackItem, FeedbackButton } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<FeedbackButtonList>
			{options.map(option => (
				<FeedbackItem key={option}>
					<FeedbackButton onClick={onLeaveFeedback(option)}>{option}</FeedbackButton>
				</FeedbackItem>
			))}
		</FeedbackButtonList>
	)
}

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired),
	onLeaveFeedback: PropTypes.func.isRequired,
}