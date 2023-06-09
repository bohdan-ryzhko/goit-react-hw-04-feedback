import PropTypes from "prop-types";
import { useState } from "react";
import { Container, FeedbackPageInner, FeedbackTitle } from "./FeedbackPage.styled";
import { StatiscticsList } from "components/StatisticsList/StatisticsList";
import { Notification } from "components/Notification/Notification";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { sum } from "services/sum";
import { calcGoodPercentage } from "services/calcGoodPercentage";
import options from "options/options";

export const FeedbackPage = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const total = sum(good, neutral, bad);
	const positivePercentage = calcGoodPercentage(good, total);

	const onLeaveFeedback = option => () => {
		switch (option) {
			case "good":
				setGood(prev => prev + 1);
				break;
			case "neutral":
				setNeutral(prev => prev + 1);
				break;
			case "bad":
				setBad(prev => prev + 1);
				break;
			default:
				console.warn("Case not support :(");
		}
	}

	return (
		<Container>
			<FeedbackPageInner>
				<FeedbackTitle>Please leave feedback</FeedbackTitle>
				<FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}  />
			</FeedbackPageInner>
			{total === 0
					? <>
						<Notification message="There is no feedback" />
					</>
					:
					(<>
						<FeedbackPageInner>
							<FeedbackTitle>Statisctics</FeedbackTitle>
							<StatiscticsList
								good={good}
								neutral={neutral}
								bad={bad}
								total={total}
								positivePercentage={positivePercentage}
							/>
						</FeedbackPageInner>
					</>)
				}
		</Container>
	)
}

FeedbackPage.propTypes = {
	state: PropTypes.exact({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired
	}),
}