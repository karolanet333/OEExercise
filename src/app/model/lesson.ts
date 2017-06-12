export class Lesson{

    constructor(
        public title: string,
        public description: string,
        public type: string,
        public img: string,
        public likes: number,
        public ilike: boolean,
        public status: string
    ){
    }

    public static fromJson(item){
        return new Lesson( 
            item.title, 
            item.description, 
            item.type, 
            item.img, 
            item.likes,
            item.ilike,
            item.status
        );
    }

    public static fromJsonArray(json: any[]): Lesson[]{
        return json.map(Lesson.fromJson);
    }
    
}