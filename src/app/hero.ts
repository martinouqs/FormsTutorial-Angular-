export class Hero {

    constructor(
        private id: number,
        public name: string,
        private power: string,
        private alterEgo?: string
    ) { }
    
}