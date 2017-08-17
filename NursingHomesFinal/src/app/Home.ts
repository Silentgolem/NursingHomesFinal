import { Review } from "./Review";

export class Home {
    constructor
        (
        public userID: string,
        public name: string,
        public address: string,
        public county: string,
        public country: string,
        public rating: number,
        public phone: string,
        public email: string,
        public contact: string,
        public site: string,
        public hiqa: string,
        public beds: string,
        public staff: string,
        public description: string,
        public careTypes:boolean[],
        public facilities:boolean[],
        public tier: number,
        public reviews: Review[]
        ) {

    }

}