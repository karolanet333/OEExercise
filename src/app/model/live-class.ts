export class LiveClass{

    constructor(
        public title: string,
        public description: string,
        public type: string,
        public img: string,
        public likes: number,
        public ilike: boolean,
        public startDate: Date,
        public initialStartDate: Date
    ){
    }

    public static fromJson(item){
        return new LiveClass( 
            item.title, 
            item.description, 
            item.type, 
            item.img, 
            item.likes,
            item.ilike,
            new Date(item.startDate),
            new Date(item.startDate)
        );
    }

    public static fromJsonArray(json: any[]): LiveClass[]{
        return json.map(LiveClass.fromJson);
    }
    
}