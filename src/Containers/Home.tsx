import React, { useState } from "react";
import "./Home.css";
import "../Shared/Button.css";
import "../Shared/Card.css";
import { Container } from "@material-ui/core";
import FeedCard from "../Components/FeedCard";
import { IUserFeed } from "../Models/User.model";
import { useDispatch, useSelector } from "react-redux";
import { loadFeed } from "../store/actions/feedActions";

const Home = () => {
	const [loading, setLoading] = useState(false);
	const feedState = useSelector((state: any) => state.feed);
	const dispatch = useDispatch();

	const onLoad = () => {
		setLoading(true);
		dispatch(loadFeed());
	};

	React.useEffect(() => {
		onLoad();
		setLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	return (
		<Container maxWidth="sm">
			{feedState.payload?.map((info: IUserFeed) => {
				return <FeedCard cardInfo={info} key={info.id} />;
			})}
		</Container>
	);
};

export default Home;
