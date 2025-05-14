export type IngredientData = {
	name: string;
	amount: number;
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
    name: string;
	imageURI: string;
	username: string;
	likes: number;
    locale: string;
	ingredients: IngredientData[];
	instructions: string[];
    tags: string[];
    date: Date | { nanoseconds: number; seconds: number };
    id: string;
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

export type ProfileData = {
    preferences: boolean[];
    bio: string;
    username: string;
    allergies: string[];
}
