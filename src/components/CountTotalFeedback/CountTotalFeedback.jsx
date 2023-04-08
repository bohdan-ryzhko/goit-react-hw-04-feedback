import PropTypes from 'prop-types';
import { StatisticsInfo } from "../StatisticsList/StatisticsList.styled";

export const CountTotalFeedback = ({ total }) => {
	return (
		<StatisticsInfo>
			<span>Total: </span>
			<span>{total}</span>
		</StatisticsInfo>
	)
}

CountTotalFeedback.propTypes = {
	total: PropTypes.number.isRequired,
}