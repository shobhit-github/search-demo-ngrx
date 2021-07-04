


export interface Mentor {

    readonly _id: string;
    readonly mentorName: string;
    readonly title: string;
    readonly ratingStar: number;
    readonly location: string;
    readonly description: string;
    readonly skills: Array<string>;
    readonly profilePic: string;
    readonly chargeAmount: number;
    readonly dayAvailable: number;
    readonly timeAvailable: number;
    readonly language: number;
    readonly company: number;
    readonly createdAt: Date | string;
}
