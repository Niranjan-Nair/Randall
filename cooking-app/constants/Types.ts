export type IngredientData = {
	name: string;
	amount: number;
	unit: string;
};

export type CommentData = {
	uid: number;
	text: string;
	replies: CommentData[];
};

export type InstructionData = {
	header: string;
    description: string;
    imageURI?: string;
};

export type PostData = {
    title: string;
	description: string;
	imageURI: string;
	uid: number;
	likes: number;
	comments: CommentData[];
	ingredients: IngredientData[];
	instructions: InstructionData[];
    date: Date;
};

export type UserData = {
	bio: string;
	username: string;
	imageURI: string;
	password: string;
	uid: number;
	posts: PostData[];
    disallowed: IngredientData[];
	fridge: IngredientData[];
};
