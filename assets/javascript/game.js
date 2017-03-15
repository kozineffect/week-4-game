var wins = 0, loss = 0, blue_num, green_num, red_num, yellow_num, num_goal, guess_sum, cur_score = 0;
$(document).ready(function() {
	
	num_goal = Math.floor(Math.random() * 101) + 19;
	$("#goal_num").html(num_goal);
	$(".w").html(wins);
	$(".l").html(loss);
	blue_num = Math.floor(Math.random() * 11) + 1;
	green_num = Math.floor(Math.random() * 11) + 1;
	red_num = Math.floor(Math.random() * 11) + 1;
	yellow_num = Math.floor(Math.random() * 11) + 1;
	$("#total_score").html(cur_score);

	$(".blue-crystal").click(function(){
		cur_score = blue_num + cur_score;
		$("#total_score").html(cur_score);
		if(cur_score == num_goal)
		{
			wins++;
			cur_score = 0;
			$("#total_score").html(cur_score);
			num_goal = Math.floor(Math.random() * 101) + 19;
			$("#goal_num").html(num_goal);
			blue_num = Math.floor(Math.random() * 11) + 1;
			green_num = Math.floor(Math.random() * 11) + 1;
			red_num = Math.floor(Math.random() * 11) + 1;
			yellow_num = Math.floor(Math.random() * 11) + 1;
			$("#goal_num").html(num_goal);
			$(".w").html(wins);
			$(".l").html(loss);

		}

		if(cur_score > num_goal)
		{
			loss++;
			cur_score = 0;
			$("#total_score").html(cur_score);
			num_goal = Math.floor(Math.random() * 101) + 19;
			$("#goal_num").html(num_goal);
			blue_num = Math.floor(Math.random() * 11) + 1;
			green_num = Math.floor(Math.random() * 11) + 1;
			red_num = Math.floor(Math.random() * 11) + 1;
			yellow_num = Math.floor(Math.random() * 11) + 1;
			$("#goal_num").html(num_goal);
			$(".w").html(wins);
			$(".l").html(loss);

		} 	
	});

	$(".green-crystal").click(function(){
		cur_score = green_num + cur_score;
		$("#total_score").html(cur_score);
		if(cur_score == num_goal)
		{
			wins++;
			$("#total_score").html(cur_score);
			cur_score = 0;
			num_goal = Math.floor(Math.random() * 101) + 19;
			$("#goal_num").html(num_goal);
			blue_num = Math.floor(Math.random() * 11) + 1;
			green_num = Math.floor(Math.random() * 11) + 1;
			red_num = Math.floor(Math.random() * 11) + 1;
			yellow_num = Math.floor(Math.random() * 11) + 1;
			$("#goal_num").html(num_goal);
			$(".w").html(wins);
			$(".l").html(loss);

		}

		if(cur_score > num_goal)
		{
			loss++;
			cur_score = 0;
			$("#total_score").html(cur_score);
			num_goal = Math.floor(Math.random() * 101) + 19;
			$("#goal_num").html(num_goal);
			blue_num = Math.floor(Math.random() * 11) + 1;
			green_num = Math.floor(Math.random() * 11) + 1;
			red_num = Math.floor(Math.random() * 11) + 1;
			yellow_num = Math.floor(Math.random() * 11) + 1;
			$("#goal_num").html(num_goal);
			$(".w").html(wins);
			$(".l").html(loss);

		}	
	});

	$(".red-crystal").click(function(){
		cur_score = red_num + cur_score;
		$("#total_score").html(cur_score); 
		if(cur_score == num_goal)
		{
			wins++;
			cur_score = 0;
			$("#total_score").html(cur_score);
			num_goal = Math.floor(Math.random() * 101) + 19;
			$("#goal_num").html(num_goal);
			blue_num = Math.floor(Math.random() * 11) + 1;
			green_num = Math.floor(Math.random() * 11) + 1;
			red_num = Math.floor(Math.random() * 11) + 1;
			yellow_num = Math.floor(Math.random() * 11) + 1;
			$("#goal_num").html(num_goal);
			$(".w").html(wins);
			$(".l").html(loss);

		}

		if(cur_score > num_goal)
		{
			loss++;
			cur_score = 0;
			$("#total_score").html(cur_score);
			num_goal = Math.floor(Math.random() * 101) + 19;
			$("#goal_num").html(num_goal);
			blue_num = Math.floor(Math.random() * 11) + 1;
			green_num = Math.floor(Math.random() * 11) + 1;
			red_num = Math.floor(Math.random() * 11) + 1;
			yellow_num = Math.floor(Math.random() * 11) + 1;
			$("#goal_num").html(num_goal);
			$(".w").html(wins);
			$(".l").html(loss);

		}	
	});

	$(".yellow-crystal").click(function(){
		cur_score = yellow_num + cur_score;
		$("#total_score").html(cur_score);
		if(cur_score == num_goal)
		{
			wins++;
			cur_score = 0;
			$("#total_score").html(cur_score);
			num_goal = Math.floor(Math.random() * 101) + 19;
			$("#goal_num").html(num_goal);
			blue_num = Math.floor(Math.random() * 11) + 1;
			green_num = Math.floor(Math.random() * 11) + 1;
			red_num = Math.floor(Math.random() * 11) + 1;
			cur_score = 0;
			yellow_num = Math.floor(Math.random() * 11) + 1;
			$("#goal_num").html(num_goal);
			$(".w").html(wins);
			$(".l").html(loss);

		}

		if(cur_score > num_goal)
		{
			loss++;
			cur_score = 0;
			$("#total_score").html(cur_score);
			num_goal = Math.floor(Math.random() * 101) + 19	;
			$("#goal_num").html(num_goal);
			blue_num = Math.floor(Math.random() * 11) + 1;
			green_num = Math.floor(Math.random() * 11) + 1;
			red_num = Math.floor(Math.random() * 11) + 1;	
			yellow_num = Math.floor(Math.random() * 11) + 1;
			$("#goal_num").html(num_goal);
			$(".w").html(wins);
			$(".l").html(loss);

		} 	
	});
});