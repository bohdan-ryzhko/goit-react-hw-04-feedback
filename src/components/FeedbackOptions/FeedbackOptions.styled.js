import styled from '@emotion/styled';

export const FeedbackButtonList = styled.ul`
	max-width: 300px;
	display: flex;
	justify-content: space-between;
`;

export const FeedbackItem = styled.li`
	flex-basis: calc(100% / 3 - 30px);
`;

export const FeedbackButton = styled.button`
	background-color: transparent;
	border: 1px solid #777;
	border-radius: 5px;
	padding: 10px 15px;
	transition: all 300ms ease;
	font-size: 16px;
	font-weight: 500;
	text-transform: capitalize;

	&:hover {
		background-color: #999;
		color: #fff;
	}
`;