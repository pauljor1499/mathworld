export default class Content {
	getTest(test_name) {
		const pretest = {
			test_name: "Algebra 1 Midterm",
			test_duration: 3600,
			questions: [
				{
					question:
						"Find the degree and constant term of the polynomial x<sup>4</sup> + 7x<sup>3</sup> – 2x. ",
					choices: [
						{
							letter: "A",
							correct_answer: false,
							choice: `Degree = 7, constant = 1.`,
							is_chosen: false,
						},
						{
							letter: "B",
							correct_answer: false,
							choice: "Degree = 1, constant = 7.",
							is_chosen: false,
						},
						{
							letter: "C",
							correct_answer: true,
							choice: "Degree = 4, constant = 0.",
							is_chosen: false,
						},
						{
							letter: "D",
							correct_answer: false,
							choice: "Degree = 3, constant = -2.",
							is_chosen: false,
						},
					],
					answered: false,
					is_correct: false,
					user_answer: "",
					is_flagged: true,
				},
				{
					question_number: 2,
					question: "Classify this polynomial: 3abc – a + 8b – 2c + 4bc",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
							letter: "A",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "Binomial",
							letter: "B",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "Trinomial",
							letter: "C",
							is_chosen: false,
						},
						{
							correct_answer: true,
							choice: "more than 3 terms",
							letter: "D",
							is_chosen: false,
						},
					],
					answered: false,
					is_correct: false,
					user_answer: "",
					is_flagged: false,
				},
				{
					question_number: 3,
					question:
						"What is the classification of the following polynomial equation? x+10 = 0",
					choices: [
						{
							correct_answer: true,
							choice: `Linear`,
							letter: "A",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "Quadratic",
							letter: "B",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "Cubic",
							letter: "C",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "Quartic",
							letter: "D",
							is_chosen: false,
						},
					],
					answered: false,
					is_correct: false,
					user_answer: "",
					is_flagged: false,
				},
				{
					question_number: 4,
					question:
						"Classify this polynomial: –5u – u<sup>3</sup> + 8 <sup></sup>",
					choices: [
						{
							correct_answer: false,
							choice: `Monomial`,
							letter: "A",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "Binomial",
							letter: "B",
							is_chosen: false,
						},
						{
							correct_answer: true,
							choice: "Trinomial",
							letter: "C",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "more than 3 terms",
							letter: "D",
							is_chosen: false,
						},
					],
					answered: false,
					is_correct: false,
					user_answer: "",
					is_flagged: false,
				},
				{
					question_number: 5,
					question: "Add: (3x - 2) + (3x<sup>2</sup> + 6x)",
					choices: [
						{
							correct_answer: true,
							choice: `3x<sup>2</sup>+9x-2`,
							letter: "A",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
							letter: "B",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "x<sup>2</sup>+x+6xy−3y",
							letter: "C",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "–3x<sup>3</sup>y–4x<sup>2</sup>y<sup>2</sup>–1 ",
							letter: "D",
							is_chosen: false,
						},
					],
					answered: false,
					is_correct: false,
					user_answer: "",
					is_flagged: false,
				},
				{
					question_number: 6,
					question:
						" Simplify: 9x<sup>2</sup> - (5x<sup>2</sup> - 8) - (-3x - 1)",
					choices: [
						{
							correct_answer: false,
							choice: `3x<sup>2</sup>+9x-2`,
							letter: "A",
							is_chosen: false,
						},
						{
							correct_answer: true,
							choice: "4x<sup>2</sup>+3x+9",
							letter: "B",
							is_chosen: false,
						},
						{
							correct_answer: false,
							choice: "-x<sup>2</sup>+3x<sup>2</sup>-2x+3",
							letter: "C",
							is_chosen: false,
						},
						{
							letter: "D",
							is_chosen: false,
							correct_answer: false,
							choice: "x<sup>2</sup>+x+6xy−3y",
						},
					],
					answered: false,
					is_correct: false,
					user_answer: "",
					is_flagged: false,
				},
				{
					question_number: 7,
					question: "Evaluate –2x<sup>3</sup>(x<sup>2</sup> – 3x + 4)",
					choices: [
						{
							letter: "A",
							is_chosen: false,
							correct_answer: false,
							choice: `–2x<sup>5</sup>+6x<sup>4</sup>+8x3`,
						},
						{
							letter: "B",
							is_chosen: false,
							correct_answer: false,
							choice: "–2x<sup>5</sup>-6x<sup>4</sup>–8x3",
						},

						{
							letter: "C",
							is_chosen: false,
							correct_answer: true,
							choice: "–2x<sup>5</sup>+6x<sup>4</sup>–8x3",
						},
						{
							letter: "D",
							is_chosen: false,
							correct_answer: false,
							choice: "2x<sup>5</sup>+6x<sup>4</sup>–8x3",
						},
					],
					answered: false,
					is_correct: false,
					user_answer: "",
					is_flagged: false,
				},
				{
					question_number: 8,
					question:
						"Divide : (18r<sup>5</sup> + 36r<sup>4</sup> + 27r<sup>3</sup>) ÷ 9r",
					choices: [
						{
							letter: "A",
							is_chosen: false,
							correct_answer: true,
							choice: `2r<sup>4</sup>+4r<sup>3</sup>+3r<sup>2</sup>`,
						},
						{
							letter: "B",
							is_chosen: false,
							correct_answer: false,
							choice: `-2r<sup>4</sup>+4r<sup>3</sup>+3r<sup>2</sup>`,
						},
						{
							letter: "C",
							is_chosen: false,
							correct_answer: false,
							choice: "2r<sup>4</sup>-4r<sup>3</sup>+3r<sup>2</sup>",
						},

						{
							letter: "D",
							is_chosen: false,
							correct_answer: false,
							choice: "2r<sup>4</sup>+4r<sup>3</sup>-3r<sup>2</sup>",
						},
					],
					answered: false,
					is_correct: false,
					user_answer: "",
					is_flagged: false,
				},
				{
					question_number: 9,
					question: "Evaluate –2x(y + 3)",
					choices: [
						{
							letter: "A",
							is_chosen: false,
							correct_answer: true,
							choice: `–2xy–6x`,
						},
						{
							letter: "B",
							is_chosen: false,
							correct_answer: false,
							choice: "2xy+6x",
						},
						{
							letter: "C",
							is_chosen: false,
							correct_answer: false,
							choice: "2xy–6x",
						},
						{
							letter: "D",
							is_chosen: false,
							correct_answer: false,
							choice: "–2xy+6x",
						},
					],
					answered: false,
					is_correct: false,
					user_answer: "",
					is_flagged: false,
				},
				{
					question_number: 10,
					question: "Find y in the equation: y + 2 = 3y",
					choices: [
						{
							letter: "A",
							is_chosen: false,
							correct_answer: true,
							choice: `y = 1`,
						},
						{
							letter: "B",
							is_chosen: false,
							correct_answer: false,
							choice: "y = 5",
						},
						{
							letter: "C",
							is_chosen: false,
							correct_answer: false,
							choice: `y = -1`,
						},
						{
							letter: "D",
							is_chosen: false,
							correct_answer: false,
							choice: "y = 2/3",
						},
					],
					answered: false,
					is_correct: false,
					user_answer: "",
					is_flagged: false,
				},
			],
			total_items: 10,
		};

		const contents = [pretest];
		let result;
		contents.forEach((content) => {
			if (content.test_name == test_name) {
				result = content;
			}
		});
		return result;
	}
}
