import PropTypes from 'prop-types';
import { StatisticsInfo } from "../StatisticsList/StatisticsList.styled";

export const CountPositiveFeedbackPercentage = ({ positivePercentage = 0 }) => {
	return (
		<StatisticsInfo>
			<span>Positve feedback: </span>
			<span>{positivePercentage}%</span>
		</StatisticsInfo>
	)
}

CountPositiveFeedbackPercentage.propTypes = {
	positivePercentage: PropTypes.number.isRequired,
}