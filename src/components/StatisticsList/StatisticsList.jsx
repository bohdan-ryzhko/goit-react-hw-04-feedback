import PropTypes from 'prop-types';

import { CountTotalFeedback } from 'components/CountTotalFeedback/CountTotalFeedback';
import { StatisticsBoard, StatisticsInfo } from "./StatisticsList.styled";
import { CountPositiveFeedbackPercentage } from 'components/CountPositiveFeedbackPercentage/CountPositiveFeedbackPercentage';

export const StatiscticsList = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<StatisticsBoard>
			<StatisticsInfo>
				<span>Good: </span>
				<span>{good}</span>
			</StatisticsInfo>
			<StatisticsInfo>
				<span>Neutral: </span>
				<span>{neutral}</span>
			</StatisticsInfo>
			<StatisticsInfo>
				<span>Bad: </span>
				<span>{bad}</span>
			</StatisticsInfo>
			<CountTotalFeedback total={total} />
			<CountPositiveFeedbackPercentage positivePercentage={positivePercentage} />
		</StatisticsBoard>
	)
}

StatiscticsList.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
}